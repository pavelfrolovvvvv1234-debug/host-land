#!/bin/bash

# Скрипт для ручного деплоя на VPS
# Использование: bash DEPLOY_VPS_MANUAL.sh

echo "🚀 Начинаем деплой на VPS..."

# Переменные (ИЗМЕНИТЕ ПОД СЕБЯ!)
SERVER_USER="root"
SERVER_IP="95.182.98.171"
PROJECT_PATH="/var/www/dior-host"
APP_NAME="dior-host"

echo "📡 Подключаемся к серверу: $SERVER_USER@$SERVER_IP"

ssh $SERVER_USER@$SERVER_IP << 'ENDSSH'
    echo "📂 Переходим в директорию проекта..."
    cd /var/www/dior-host || exit
    
    echo "⬇️  Подтягиваем изменения из GitHub..."
    git pull origin main
    
    echo "📦 Переходим в frontend..."
    cd frontend || exit
    
    echo "🔧 Устанавливаем зависимости..."
    npm install
    
    echo "🏗️  Собираем проект..."
    npm run build
    
    echo "🔄 Перезапускаем PM2..."
    pm2 restart dior-host || pm2 start npm --name "dior-host" -- start
    
    echo "✅ Деплой завершён!"
    
    echo "📊 Статус приложения:"
    pm2 status
ENDSSH

echo "🎉 Деплой на VPS завершён успешно!"


