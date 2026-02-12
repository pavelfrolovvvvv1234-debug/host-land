# Скрипт оптимизации и очистки проекта
# Использование: .\optimize.ps1

Write-Host "Начинаю оптимизацию проекта..." -ForegroundColor Cyan

$totalFreed = 0

# 1. Удаление всей папки .next (сборка и кеш Next.js) - ~244 MB
Write-Host ""
Write-Host "1. Очистка Next.js (.next)..." -ForegroundColor Yellow
if (Test-Path ".next") {
    $nextSize = (Get-ChildItem -Path ".next" -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
    Remove-Item ".next" -Recurse -Force -ErrorAction SilentlyContinue
    $totalFreed += $nextSize
    $nextSizeMB = [math]::Round($nextSize/1MB, 2)
    Write-Host "   [OK] Удалено .next: $nextSizeMB MB (пересоздастся при npm run build)" -ForegroundColor Green
} else {
    Write-Host "   [INFO] Папка .next уже удалена" -ForegroundColor Gray
}

# 2. Удаление архивных файлов
Write-Host ""
Write-Host "2. Удаление архивных файлов..." -ForegroundColor Yellow
$archives = Get-ChildItem -Path "." -Include *.tar.gz,*.zip -Recurse -File -ErrorAction SilentlyContinue | Where-Object { $_.FullName -notlike "*node_modules*" }
if ($archives) {
    foreach ($archive in $archives) {
        $size = $archive.Length
        $sizeMB = [math]::Round($size/1MB, 2)
        Write-Host "   [DEL] Удаляю: $($archive.Name) ($sizeMB MB)" -ForegroundColor Gray
        Remove-Item $archive.FullName -Force -ErrorAction SilentlyContinue
        $totalFreed += $size
    }
    Write-Host "   [OK] Архивы удалены" -ForegroundColor Green
} else {
    Write-Host "   [INFO] Архивные файлы не найдены" -ForegroundColor Gray
}

# 3. Удаление временных файлов
Write-Host ""
Write-Host "3. Удаление временных файлов..." -ForegroundColor Yellow
$tempFiles = Get-ChildItem -Path "." -Include temp_*.txt,*.tmp,*.temp -Recurse -File -ErrorAction SilentlyContinue | Where-Object { $_.FullName -notlike "*node_modules*" }
if ($tempFiles) {
    foreach ($file in $tempFiles) {
        $size = $file.Length
        Write-Host "   [DEL] Удаляю: $($file.Name)" -ForegroundColor Gray
        Remove-Item $file.FullName -Force -ErrorAction SilentlyContinue
        $totalFreed += $size
    }
    Write-Host "   [OK] Временные файлы удалены" -ForegroundColor Green
} else {
    Write-Host "   [INFO] Временные файлы не найдены" -ForegroundColor Gray
}

# 4. Удаление дубликата docs (PDF в public/docs достаточно)
Write-Host ""
Write-Host "4. Проверка дубликатов docs..." -ForegroundColor Yellow
if (Test-Path "docs") {
    $docsSize = (Get-ChildItem -Path "docs" -Recurse -File -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
    if ($docsSize -gt 0 -and (Test-Path "public/docs")) {
        Remove-Item "docs" -Recurse -Force -ErrorAction SilentlyContinue
        $totalFreed += $docsSize
        Write-Host "   [OK] Удалён дубликат docs: $([math]::Round($docsSize/1KB,1)) KB" -ForegroundColor Green
    }
} else {
    Write-Host "   [INFO] Дубликат docs не найден" -ForegroundColor Gray
}

# Итоги
Write-Host ""
$separator = "=" * 50
Write-Host $separator -ForegroundColor Cyan
Write-Host "Оптимизация завершена!" -ForegroundColor Green
$totalFreedMB = [math]::Round($totalFreed/1MB, 2)
Write-Host "Освобождено места: $totalFreedMB MB" -ForegroundColor Green
Write-Host $separator -ForegroundColor Cyan
Write-Host ""
Write-Host "Совет: Запустите 'npm run build' для создания оптимизированной production сборки" -ForegroundColor Yellow
