#!/bin/bash
# Скрипт для создания файла .env.local в Linux/Mac

echo "===================================="
echo "Создание файла .env.local"
echo "===================================="
echo

# Переходим в папку frontend (если скрипт запущен из корня проекта)
cd frontend

# Создаём файл .env.local
cat > .env.local << 'EOF'
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-V906RRPH8Z
NEXT_PUBLIC_YANDEX_METRIKA_ID=105570768
EOF

echo "Файл .env.local создан!"
echo
echo "Содержимое файла:"
echo "-------------------"
cat .env.local
echo "-------------------"
echo
echo "Теперь перезапустите dev сервер: npm run dev"


