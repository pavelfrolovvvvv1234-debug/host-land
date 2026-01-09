#!/bin/bash

# Быстрый деплой на VPS
# Использование: bash DEPLOY_VPS_QUICK.sh

echo "🚀 Быстрый деплой на VPS"
echo ""

# Переменные (ИЗМЕНИТЕ ПОД СЕБЯ!)
SERVER_USER="root"
SERVER_IP="your-server-ip"

read -p "Введите IP сервера [$SERVER_IP]: " input_ip
SERVER_IP=${input_ip:-$SERVER_IP}

read -p "Введите пользователя [$SERVER_USER]: " input_user
SERVER_USER=${input_user:-$SERVER_USER}

echo ""
echo "📡 Подключаемся к серверу: $SERVER_USER@$SERVER_IP"
echo ""

ssh $SERVER_USER@$SERVER_IP << 'ENDSSH'
    set -e  # Остановка при ошибке
    
    echo "📦 Проверяем Node.js..."
    if ! command -v node &> /dev/null; then
        echo "⚠️  Node.js не установлен. Устанавливаем..."
        curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
        apt install -y nodejs
    fi
    
    echo "📦 Проверяем PM2..."
    if ! command -v pm2 &> /dev/null; then
        echo "⚠️  PM2 не установлен. Устанавливаем..."
        npm install -g pm2
    fi
    
    echo "📂 Создаём директорию проекта..."
    mkdir -p /var/www/dior-host
    cd /var/www/dior-host
    
    if [ ! -d ".git" ]; then
        echo "⬇️  Клонируем репозиторий..."
        git clone https://github.com/pavelfrolovvvvv1234-debug/host-land.git .
    else
        echo "⬇️  Обновляем репозиторий..."
        git pull origin main
    fi
    
    echo "📦 Переходим в frontend..."
    cd frontend
    
    echo "🔧 Устанавливаем зависимости..."
    npm install
    
    if [ ! -f ".env.production" ]; then
        echo "📝 Создаём .env.production..."
        cat > .env.production << EOF
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_FRONTEND_URL=https://diorhost.com
EOF
        echo "⚠️  Файл .env.production создан. Отредактируйте его при необходимости!"
    fi
    
    echo "🏗️  Собираем проект..."
    npm run build
    
    echo "🔄 Запускаем/перезапускаем PM2..."
    pm2 restart dior-host 2>/dev/null || pm2 start npm --name "dior-host" -- start
    pm2 save
    
    echo ""
    echo "✅ Деплой завершён!"
    echo ""
    echo "📊 Статус приложения:"
    pm2 status
    echo ""
    echo "📋 Логи (последние 10 строк):"
    pm2 logs dior-host --lines 10 --nostream
    echo ""
    echo "💡 Следующие шаги:"
    echo "   1. Настройте Nginx (см. DEPLOY_VPS.md)"
    echo "   2. Получите SSL сертификаты: certbot --nginx -d your-domain.com"
    echo "   3. Проверьте сайт: https://your-domain.com"
ENDSSH

echo ""
echo "🎉 Готово!"


