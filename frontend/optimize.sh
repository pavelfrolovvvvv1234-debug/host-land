#!/bin/bash
# Скрипт оптимизации и очистки проекта (Linux/Mac)
# Использование: chmod +x optimize.sh && ./optimize.sh

echo "🧹 Начинаю оптимизацию проекта..."

total_freed=0

# 1. Очистка кеша Next.js
echo ""
echo "1. Очистка кеша Next.js..."
if [ -d ".next/cache" ]; then
    cache_size=$(du -sb .next/cache 2>/dev/null | cut -f1)
    rm -rf .next/cache
    total_freed=$((total_freed + cache_size))
    echo "   ✅ Очищено: $(echo "scale=2; $cache_size/1024/1024" | bc) MB"
else
    echo "   ℹ️  Кеш уже очищен"
fi

# 2. Удаление архивных файлов
echo ""
echo "2. Удаление архивных файлов..."
archives=$(find . -type f \( -name "*.tar.gz" -o -name "*.zip" \) ! -path "*/node_modules/*" 2>/dev/null)
if [ -n "$archives" ]; then
    echo "$archives" | while read -r archive; do
        size=$(stat -f%z "$archive" 2>/dev/null || stat -c%s "$archive" 2>/dev/null)
        echo "   🗑️  Удаляю: $(basename "$archive") ($(echo "scale=2; $size/1024/1024" | bc) MB)"
        rm -f "$archive"
        total_freed=$((total_freed + size))
    done
    echo "   ✅ Архивы удалены"
else
    echo "   ℹ️  Архивные файлы не найдены"
fi

# 3. Удаление временных файлов
echo ""
echo "3. Удаление временных файлов..."
temp_files=$(find . -type f \( -name "temp_*.txt" -o -name "*.tmp" -o -name "*.temp" \) ! -path "*/node_modules/*" 2>/dev/null)
if [ -n "$temp_files" ]; then
    echo "$temp_files" | while read -r file; do
        size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        echo "   🗑️  Удаляю: $(basename "$file")"
        rm -f "$file"
        total_freed=$((total_freed + size))
    done
    echo "   ✅ Временные файлы удалены"
else
    echo "   ℹ️  Временные файлы не найдены"
fi

# 4. Очистка старых build файлов
echo ""
echo "4. Очистка старых build файлов..."
if [ -d ".next/standalone" ]; then
    standalone_size=$(du -sb .next/standalone 2>/dev/null | cut -f1)
    rm -rf .next/standalone
    total_freed=$((total_freed + standalone_size))
    echo "   ✅ Очищено standalone build: $(echo "scale=2; $standalone_size/1024/1024" | bc) MB"
fi

# Итоги
echo ""
echo "=================================================="
echo "✨ Оптимизация завершена!"
echo "📊 Освобождено места: $(echo "scale=2; $total_freed/1024/1024" | bc) MB"
echo "=================================================="
echo ""
echo "💡 Совет: Запустите 'npm run build' для создания оптимизированной production сборки"

