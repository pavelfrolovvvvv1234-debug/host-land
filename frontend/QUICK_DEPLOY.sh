#!/bin/bash
# Быстрый деплой изменений на VPS

echo "========================================="
echo "   БЫСТРЫЙ ДЕПЛОЙ НА VPS"
echo "========================================="
echo ""

# Получить последние изменения
echo "[1/4] Получение последних изменений с GitHub..."
git pull origin main

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при git pull"
    exit 1
fi

echo "✅ Изменения получены"
echo ""

# Установить зависимости (если package.json изменился)
echo "[2/4] Проверка зависимостей..."
if git diff HEAD@{1} --name-only | grep -q "package.json"; then
    echo "Обнаружены изменения в package.json, устанавливаю зависимости..."
    npm install
    echo "✅ Зависимости установлены"
else
    echo "✅ package.json не изменился, пропускаю npm install"
fi
echo ""

# Собрать проект
echo "[3/4] Сборка проекта..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при сборке"
    exit 1
fi

echo "✅ Проект собран"
echo ""

# Перезапустить (определи сам, что используешь)
echo "[4/4] Перезапуск приложения..."

# Раскомментируй нужный вариант:

# Если используешь PM2:
# pm2 restart dior-host

# Если используешь Docker Compose:
# docker-compose down && docker-compose up -d --build

# Если используешь systemd:
# sudo systemctl restart dior-host

# Если используешь PM2 (по умолчанию):
if command -v pm2 &> /dev/null; then
    pm2 restart all
    echo "✅ PM2 перезапущен"
elif [ -f "docker-compose.yml" ]; then
    docker-compose restart
    echo "✅ Docker перезапущен"
else
    echo "⚠️ Не найден PM2 или Docker, перезапусти вручную"
fi

echo ""
echo "========================================="
echo "   ✅ ДЕПЛОЙ ЗАВЕРШЁН!"
echo "========================================="
echo ""
echo "Проверь сайт:"
echo "  /services/vds          - Обычные VDS"
echo "  /bulletproof/vds       - Bulletproof VDS"
echo "  /ru/services/vds       - Русская версия"
echo ""

