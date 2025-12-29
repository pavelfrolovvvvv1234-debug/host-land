# Скрипт оптимизации и очистки проекта
# Использование: .\optimize.ps1

Write-Host "Начинаю оптимизацию проекта..." -ForegroundColor Cyan

$totalFreed = 0

# 1. Очистка кеша Next.js
Write-Host ""
Write-Host "1. Очистка кеша Next.js..." -ForegroundColor Yellow
if (Test-Path ".next/cache") {
    $cacheSize = (Get-ChildItem -Path ".next/cache" -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
    Remove-Item ".next/cache" -Recurse -Force -ErrorAction SilentlyContinue
    $totalFreed += $cacheSize
    $cacheSizeMB = [math]::Round($cacheSize/1MB, 2)
    Write-Host "   [OK] Очищено: $cacheSizeMB MB" -ForegroundColor Green
} else {
    Write-Host "   [INFO] Кеш уже очищен" -ForegroundColor Gray
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

# 4. Очистка старых build файлов
Write-Host ""
Write-Host "4. Очистка старых build файлов..." -ForegroundColor Yellow
if (Test-Path ".next/standalone") {
    $standaloneSize = (Get-ChildItem -Path ".next/standalone" -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
    Remove-Item ".next/standalone" -Recurse -Force -ErrorAction SilentlyContinue
    $totalFreed += $standaloneSize
    $standaloneSizeMB = [math]::Round($standaloneSize/1MB, 2)
    Write-Host "   [OK] Очищено standalone build: $standaloneSizeMB MB" -ForegroundColor Green
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
