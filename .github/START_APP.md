# Запуск приложения вручную

## Проблема: порт 3000 не слушается

Выполните на сервере:

```bash
ssh root@95.182.98.171
cd /var/www/host-land
```

## Шаг 1: Проверьте что файлы на месте

```bash
ls -la
# Должны быть: .next/, node_modules/, package.json
```

Если нет `.next/` - нужно пересобрать:
```bash
npm install
npm run build
```

## Шаг 2: Установите зависимости production

```bash
npm install --production
```

## Шаг 3: Проверьте PM2

```bash
pm2 list
```

Если процесса `dior-host` нет или он остановлен:

## Шаг 4: Запустите приложение

```bash
cd /var/www/host-land
pm2 start npm --name "dior-host" -- start
```

Или если не работает:
```bash
cd /var/www/host-land
NODE_ENV=production pm2 start npm --name "dior-host" -- start
```

## Шаг 5: Проверьте что запустилось

```bash
pm2 list
# Должен быть dior-host со статусом "online"

pm2 logs dior-host
# Должно быть: "ready started server on 0.0.0.0:3000"
```

## Шаг 6: Проверьте порт

```bash
netstat -tlnp | grep 3000
# Теперь должен быть процесс node на порту 3000
```

## Шаг 7: Сохраните для автозапуска

```bash
pm2 save
pm2 startup
# Выполните команду, которую выдаст PM2
```

## Если не запускается - проверьте логи

```bash
pm2 logs dior-host --lines 100
```

Частые ошибки:
- Нет `.next` папки → `npm run build`
- Нет зависимостей → `npm install --production`
- Ошибка в коде → проверьте логи

