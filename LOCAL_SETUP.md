# 🚀 Локальный запуск без Docker

## Вариант 1: С Docker только для БД (Рекомендуется)

Если у вас есть Docker, но вы хотите запускать приложения локально:

```bash
# 1. Запустить только PostgreSQL и Redis
docker-compose up -d postgres redis

# 2. Установить зависимости (если еще не установлены)
npm install

# 3. Настроить Prisma
cd apps/api
npm run prisma:generate

# 4. Запустить миграции
npm run prisma:migrate:dev

# 5. Заполнить базу (опционально)
npm run prisma:seed

# 6. В одном терминале - запустить API
cd apps/api
npm run start:dev

# 7. В другом терминале - запустить Client
cd apps/client
npm run dev
```

## Вариант 2: Полностью локально

### Установить PostgreSQL и Redis локально:

**PostgreSQL:**
- Windows: https://www.postgresql.org/download/windows/
- Или через Chocolatey: `choco install postgresql`

**Redis:**
- Windows: https://github.com/microsoftarchive/redis/releases
- Или через WSL

### Затем:

1. Создать базу данных:
```sql
CREATE DATABASE dior;
CREATE USER user WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE dior TO user;
```

2. Обновить `.env`:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/dior?schema=public
REDIS_URL=redis://localhost:6379
```

3. Запустить как в Варианте 1 (шаги 2-7)

## Вариант 3: Быстрый старт (без БД, только UI)

Если нужно просто посмотреть интерфейс:

```bash
cd apps/client
npm install
npm run dev
```

Но API не будет работать без базы данных!

