# Финальная проверка и запуск

## Шаг 1: Проверка что приложение запущено

Подключитесь к серверу:
```bash
ssh root@95.182.98.171
```

Проверьте PM2:
```bash
pm2 list
```

Должен быть процесс `dior-host` со статусом `online`.

Если процесса нет, запустите вручную:
```bash
cd /var/www/host-land
npm install --production
pm2 start npm --name "dior-host" -- start
pm2 save
```

Проверьте логи:
```bash
pm2 logs dior-host
```

Должно быть что-то вроде:
```
> @dior-host/client@2.0.0 start
> next start

- ready started server on 0.0.0.0:3000
```

## Шаг 2: Проверка Nginx

Проверьте статус:
```bash
sudo systemctl status nginx
```

Должен быть `active (running)`.

Проверьте конфиг:
```bash
sudo nginx -t
```

Должно быть:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

## Шаг 3: Проверка что приложение отвечает

На сервере проверьте:
```bash
curl http://localhost:3000
```

Должен вернуть HTML код страницы.

Проверьте через Nginx:
```bash
curl http://localhost
```

Также должен вернуть HTML.

## Шаг 4: Проверка в браузере

Откройте в браузере:
- `http://95.182.98.171`

Должна открыться главная страница сайта.

## Шаг 5: Настройка автозапуска PM2 (если еще не сделано)

```bash
pm2 startup
# Скопируйте и выполните команду, которую выдаст PM2 (обычно что-то вроде:
# sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u root --hp /root)
pm2 save
```

## Если что-то не работает

### Приложение не запускается:
```bash
cd /var/www/host-land
pm2 logs dior-host --lines 50
# Проверьте ошибки в логах
```

### Порт 3000 занят:
```bash
lsof -i :3000
# Убейте процесс или измените порт
```

### Nginx не проксирует:
```bash
sudo tail -f /var/log/nginx/dior-host-error.log
# Проверьте ошибки
```

### Проверка что Next.js слушает правильный порт:
```bash
netstat -tlnp | grep 3000
# Должен быть процесс node на порту 3000
```

## Готово!

Если все работает, ваш сайт доступен по адресу:
- `http://95.182.98.171`

При каждом push в main ветку, GitHub Actions автоматически:
1. Соберет проект
2. Задеплоит на сервер
3. Перезапустит приложение через PM2

