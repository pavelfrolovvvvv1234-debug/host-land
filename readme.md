kenoji, [11/28/2025 11:23 PM]
***

### 🏗  DIOR.HOST 2.0

Type: Monorepo / Hybrid (Modular Monolith)
Approach: API-First, Containerized, GitOps ready.

#### 1. TECH STACK (Strict)

Frontend (Client & Admin SPA):
*   Framework: Next.js 14+ (App Router)
*   Lang: TypeScript
*   UI Kit: Tailwind CSS + Shadcn/UI + Radix UI
*   State: Zustand (Global), React Query (Server State)
*   Forms: React Hook Form + Zod
*   Charts: Recharts (для статистики в админке)

Backend (Core API):
*   Framework: NestJS (Express/Fastify adapter)
*   Lang: TypeScript
*   DB: PostgreSQL 16
*   ORM: Prisma ORM
*   Queue: Redis + BullMQ (критично для асинхронного создания серверов)
*   Validation: class-validator + class-transformer

Infrastructure:
*   Container: Docker + Docker Compose
*   Proxy: Nginx (Reverse Proxy + SSL termination)
*   CI/CD: GitHub Actions / GitLab CI

---

#### 2. PROJECT TREE (Structure)

Структура для монорепозитория (удобно шарить типы между фронтом и бэком).


dior-host-v2/
├── .github/                   # CI/CD Workflows
├── docker/                    # Docker configs (dev/prod)
│   ├── nginx/
│   ├── postgres/
│   └── redis/
├── apps/
│   ├── client/                # Next.js (Landing + Dashboard)
│   │   ├── src/
│   │   │   ├── app/           # App Router pages
│   │   │   ├── components/    # UI Kit (Atoms/Molecules)
│   │   │   ├── features/      # Business logic (Billing, Servers)
│   │   │   ├── lib/           # API clients, utils
│   │   │   └── types/         # Frontend specific types
│   │   ├── public/
│   │   └── Dockerfile
│   │
│   └── api/                   # NestJS Core
│       ├── src/
│       │   ├── config/        # Env configs
│       │   ├── modules/
│       │   │   ├── auth/      # JWT, Guards, Strategies
│       │   │   ├── users/     # User management
│       │   │   ├── billing/   # Payment gateways, Invoices
│       │   │   ├── servers/   # Logic for provisioning
│       │   │   ├── support/   # Ticket system
│       │   │   └── external/  # Adapters (Pterodactyl/Proxmox API)
│       │   ├── common/        # Decorators, Filters, Interceptors
│       │   └── main.ts
│       ├── prisma/            # Schema & Migrations
│       └── Dockerfile
│
├── packages/                  # Shared libs (Optional)
│   └── dto/                   # Shared DTOs/Interfaces
│
├── .env.example
├── docker-compose.yml
├── docker-compose.prod.yml
├── Makefile                   # Shortcuts (up, down, logs, migrate)
└── README.md


---

#### 3. GLOBAL LOGIC MAP (Audit)

A. Core Modules (Backend):
1.  Auth Service: JWT (Access/Refresh), 2FA (TOTP), Role Guard (User/Admin/Support).
2.  Billing Service:
    *   Transaction Ledger (Double-entry bookkeeping pattern — обязательно).
    *   Payment Gateways Adapters (Factory pattern).
    *   Recurring Tasks (Cron: списание средств, суспенд услуг).
3.  Provisioning Service (The Bridge):
    *   Queue Consumer (BullMQ): Обработка задач "Create", "Suspend", "Terminate".
    *   API Client: Общение с внешней панелью (Pterodactyl/ISP).
4.  Notification Service: Email (SMTP/Resend), TG Bot notifications.

B. Frontend Features:
1.  Public: SSR Pages (SEO), Dynamic Pricing Calculator.
2.  Dashboard: Protected Routes, Real-time status (SWR/React Query polling), Terminal Emulator (xterm.js — если нужен доступ к консоли).

---

#### 4. DOCKER COMPOSE (Empty/Skeleton Format)

Чистый шаблон для деплоя.

kenoji, [11/28/2025 11:23 PM]
```yaml
version: '3.9'

services:
  # --- Infrastructure ---
  postgres:
    image: postgres:16-alpine
    container_name: dior_db
    restart: always
    environment:
      POSTGRES_DB: ${DB_NAME}
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASS}
    volumes:
      - pg_data:/var/lib/postgresql/data
    networks:
      - internal_net

  redis:
    image: redis:7-alpine
    container_name: dior_redis
    restart: always
    command: redis-server --save 60 1 --loglevel warning
    volumes:
      - redis_data:/data
    networks:
      - internal_net
# --- Application ---
  api:
    container_name: dior_api
    build:
      context: ./apps/api
      dockerfile: Dockerfile
      target: production
    restart: always
    env_file: .env
    depends_on:
      - postgres
      - redis
    networks:
      - internal_net

  client:
    container_name: dior_client
    build:
      context: ./apps/client
      dockerfile: Dockerfile
      target: production
    restart: always
    env_file: .env
    depends_on:
      - api
    networks:
      - internal_net

  # --- Gateway ---
  nginx:
    image: nginx:alpine
    container_name: dior_gateway
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./docker/nginx/conf.d:/etc/nginx/conf.d
      - ./docker/certbot:/etc/letsencrypt
    depends_on:
      - client
      - api
    networks:
      - internal_net

volumes:
  pg_data:
  redis_data:

networks:
  internal_net:
    driver: bridge

`

#### 5. DEPLOYMENT STRATEGY (GitOps)
1.  Git: Ветка main — production.
2.  CI: GitHub Actions собирает образы и пушит в GHCR (Container Registry).
3.  CD: На сервере Watchtower или скрипт в cron, который делает docker compose pull && docker compose up -d.
4.  Migrations: Запускаются отдельным контейнером или командой в entrypoint API перед стартом.

---

## Деплой на VPS (как грузить сайт)

Рабочий проект — Next.js в папке **frontend**. На VPS нужны: Node.js 20+, git, nginx (опционально), PM2 для запуска.

### Первый раз (установка на VPS)

1. **Подключись к серверу:**
   ```bash
   ssh root@IP_СЕРВЕРА
   ```
   (или `ssh user@IP_СЕРВЕРА` — как у тебя настроено.)

2. **Обнови систему и поставь Node.js 20:**
   ```bash
   apt update && apt upgrade -y
   curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
   apt install -y nodejs git nginx certbot python3-certbot-nginx
   npm install -g pm2
   ```

3. **Создай папку и склонируй репозиторий:**
   ```bash
   mkdir -p /var/www/dior-host
   cd /var/www/dior-host
   git clone https://github.com/pavelfrolovvvvv1234-debug/host-land.git .
   ```
   Если репо в подпапке — после клона перейди в неё, например: `cd frontend`.

4. **Установи зависимости и собери проект:**
   ```bash
   cd frontend
   npm install
   cp env.production.example .env.production
   nano .env.production   # при необходимости поправь домен и переменные
   npm run build
   ```

5. **Запусти через PM2:**
   ```bash
   pm2 start npm --name "dior-host" -- start
   pm2 save
   pm2 startup
   ```

6. **Nginx:** настрой виртуальный хост на порт 3000 (или на сокет), SSL через certbot. Либо отдавай сайт напрямую с Node (без nginx) на 80/443.

### Обновление (каждый раз после пуша в GitHub)

На VPS выполни:

```bash
cd /var/www/dior-host
git pull origin main

cd frontend
npm install
npm run build

pm2 restart dior-host
```

(Если проект изначально клонирован в `/var/www/dior-host/frontend`, то после `git pull` делай его из корня: `cd /var/www/dior-host && git pull`, затем `cd frontend` и дальше как выше.)

Проверь в браузере: сайт открывается, кнопки ведут на Telegram-бота @diorhost_bot (https://t.me/diorhost_bot).
