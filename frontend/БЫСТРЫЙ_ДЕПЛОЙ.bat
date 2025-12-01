@echo off
REM Скрипт для быстрого деплоя файлов верификации

echo ====================================
echo Деплой файлов верификации
echo ====================================
echo.

cd ..

echo Добавляем файлы в git...
git add frontend/public/google3f9d3d2f65137c4d.html
git add frontend/public/yandex_c97b880978746e2b.html
git add frontend/public/BingSiteAuth.xml

echo.
echo Проверка статуса git:
git status --short frontend/public/

echo.
echo Готовы закоммитить? (y/n)
set /p confirm="Введите y для коммита: "

if "%confirm%"=="y" (
    echo.
    echo Коммитим изменения...
    git commit -m "Add verification files for Google, Yandex, Bing"
    
    echo.
    echo Пушим в GitHub...
    git push
    
    echo.
    echo ====================================
    echo Готово! Файлы запушены в GitHub
    echo ====================================
    echo.
    echo Теперь на сервере выполните:
    echo   git pull
    echo   docker-compose build frontend
    echo   docker-compose up -d frontend
    echo.
) else (
    echo.
    echo Отменено. Файлы добавлены в staging, но не закоммичены.
    echo Выполните вручную: git commit и git push
)

pause


