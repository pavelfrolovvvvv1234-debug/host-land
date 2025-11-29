# Диагностика проблем с сайтом

## Проверка на сервере

Выполните на сервере:

```bash
ssh root@95.182.98.171
```

### 1. Проверьте что приложение запущено:
```bash
pm2 list
pm2 logs dior-host --lines 50
```

### 2. Проверьте структуру файлов:
```bash
cd /var/www/host-land
ls -la
# Должны быть: .next/, node_modules/, package.json, public/, src/
```

### 3. Проверьте что .next папка есть:
```bash
ls -la .next
# Должна быть папка static и другие файлы
```

### 4. Проверьте логи Nginx:
```bash
sudo tail -f /var/log/nginx/dior-host-error.log
```

### 5. Перезапустите приложение:
```bash
cd /var/www/host-land
pm2 restart dior-host
pm2 logs dior-host
```

### 6. Если не работает - пересоберите:
```bash
cd /var/www/host-land
npm run build
pm2 restart dior-host
```

## Возможные проблемы:

1. **Нет .next папки** - нужно пересобрать
2. **Неправильные пути** - файлы не в том месте
3. **Ошибки в коде** - проверьте логи PM2
4. **Проблемы с зависимостями** - переустановите

