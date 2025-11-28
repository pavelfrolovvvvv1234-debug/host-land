# 🚀 Quick Start Guide - Dior Host 2.0

## Шаг 1: Подготовка окружения

### 1.1 Создайте файл `.env`

Скопируйте `.env.example` в `.env` и настройте переменные:

```bash
# Windows
copy .env.example .env

# Linux/Mac
cp .env.example .env
```

### 1.2 Настройте переменные окружения

Откройте `.env` и убедитесь, что все переменные настроены. Минимальные настройки для локального запуска:

```env
DB_NAME=dior
DB_USER=user
DB_PASS=password
DATABASE_URL=postgresql://user:password@postgres:5432/dior?schema=public

REDIS_HOST=redis
REDIS_PORT=6379
REDIS_URL=redis://redis:6379

JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_REFRESH_SECRET=your-super-secret-refresh-key-change-in-production
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

NODE_ENV=development
API_PORT=3001
CLIENT_PORT=3000
API_URL=http://localhost:3001
CLIENT_URL=http://localhost:3000
```

## Шаг 2: Запуск проекта

### Вариант A: Docker Compose (Рекомендуется)

```bash
# 1. Запустить все сервисы
make up
# или
docker-compose up -d

# 2. Дождаться запуска (30-60 секунд)
# Проверить статус:
docker-compose ps

# 3. Запустить миграции базы данных
make migrate
# или
docker-compose exec api npm run prisma:migrate:deploy

# 4. (Опционально) Заполнить базу тестовыми данными
make seed
# или
docker-compose exec api npm run prisma:seed
```

### Вариант B: Локальная разработка (без Docker)

```bash
# 1. Установить зависимости
npm install

# 2. Запустить PostgreSQL и Redis локально
# Или использовать Docker только для БД:
docker-compose up -d postgres redis

# 3. Настроить DATABASE_URL в .env на localhost:5432

# 4. Сгенерировать Prisma Client
cd apps/api
npm run prisma:generate

# 5. Запустить миграции
npm run prisma:migrate:dev

# 6. Запустить API (в одном терминале)
cd apps/api
npm run start:dev

# 7. Запустить Client (в другом терминале)
cd apps/client
npm run dev
```

## Шаг 3: Проверка работы

### 3.1 Проверьте сервисы

- **API**: http://localhost:3001/health
- **Client**: http://localhost:3000
- **API Docs**: http://localhost:3001/api

### 3.2 Тестовые аккаунты

После выполнения `make seed` будут созданы:

**Admin:**
- Email: `admin@dior.host`
- Password: `admin123` (измените в продакшене!)

**User:**
- Email: `user@dior.host`
- Password: `user123`

## Шаг 4: Первый запуск

1. Откройте http://localhost:3000
2. Зарегистрируйтесь или войдите с тестовым аккаунтом
3. Создайте сервер через UI
4. Проверьте админ-панель (если вы admin)

## Полезные команды

```bash
# Просмотр логов
make logs              # Все сервисы
make logs-api          # Только API
make logs-client       # Только Client

# Остановка
make down

# Перезапуск
make restart

# Очистка (удалит все данные!)
make clean

# Продакшн сборка
make prod-build
make prod
```

## Возможные проблемы

### Проблема: Порты заняты

Если порты 3000, 3001, 5432, 6379 заняты:

1. Измените порты в `docker-compose.yml`
2. Или остановите конфликтующие сервисы

### Проблема: Ошибки миграций

```bash
# Сбросить базу и пересоздать
docker-compose down -v
docker-compose up -d postgres
docker-compose exec api npm run prisma:migrate:deploy
```

### Проблема: Prisma Client не найден

```bash
cd apps/api
npm run prisma:generate
```

## Следующие шаги

1. ✅ Проект запущен
2. 🔧 Настройте реальные API ключи (Stripe, SMTP)
3. 🔧 Интегрируйте реальные API (Pterodactyl/Proxmox)
4. 🚀 Настройте CI/CD для деплоя
5. 📊 Добавьте мониторинг и логирование

## Поддержка

Если что-то не работает:
1. Проверьте логи: `make logs`
2. Проверьте статус контейнеров: `docker-compose ps`
3. Проверьте `.env` файл
4. Убедитесь, что Docker запущен

