@echo off
chcp 65001 >nul
echo ========================================
echo    ЗАПУСК ЛОКАЛЬНОЙ ВЕРСИИ САЙТА
echo ========================================
echo.

cd /d "%~dp0"

echo [1/3] Проверка зависимостей...
if not exist "node_modules" (
    echo Зависимости не найдены. Устанавливаю...
    call npm install
    if errorlevel 1 (
        echo ОШИБКА: Не удалось установить зависимости!
        pause
        exit /b 1
    )
    echo Зависимости установлены!
) else (
    echo Зависимости найдены.
)

echo.
echo [2/3] Проверка порта 3000...
netstat -ano | findstr :3000 >nul
if errorlevel 1 (
    echo Порт 3000 свободен.
) else (
    echo ВНИМАНИЕ: Порт 3000 уже занят!
    echo Next.js автоматически выберет другой порт (3001, 3002...)
)

echo.
echo [3/3] Запуск dev-сервера...
echo.
echo ========================================
echo    Сайт будет доступен на:
echo    http://localhost:3000
echo ========================================
echo.
echo Для остановки нажмите Ctrl+C
echo.

call npm run dev

pause

