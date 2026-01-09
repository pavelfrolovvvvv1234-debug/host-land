# 🖥️ Деплой на VPS

## 📋 Подготовка

### Требования:
- VPS с Ubuntu 20.04+ или Debian 11+
- Root доступ или пользователь с sudo правами
- Домен, настроенный на IP VPS
- Node.js 20+ (будет установлен)

## 🔧 Шаг 1: Подготовка сервера

### Подключитесь к серверу:

```bash
ssh root@your-server-ip
# или
ssh user@your-server-ip
```

### Обновите систему:

```bash
apt update && apt upgrade -y
```

### Установите необходимые пакеты:

```bash
# Установка Node.js 20 через NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Установка других необходимых пакетов
apt install -y git nginx certbot python3-certbot-nginx

# Проверка версии Node.js
node --version  # Должно быть v20.x.x
npm --version
```

## 📦 Шаг 2: Установка проекта

### Создайте директорию для проекта:

```bash
mkdir -p /var/www/dior-host
cd /var/www/dior-host
```

### Клонируйте репозиторий:

```bash
# Если репозиторий публичный
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git frontend

# Или если приватный, используйте SSH ключ
git clone git@github.com:YOUR_USERNAME/YOUR_REPO.git frontend

cd frontend
```

### Установите зависимости:

```bash
cd frontend
npm ci --production=false
```

## 🔨 Шаг 3: Сборка проекта

### Создайте файл `.env.production`:

```bash
nano .env.production
```

Добавьте:

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# URLs (замените на ваши домены)
NEXT_PUBLIC_FRONTEND_URL=https://diorhost.com
NEXT_PUBLIC_API_URL=https://api.diorhost.com

# Analytics (опционально)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-V906RRPH8Z
NEXT_PUBLIC_YANDEX_METRIKA_ID=105570768
NEXT_PUBLIC_BING_VERIFICATION=your-bing-code
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-code
```

Сохраните: `Ctrl+O`, `Enter`, `Ctrl+X`

### Соберите проект:

```bash
npm run build
```

## 🚀 Шаг 4: Настройка PM2

### Установите PM2:

```bash
npm install -g pm2
```

### Создайте файл конфигурации PM2:

```bash
nano ecosystem.config.js
```

Добавьте:

```javascript
module.exports = {
  apps: [{
    name: 'dior-host-frontend',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/dior-host/frontend',
    instances: 2, // Количество инстансов (рекомендуется 2 для CPU)
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/log/pm2/dior-host-error.log',
    out_file: '/var/log/pm2/dior-host-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    max_memory_restart: '1G'
  }]
};
```

Сохраните и запустите:

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
# Выполните команду, которую выведет pm2 startup
```

## 🌐 Шаг 5: Настройка Nginx

### Создайте конфигурацию Nginx:

```bash
nano /etc/nginx/sites-available/dior-host
```

Добавьте конфигурацию для всех доменов:

```nginx
# Upstream для Next.js
upstream nextjs {
    server 127.0.0.1:3000;
    keepalive 64;
}

# HTTP -> HTTPS редирект для diorhost.com
server {
    listen 80;
    listen [::]:80;
    server_name diorhost.com www.diorhost.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS для diorhost.com
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name diorhost.com www.diorhost.com;

    ssl_certificate /etc/letsencrypt/live/diorhost.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/diorhost.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    location / {
        proxy_pass http://nextjs;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

# Повторите для других доменов (diorhost.net, diors.host, d1or.host, d1ior.com)
# Или используйте wildcard сертификат
```

### Активируйте конфигурацию:

```bash
ln -s /etc/nginx/sites-available/dior-host /etc/nginx/sites-enabled/
nginx -t  # Проверка конфигурации
systemctl reload nginx
```

## 🔒 Шаг 6: Настройка SSL (Let's Encrypt)

### Получите SSL сертификаты:

```bash
# Для каждого домена (или используйте wildcard)
certbot --nginx -d diorhost.com -d www.diorhost.com
certbot --nginx -d diorhost.net -d www.diorhost.net
certbot --nginx -d diors.host -d www.diors.host
certbot --nginx -d d1or.host -d www.d1or.host
certbot --nginx -d d1ior.com -d www.d1ior.com
```

### Автоматическое обновление:

```bash
certbot renew --dry-run  # Проверка
# Обновление настроено автоматически через cron
```

## 🔄 Шаг 7: Автоматическое обновление (опционально)

### Создайте скрипт для обновления:

```bash
nano /usr/local/bin/update-dior-host.sh
```

Добавьте:

```bash
#!/bin/bash
cd /var/www/dior-host/frontend
git pull origin main
npm ci --production=false
npm run build
pm2 restart dior-host-frontend
echo "Update completed at $(date)"
```

Сделайте исполняемым:

```bash
chmod +x /usr/local/bin/update-dior-host.sh
```

### Настройте cron для автоматического обновления (опционально):

```bash
crontab -e
# Добавьте (например, каждый день в 3:00)
0 3 * * * /usr/local/bin/update-dior-host.sh >> /var/log/dior-host-update.log 2>&1
```

## 🛡️ Шаг 8: Настройка Firewall

```bash
# UFW (если установлен)
ufw allow 22/tcp   # SSH
ufw allow 80/tcp   # HTTP
ufw allow 443/tcp  # HTTPS
ufw enable

# Или iptables
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT
iptables -A INPUT -j DROP
```

## 📊 Мониторинг

### Просмотр логов PM2:

```bash
pm2 logs dior-host-frontend
pm2 monit
```

### Просмотр логов Nginx:

```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### Проверка статуса:

```bash
pm2 status
systemctl status nginx
```

## 🔄 Обновление проекта

### Ручное обновление:

```bash
cd /var/www/dior-host/frontend
git pull origin main
npm ci --production=false
npm run build
pm2 restart dior-host-frontend
```

## 🐛 Решение проблем

### Проблема: PM2 не запускается

```bash
# Проверьте логи
pm2 logs dior-host-frontend --lines 50

# Перезапустите
pm2 restart dior-host-frontend
```

### Проблема: Nginx не работает

```bash
# Проверьте конфигурацию
nginx -t

# Перезапустите
systemctl restart nginx

# Проверьте логи
tail -f /var/log/nginx/error.log
```

### Проблема: Порт 3000 занят

```bash
# Найдите процесс
lsof -i :3000
# или
netstat -tulpn | grep :3000

# Убейте процесс
kill -9 <PID>
```

## 📝 Чеклист деплоя

- [ ] Сервер подготовлен (Node.js, Nginx установлены)
- [ ] Репозиторий клонирован
- [ ] Зависимости установлены
- [ ] Проект собран (`npm run build`)
- [ ] PM2 настроен и запущен
- [ ] Nginx настроен для всех доменов
- [ ] SSL сертификаты получены
- [ ] Firewall настроен
- [ ] Сайт открывается на всех доменах
- [ ] Автоматическое обновление настроено (опционально)

## 🔒 Безопасность

1. **Измените SSH порт** (опционально, но рекомендуется)
2. **Отключите root логин** через SSH
3. **Используйте SSH ключи** вместо паролей
4. **Настройте fail2ban** для защиты от брутфорса
5. **Регулярно обновляйте систему**: `apt update && apt upgrade`

---

**Готово!** Ваш сайт задеплоен на VPS 🎉


