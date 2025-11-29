# Полная настройка сервера для работы сайта

## Шаг 1: Установка Nginx

Подключитесь к серверу:
```bash
ssh root@95.182.98.171
```

Установите Nginx:
```bash
sudo apt update
sudo apt install -g nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

## Шаг 2: Настройка Nginx

1. **Создайте конфиг для сайта:**
```bash
sudo nano /etc/nginx/sites-available/dior-host
```

2. **Скопируйте содержимое из `.github/nginx-config.conf`** и замените:
   - `your-domain.com` на ваш домен или IP `95.182.98.171`

3. **Активируйте сайт:**
```bash
sudo ln -s /etc/nginx/sites-available/dior-host /etc/nginx/sites-enabled/
sudo nginx -t  # Проверка конфига
sudo systemctl reload nginx
```

## Шаг 3: Настройка PM2 (автозапуск)

После первого деплоя выполните на сервере:
```bash
cd /var/www/host-land
pm2 startup
# Скопируйте и выполните команду, которую выдаст PM2
pm2 save
```

Это обеспечит автозапуск приложения при перезагрузке сервера.

## Шаг 4: Проверка работы

1. **Проверьте что приложение запущено:**
```bash
pm2 list
pm2 logs dior-host
```

2. **Проверьте Nginx:**
```bash
sudo systemctl status nginx
curl http://localhost:3000  # Должен вернуть HTML
```

3. **Откройте в браузере:**
   - `http://95.182.98.171` (или ваш домен)

## Шаг 5: Настройка SSL (опционально, но рекомендуется)

Установите Certbot для Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Полезные команды

### Управление приложением:
```bash
pm2 list              # Список процессов
pm2 logs dior-host    # Логи приложения
pm2 restart dior-host # Перезапуск
pm2 stop dior-host    # Остановка
pm2 delete dior-host  # Удаление
```

### Управление Nginx:
```bash
sudo systemctl status nginx
sudo systemctl restart nginx
sudo systemctl reload nginx
sudo nginx -t  # Проверка конфига
```

### Просмотр логов:
```bash
# Логи Nginx
sudo tail -f /var/log/nginx/dior-host-access.log
sudo tail -f /var/log/nginx/dior-host-error.log

# Логи приложения
pm2 logs dior-host
```

## Структура после деплоя

```
/var/www/host-land/
├── .next/          # Собранное приложение
├── node_modules/   # Зависимости
├── package.json
├── public/        # Статические файлы
└── src/           # Исходный код (не нужен для production)
```

## Проблемы и решения

### Приложение не запускается:
```bash
cd /var/www/host-land
npm install --production
pm2 restart dior-host
pm2 logs dior-host
```

### Nginx не проксирует:
```bash
sudo nginx -t
sudo systemctl reload nginx
# Проверьте что приложение слушает порт 3000
netstat -tlnp | grep 3000
```

### Порт 3000 занят:
```bash
# Найдите процесс
lsof -i :3000
# Убейте процесс или измените порт в package.json
```

