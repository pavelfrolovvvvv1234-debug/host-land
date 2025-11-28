# Dior Host 2.0

Premium hosting provider platform - Monorepo with Next.js frontend and NestJS backend.

## Tech Stack

- **Monorepo**: TurboRepo with npm workspaces
- **Frontend**: Next.js 14+ (App Router), TypeScript, Tailwind CSS, Shadcn/UI, Zustand
- **Backend**: NestJS (Express), TypeScript, Prisma ORM, BullMQ
- **Database**: PostgreSQL 16
- **Cache/Queue**: Redis 7
- **Infrastructure**: Docker Compose (Dev & Prod), Nginx

## Project Structure

```
dior-host-v2/
├── apps/
│   ├── client/          # Next.js frontend
│   └── api/              # NestJS backend
├── packages/
│   └── dto/              # Shared DTOs/Types
├── docker/               # Docker configs
├── docker-compose.yml     # Development
├── docker-compose.prod.yml # Production
└── .memory/              # Project documentation
```

## Quick Start

### Prerequisites

- Docker & Docker Compose
- Node.js 18+ (for local development)
- npm 9+

### Development

1. **Создайте `.env` файл:**
   ```bash
   cp .env.example .env
   # или на Windows: copy .env.example .env
   ```

2. **Запустите сервисы:**
   ```bash
   make up
   # или
   docker-compose up -d
   ```

3. **Дождитесь запуска (30-60 сек) и выполните миграции:**
   ```bash
   make migrate
   ```

4. **Заполните базу тестовыми данными (опционально):**
   ```bash
   make seed
   ```

5. **Откройте в браузере:**
   - Frontend: http://localhost:3000
   - API Health: http://localhost:3001/health

**Тестовые аккаунты (после seed):**
- Admin: `admin@dior.host` / `admin123`
- User: `user@dior.host` / `user123`

📖 **Подробная инструкция**: См. [QUICKSTART.md](QUICKSTART.md)

### Production

```bash
make prod-build
make prod
# or
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up -d
```

## Available Commands

See `Makefile` for all available commands:

- `make up` - Start development environment
- `make down` - Stop services
- `make logs` - View logs
- `make migrate` - Run database migrations
- `make seed` - Seed database
- `make prod` - Start production environment
- `make clean` - Clean all containers and volumes

## Environment Variables

See `.env.example` for all required environment variables.

## Features

- ✅ Authentication (JWT with refresh tokens)
- ✅ Role-based access control (USER, ADMIN, SUPPORT)
- ✅ Two-factor authentication (TOTP)
- ✅ User management
- ✅ Billing system (Double-entry ledger, invoices, transactions)
- ✅ Server provisioning (BullMQ queues, async processing)
- ✅ Support ticket system (Full CRUD with assignment)
- ✅ Admin dashboard (Statistics and management)
- ✅ Server management UI

## Development

### Local Development (without Docker)

```bash
# Install dependencies
npm install

# Start API
cd apps/api
npm run start:dev

# Start Client (in another terminal)
cd apps/client
npm run dev
```

## License

UNLICENSED
