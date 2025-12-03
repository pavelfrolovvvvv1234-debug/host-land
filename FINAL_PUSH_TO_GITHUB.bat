@echo off
chcp 65001 >nul
cls
echo ╔════════════════════════════════════════════════════════════╗
echo ║           ЗАГРУЗКА ИЗМЕНЕНИЙ НА GITHUB                     ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo [1/4] Добавление всех изменённых файлов...
echo.

git add frontend/app/services/page.tsx
git add frontend/app/services/vds/page.tsx
git add frontend/app/ru/services/page.tsx
git add frontend/app/ru/services/vds/page.tsx
git add frontend/services.yml
git add frontend/services_ru.yml
git add frontend/VDS_SEPARATION_DONE.md
git add frontend/FINAL_CHECK_SUMMARY.md
git add DEPLOY_TO_VPS.md
git add PUSH_TO_GITHUB.bat
git add FINAL_PUSH_TO_GITHUB.bat
git add CHECK_VPS_STATUS.md
git add frontend/QUICK_DEPLOY.sh

echo ✅ Файлы добавлены
echo.
echo [2/4] Создание коммита...
echo.

git commit -m "fix: separate VDS services and align RU/EN designs

✅ Created separate pages for regular VDS vs Bulletproof VDS
   - /services/vds - Regular VDS (complaints NOT ignored)
   - /bulletproof/vds - Bulletproof VDS (DMCA ignored)
   - /ru/services/vds - Русские обычные VDS
   - /ru/bulletproof/vds - Русские абузоустойчивые VDS

✅ Fixed all service links in services.yml and services_ru.yml
   - Bulletproof VDS: /bulletproof/vds
   - Regular VDS: /services/vds
   - Bulletproof Domains: /bulletproof/domains
   - All services have correct /ru/ prefixes

✅ Russian services page design now matches English version
   - Identical card layouts and hover effects
   - Same framer-motion animations
   - Same gradient styles and icons

✅ Added comparison tables showing Regular vs Bulletproof
✅ Added warnings on Regular VDS pages
✅ All linter checks passed
✅ No redirects - each service has its own page"

if errorlevel 1 (
    echo.
    echo ⚠️ Не удалось создать коммит
    echo Возможно нет изменений или ошибка
    pause
    exit /b 1
)

echo ✅ Коммит создан
echo.
echo [3/4] Загрузка на GitHub...
echo.

git push origin main

if errorlevel 1 (
    echo.
    echo ❌ Ошибка при push на GitHub
    echo Проверь подключение к интернету
    pause
    exit /b 1
)

echo ✅ Успешно загружено на GitHub!
echo.
echo [4/4] Готово!
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║           ✅ ВСЁ УСПЕШНО ЗАГРУЖЕНО!                        ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo Теперь на VPS выполни:
echo.
echo   ssh root@95.182.98.171
echo   cd /var/www/host-land
echo   git pull origin main
echo   cd frontend
echo   npm run build
echo   pm2 restart dior-host
echo.
pause

