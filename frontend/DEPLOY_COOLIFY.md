# 🚀 Деплой в Coolify - Инструкция

## 📋 Подготовка

### 1. Настройка переменных окружения

Создайте файл `.env.production` в корне проекта со следующими переменными:

```env
# Frontend URLs
NEXT_PUBLIC_API_URL=https://api.dior.host
NEXT_PUBLIC_FRONTEND_URL=https://dior.host
NEXT_PUBLIC_APP_URL=https://app.dior.host

# Backend URLs
API_BASE_URL=https://api.dior.host/v1
FRONTEND_URL=https://dior.host
APP_URL=https://app.dior.host

# Environment
NODE_ENV=production
PORT=3000

# Security - ОБЯЗАТЕЛЬНО ИЗМЕНИТЕ В ПРОДАКШЕНЕ!
API_SECRET_KEY=generate-strong-random-key-here
JWT_SECRET=generate-strong-random-jwt-secret-here

# Rate Limiting
RATE_LIMIT_MAX_REQUESTS=1000
RATE_LIMIT_WINDOW_MS=3600000

# CORS
ALLOWED_ORIGINS=https://dior.host,https://app.dior.host,https://api.dior.host
```

### 2. Настройка Coolify

1. **Подключите GitHub репозиторий:**
   - Зайдите в Coolify
   - Создайте новый проект
   - Подключите репозиторий: `pavelfrolovvvvv1234-debug/host-land`
   - Выберите ветку: `main`

2. **Настройте деплой:**
   - Тип приложения: **Docker**
   - Dockerfile: `Dockerfile` (автоматически определится)
   - Build команда: автоматически
   - Port: `3000`

3. **Настройте домены:**
   - **Основной сайт:** `dior.host` → порт 3000
   - **API:** `api.dior.host` → порт 3000 (все запросы к `/api/*` будут работать)
   - **App:** `app.dior.host` → порт 3000

4. **Добавьте переменные окружения в Coolify:**
   - Скопируйте все переменные из `.env.production`
   - Добавьте их в настройки приложения в Coolify
   - **ВАЖНО:** Не добавляйте `.env.production` файл в Git!

### 3. Структура API

API доступно по следующим эндпоинтам:

- `GET /api/v1` - Информация об API
- `GET /api/v1/vps` - Список VPS
- `POST /api/v1/vps` - Создать VPS
- `GET /api/v1/vps/{id}` - Статус VPS
- `POST /api/v1/vps/{id}/reboot` - Перезагрузка VPS
- `POST /api/v1/vps/{id}/snapshot` - Создать снапшот
- `GET /api/v1/domains` - Список доменов
- `POST /api/v1/domains` - Зарегистрировать домен
- `GET /api/v1/abuse/tickets` - Список abuse тикетов
- `GET /api/v1/network/status` - Статус сети
- `GET /api/health` - Health check

### 4. Аутентификация API

Все API эндпоинты требуют Bearer токен:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" https://api.dior.host/v1/vps
```

## 🔧 Локальная разработка

### Запуск с Docker Compose:

```bash
# Скопируйте .env.example в .env.production
cp .env.example .env.production

# Запустите
docker-compose up -d

# Проверьте логи
docker-compose logs -f frontend
```

### Запуск без Docker:

```bash
# Установите зависимости
npm install

# Запустите dev сервер
npm run dev

# Соберите для production
npm run build
npm start
```

## 📝 Проверка деплоя

После деплоя проверьте:

1. **Основной сайт:** https://dior.host
2. **API Health:** https://api.dior.host/api/health
3. **API Info:** https://api.dior.host/api/v1
4. **App:** https://app.dior.host

## 🐛 Решение проблем

### Проблема: Build не проходит
- Проверьте, что все зависимости установлены
- Убедитесь, что Node.js версия >= 20
- Проверьте логи в Coolify

### Проблема: API не отвечает
- Проверьте переменные окружения
- Убедитесь, что порт 3000 открыт
- Проверьте health endpoint: `/api/health`

### Проблема: CORS ошибки
- Проверьте `ALLOWED_ORIGINS` в переменных окружения
- Убедитесь, что `FRONTEND_URL` правильно настроен

## 🔒 Безопасность

- **НЕ коммитьте** `.env.production` в Git
- Используйте сильные секретные ключи
- Настройте rate limiting
- Используйте HTTPS (Coolify автоматически настроит SSL)

## 📚 Дополнительная информация

- [Next.js Documentation](https://nextjs.org/docs)
- [Coolify Documentation](https://coolify.io/docs)
- [Docker Documentation](https://docs.docker.com/)


