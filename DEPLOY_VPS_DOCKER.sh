#!/bin/bash

# Скрипт для деплоя через Docker на VPS
# Использование: bash DEPLOY_VPS_DOCKER.sh

echo "🚀 Начинаем деплой через Docker..."

# Переменные (ИЗМЕНИТЕ ПОД СЕБЯ!)
SERVER_USER="root"
SERVER_IP="95.182.98.171"
PROJECT_PATH="/var/www/dior-host"

echo "📡 Подключаемся к серверу: $SERVER_USER@$SERVER_IP"

ssh $SERVER_USER@$SERVER_IP << 'ENDSSH'
    echo "📂 Переходим в директорию проекта..."
    cd /var/www/dior-host || exit
    
    echo "⬇️  Подтягиваем изменения из GitHub..."
    git pull origin main
    
    echo "🛑 Останавливаем старые контейнеры..."
    docker-compose down
    
    echo "🏗️  Пересобираем образ..."
    docker-compose build frontend
    
    echo "🚀 Запускаем новую версию..."
    docker-compose up -d frontend
    
    echo "✅ Деплой завершён!"
    
    echo "📊 Статус контейнеров:"
    docker-compose ps
    
    echo "📋 Логи (последние 20 строк):"
    docker-compose logs --tail=20 frontend
ENDSSH

echo "🎉 Деплой через Docker завершён успешно!"

