@echo off
REM Скрипт для создания файла .env.local в Windows

echo ====================================
echo Создание файла .env.local
echo ====================================
echo.

REM Переходим в папку frontend (если скрипт запущен из корня проекта)
cd frontend

REM Создаём файл .env.local
(
echo NEXT_PUBLIC_GA_MEASUREMENT_ID=G-V906RRPH8Z
echo NEXT_PUBLIC_YANDEX_METRIKA_ID=105570768
) > .env.local

echo Файл .env.local создан!
echo.
echo Содержимое файла:
echo -------------------
type .env.local
echo -------------------
echo.
echo Теперь перезапустите dev сервер: npm run dev
echo.
pause


