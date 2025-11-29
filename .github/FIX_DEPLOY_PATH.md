# Исправление пути деплоя

## Проблема
В `/var/www/host-land` деплоится структура с папкой `apps`, а нужно деплоить содержимое `apps/client` напрямую.

## Быстрое исправление вручную

На сервере выполните:

```bash
cd /var/www/host-land
ls -la
# Должна быть папка apps

cd apps/client
ls -la
# Здесь должен быть package.json

# Запустите из правильной директории
npm install --production
pm2 start npm --name "dior-host" -- start
pm2 save
```

Или переместите файлы:

```bash
cd /var/www/host-land
mv apps/client/* .
mv apps/client/.[!.]* . 2>/dev/null || true
rm -rf apps

# Теперь запускайте из корня
npm install --production
pm2 start npm --name "dior-host" -- start
pm2 save
```

## После исправления workflow

После следующего деплоя файлы будут деплоиться напрямую в `/var/www/host-land` без папки `apps`.

