@echo off
chcp 65001 >nul
echo ========================================
echo    ЗАГРУЗКА НА GITHUB
echo ========================================
echo.

echo [1/3] Добавление файлов в Git...
git add frontend/app/services/vds/page.tsx
git add frontend/app/ru/services/vds/page.tsx
git add frontend/services.yml
git add frontend/services_ru.yml
git add frontend/VDS_SEPARATION_DONE.md
git add DEPLOY_TO_VPS.md
git add frontend/QUICK_DEPLOY.sh

echo.
echo [2/3] Создание коммита...
git commit -m "fix: separate Virtual Servers and Bulletproof VDS to different pages - Created separate pages for regular VDS (/services/vds) and Bulletproof VDS (/bulletproof/vds) - Regular VDS: complaints are NOT ignored (standard datacenter policies) - Bulletproof VDS: DMCA ignored, manual review, no auto-shutdowns - Fixed all service links in services.yml and services_ru.yml - Added comparison tables between regular and bulletproof services - Added missing links for TurboVDS and IPHM services - Added deployment scripts"

if errorlevel 1 (
    echo.
    echo ⚠️ Нет изменений для коммита или ошибка
    pause
    exit /b 1
)

echo.
echo [3/3] Загрузка на GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo ❌ Ошибка при push
    pause
    exit /b 1
)

echo.
echo ========================================
echo    ✅ УСПЕШНО ЗАГРУЖЕНО НА GITHUB!
echo ========================================
echo.
echo Теперь на VPS выполни:
echo   ssh user@your-vps
echo   cd /path/to/project/frontend
echo   ./QUICK_DEPLOY.sh
echo.
pause

