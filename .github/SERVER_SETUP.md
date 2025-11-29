# Настройка сервера для деплоя

## Создание директории на сервере

### Вариант 1: Через SSH (рекомендуется)

1. **Подключитесь к серверу по SSH:**
   ```bash
   ssh root@95.182.98.171
   ```
   Введите пароль: `lY3wW4qH1woH`

2. **Создайте директорию:**
   ```bash
   sudo mkdir -p /var/www/host-land
   ```

3. **Установите правильные права:**
   ```bash
   sudo chown -R root:root /var/www/host-land
   sudo chmod -R 755 /var/www/host-land
   ```

4. **Проверьте, что директория создана:**
   ```bash
   ls -la /var/www/
   ```
   Должна быть видна папка `host-land`

### Вариант 2: Через GitHub Actions (автоматически)

Можно добавить шаг в workflow, который создаст директорию автоматически:

```yaml
- name: Create directory on server
  uses: appleboy/ssh-action@master
  with:
    host: ${{ secrets.HOST }}
    username: ${{ secrets.USERNAME }}
    password: ${{ secrets.PASSWORD }}
    port: 22
    script: |
      mkdir -p /var/www/host-land
      chmod -R 755 /var/www/host-land
```

## Настройка Nginx (опционально)

Если нужно настроить веб-сервер для раздачи файлов:

1. **Создайте конфиг Nginx:**
   ```bash
   sudo nano /etc/nginx/sites-available/host-land
   ```

2. **Добавьте конфигурацию:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;  # или IP 95.182.98.171
       
       root /var/www/host-land;
       index index.html index.htm;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. **Активируйте сайт:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/host-land /etc/nginx/sites-enabled/
   sudo nginx -t  # проверка конфига
   sudo systemctl reload nginx
   ```

## Установка Node.js и PM2 (для Next.js)

Если деплоите Next.js приложение:

1. **Установите Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Установите PM2:**
   ```bash
   sudo npm install -g pm2
   ```

3. **Проверьте установку:**
   ```bash
   node --version
   npm --version
   pm2 --version
   ```

## Быстрая команда (все в одной строке)

```bash
ssh root@95.182.98.171 "mkdir -p /var/www/host-land && chmod -R 755 /var/www/host-land && ls -la /var/www/"
```

Введите пароль `lY3wW4qH1woH` когда попросит.

## Проверка

После создания директории, проверьте:

```bash
ssh root@95.182.98.171
cd /var/www/host-land
pwd  # должен показать /var/www/host-land
```

