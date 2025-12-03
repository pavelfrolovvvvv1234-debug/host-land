# Проверка и исправление проблемы на VPS

## Выполни на VPS эти команды:

```bash
# 1. Перейди в папку проекта
cd /var/www/host-land

# 2. Проверь текущую ветку и статус
git status
git log --oneline -5

# 3. Получи последние изменения с GitHub
git pull origin main

# 4. Перейди в frontend
cd frontend

# 5. Проверь, что папка blog существует
ls -la | grep blog
ls -la blog/
ls -la blog/articles-ru/

# 6. Пересобери проект
npm run build

# 7. Перезапусти PM2
pm2 restart dior-host

# 8. Проверь логи на ошибки
pm2 logs dior-host --lines 50
```

## Если ошибка "blog not found"

```bash
cd /var/www/host-land/frontend

# Проверь структуру
find . -name "blog" -type d

# Если blog нет, клонируй проект заново
cd /var/www
mv host-land host-land_backup_$(date +%Y%m%d_%H%M%S)
git clone your-repo-url host-land
cd host-land/frontend
npm install
npm run build
pm2 restart dior-host
```

## Быстрое решение (если не помогло выше)

```bash
cd /var/www/host-land
git fetch origin
git reset --hard origin/main
cd frontend
rm -rf node_modules .next
npm install
npm run build
pm2 restart dior-host
```

