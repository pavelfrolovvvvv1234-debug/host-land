@echo off
chcp 65001 >nul
echo ========================================
echo    ЗАГРУЗКА ИЗМЕНЕНИЙ НА GITHUB
echo ========================================
echo.

cd frontend

echo [1/4] Добавление изменённых файлов...
git add app/services/vds/page.tsx
git add app/ru/services/vds/page.tsx
git add services.yml
git add services_ru.yml
git add VDS_SEPARATION_DONE.md

echo.
echo [2/4] Создание коммита...
git commit -m "fix: separate Virtual Servers and Bulletproof VDS to different pages

- Created separate pages for regular VDS (/services/vds) and Bulletproof VDS (/bulletproof/vds)
- Regular VDS: complaints are NOT ignored (standard datacenter policies)
- Bulletproof VDS: DMCA ignored, manual review, no auto-shutdowns
- Fixed all service links in services.yml and services_ru.yml
- Added comparison tables between regular and bulletproof services
- Added missing links for TurboVDS and IPHM services"

echo.
echo [3/4] Загрузка на GitHub...
git push origin main

echo.
echo [4/4] Готово!
echo ========================================
echo    ИЗМЕНЕНИЯ УСПЕШНО ЗАГРУЖЕНЫ
echo ========================================
pause


