# 🚀 Быстрый старт деплоя в Coolify

## ✅ Что уже настроено:

1. ✅ **API Backend** - Полная структура API routes в `app/api/v1/`
2. ✅ **Dockerfile** - Оптимизированный multi-stage build
3. ✅ **docker-compose.yml** - Для локального тестирования
4. ✅ **next.config.mjs** - Настроен для production с standalone output
5. ✅ **CORS** - Настроен для всех доменов
6. ✅ **Health Check** - `/api/health` endpoint

## 📦 Структура API:

```
/api/v1              - Информация об API
/api/v1/vps          - VPS операции (GET, POST)
/api/v1/vps/{id}     - Статус VPS
/api/v1/vps/{id}/reboot    - Перезагрузка
/api/v1/vps/{id}/snapshot  - Снапшот
/api/v1/domains      - Домены (GET, POST)
/api/v1/abuse/tickets - Abuse тикеты
/api/v1/network/status - Статус сети
/api/health          - Health check
```

## 🔧 Настройка в Coolify:

### 1. Подключите репозиторий:
- Репозиторий: `pavelfrolovvvvv1234-debug/host-land`
- Ветка: `main`
- Тип: **Docker**

### 2. Настройте переменные окружения:

Скопируйте из `env.example.txt` и добавьте в Coolify:

```env
NEXT_PUBLIC_API_URL=https://api.dior.host
NEXT_PUBLIC_FRONTEND_URL=https://dior.host
NEXT_PUBLIC_APP_URL=https://app.dior.host
API_BASE_URL=https://api.dior.host/v1
FRONTEND_URL=https://dior.host
APP_URL=https://app.dior.host
NODE_ENV=production
PORT=3000
API_SECRET_KEY=your-strong-secret-key-here
JWT_SECRET=your-strong-jwt-secret-here
RATE_LIMIT_MAX_REQUESTS=1000
RATE_LIMIT_WINDOW_MS=3600000
ALLOWED_ORIGINS=https://dior.host,https://app.dior.host,https://api.dior.host
```

### 3. Настройте домены:

- **dior.host** → порт 3000 (основной сайт)
- **api.dior.host** → порт 3000 (API будет доступно через `/api/*`)
- **app.dior.host** → порт 3000 (приложение)

### 4. Порты:

- **Порт контейнера:** 3000
- **Протокол:** HTTP (Coolify настроит HTTPS автоматически)

## 🧪 Тестирование:

После деплоя проверьте:

```bash
# Health check
curl https://api.dior.host/api/health

# API info
curl https://api.dior.host/api/v1

# API с авторизацией
curl -H "Authorization: Bearer YOUR_API_KEY" https://api.dior.host/v1/vps
```

## 📝 Важные замечания:

1. **Не коммитьте** `.env.production` в Git
2. **Измените** `API_SECRET_KEY` и `JWT_SECRET` на сильные случайные ключи
3. **Проверьте** что все домены правильно настроены в DNS
4. **SSL сертификаты** Coolify настроит автоматически

## 🐛 Если что-то не работает:

1. Проверьте логи в Coolify
2. Убедитесь что порт 3000 открыт
3. Проверьте переменные окружения
4. Проверьте health endpoint: `/api/health`

## 📚 Дополнительно:

- Полная инструкция: `DEPLOY_COOLIFY.md`
- Пример env: `env.example.txt`


