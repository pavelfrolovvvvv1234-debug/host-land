# Деплой на GitHub и VPS (Dior Host frontend)

---

## 0. Деплой на GitHub (как выложить код)

### 0.1 Создать репозиторий на GitHub

1. Зайди на [github.com](https://github.com) → **New repository**.
2. Имя, например: `diorhost-frontend` или `host-land`.
3. **Public**, без README (у тебя уже есть проект). Создай репо.

### 0.2 Привязать проект и первый пуш (на своём ПК)

В папке проекта (где лежит `frontend/` и т.д.):

```bash
# Если git ещё не инициализирован
git init

# Добавить все файлы
git add .
git commit -m "Initial: Next.js frontend, canonical dior.host, Docker"

# Подставь свой репо (замени USER и REPO на свои)
git remote add origin https://github.com/USER/REPO.git

# Пуш (ветка main; если у тебя master — замени main на master)
git branch -M main
git push -u origin main
```

Если репо уже есть и remote уже настроен:

```bash
git add .
git commit -m "Canonical dior.host, middleware redirect, sitemap/robots"
git push origin main
```

### 0.3 Если GitHub просит логин/пароль

- Лучше использовать **Personal Access Token** (Settings → Developer settings → Personal access tokens): создай токен с правом `repo`, при `git push` в пароль вставь токен.
- Либо настрой **SSH**: тогда remote будет `git@github.com:USER/REPO.git` и пуш по SSH-ключу.

---

## 1. Подготовка VPS

- ОС: **Ubuntu 22.04** или **Debian 12**
- Минимум: 1 CPU, 512 MB RAM (для продакшена лучше 1 GB)
- Открой порт **80** и **443** в файрволе (и 22 для SSH)

---

## 2. Установка на сервере (один раз)

Подключись по SSH и выполни:

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Docker
sudo apt install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Проверка
docker --version
docker compose version
```

Опционально: **Git** (если будешь клонировать репо на VPS):

```bash
sudo apt install -y git
```

---

## 3. Вариант A: Деплой через Docker (рекомендуется)

### 3.1 Клонирование репозитория на VPS

Подставь **свой GitHub USER и имя репо** (как в шаге 0):

```bash
cd ~
git clone https://github.com/USER/REPO.git
cd REPO/frontend
```

Пример: если репо `https://github.com/pavelfrolovvvvv1234-debug/host-land.git`, то после клона: `cd host-land/frontend`.

Если репо приватный — настрой на VPS SSH-ключ или используй Personal Access Token в URL: `https://TOKEN@github.com/USER/REPO.git`.

### 3.2 Переменные окружения

Создай файл `.env.production` в `frontend/`:

```bash
nano .env.production
```

Пример (подставь свои значения):

```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.dior.host
NEXT_PUBLIC_FRONTEND_URL=https://dior.host
API_BASE_URL=https://api.dior.host/v1
FRONTEND_URL=https://dior.host
```

Сохрани (Ctrl+O, Enter, Ctrl+X).

### 3.3 Сборка и запуск

```bash
cd ~/host-land/frontend
docker compose build --no-cache
docker compose up -d
```

Проверка: открой в браузере `http://IP_ТВОЕГО_VPS:3000`. Сайт должен открыться.

### 3.4 Обновление после изменений в GitHub

На VPS (подставь имя папки репо вместо `REPO`):

```bash
cd ~/REPO
git pull
cd frontend
docker compose build --no-cache
docker compose up -d
```

---

## 4. Вариант B: Nginx как reverse proxy + SSL (домен dior.host)

Чтобы сайт открывался по **https://dior.host** (или твоему домену) с SSL.

### 4.1 Установка Nginx и Certbot

```bash
sudo apt install -y nginx certbot python3-certbot-nginx
```

### 4.2 DNS

В панели домена создай A-запись: `dior.host` → IP твоего VPS (или `www` → тот же IP).

### 4.3 Конфиг Nginx

```bash
sudo nano /etc/nginx/sites-available/dior.host
```

Вставь (замени `dior.host` на свой домен):

```nginx
server {
    listen 80;
    server_name dior.host www.dior.host;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Включи сайт и проверь конфиг:

```bash
sudo ln -s /etc/nginx/sites-available/dior.host /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4.4 SSL (Let's Encrypt)

```bash
sudo certbot --nginx -d dior.host -d www.dior.host
```

Следуй подсказкам. После этого сайт будет доступен по **https://dior.host**.

---

## 5. Полезные команды

| Действие              | Команда |
|-----------------------|--------|
| Логи контейнера       | `docker compose -f frontend/docker-compose.yml logs -f` (из папки с репо) |
| Остановить            | `cd frontend && docker compose down` |
| Запустить снова       | `cd frontend && docker compose up -d` |
| Перезапустить контейнер | `docker compose restart` (из папки `frontend`) |

---

## 6. Если порт 3000 занят (address already in use)

Если при `docker compose up -d` появляется **failed to bind host port 0.0.0.0:3000/tcp: address already in use**, на 3000 крутится другой процесс (часто старый Node/Next.js не из Docker). Пока он жив, новый контейнер не поднимется и в браузере будет старая версия сайта.

**Шаги на VPS:**

```bash
# 1. Узнать, какой процесс слушает 3000
sudo lsof -i:3000 -P -n
# Или:
sudo ss -tlnp | grep 3000
```

В выводе будет **PID** (число). Дальше:

```bash
# 2. Убить процесс по PID (подставь свой PID вместо 12345)
sudo kill -9 12345

# Либо убить все node-процессы (если фронт запускался через npm/node)
sudo pkill -9 node || true
```

Если после `pkill node` порт снова занят — возможно, приложение поднимается через **systemd**. Тогда:

```bash
# Список юнитов с "node", "next", "frontend", "dior"
systemctl list-units --type=service --all | grep -E 'node|next|front|dior'
# Остановить и отключить автозапуск (пример имени: frontend.service)
sudo systemctl stop frontend.service
sudo systemctl disable frontend.service
```

Проверить, что порт свободен:

```bash
sudo lsof -i:3000 -P -n
# Должно быть пусто (или только docker-proxy после запуска контейнера).
```

Затем снова запустить только Docker:

```bash
cd ~/REPO/frontend
docker compose up -d
```

Проверка, что отдаётся новая версия (в HTML не должно быть my.dior.host):

```bash
curl -s http://localhost:3000 | grep -o 't.me/diorhost_bot' | head -1
# Должна вывестись строка: t.me/diorhost_bot
```

---

## 7. Краткий чеклист

1. VPS с Ubuntu/Debian, открыты 22, 80, 443.
2. Установлены Docker и Docker Compose.
3. Клонирован репо, в `frontend/` создан `.env.production`.
4. Выполнены `docker compose build` и `docker compose up -d`.
5. (Опционально) Настроены Nginx + Certbot для домена и HTTPS.

После пуша в GitHub на VPS достаточно: `git pull` → `docker compose build` → `docker compose up -d` в папке `frontend`.

---

## 8. Кратко: как грузить на VPS

| Шаг | Где | Что делать |
|-----|-----|------------|
| 1 | ПК | Закоммитить и пуш в GitHub (раздел 0 выше). |
| 2 | VPS | Подключиться по SSH: `ssh user@IP_ТВОЕГО_VPS` |
| 3 | VPS | Зайти в проект: `cd ~/REPO/frontend` (REPO — имя папки репо). |
| 4 | VPS | Подтянуть код: `cd ~/REPO && git pull && cd frontend` |
| 5 | VPS | Пересобрать и запустить: `docker compose build --no-cache && docker compose up -d` |
| 6 | Браузер | Проверить: `https://dior.host` (или `http://IP:3000`). |

Первый раз на VPS: разделы 1–3 (подготовка, Docker, клонирование, `.env.production`, сборка). Дальше — только шаги 4–5 при каждом обновлении.
