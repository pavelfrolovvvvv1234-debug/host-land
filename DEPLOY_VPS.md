# Деплой на VPS (Dior Host frontend)

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

```bash
cd ~
git clone https://github.com/pavelfrolovvvvv1234-debug/host-land.git
cd host-land/frontend
```

Если репо приватный — настрой SSH-ключ или Personal Access Token.

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

```bash
cd ~/host-land
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
| Логи контейнера       | `docker compose -f frontend/docker-compose.yml logs -f` |
| Остановить            | `cd frontend && docker compose down` |
| Запустить снова       | `cd frontend && docker compose up -d` |
| Перезапустить контейнер | `docker compose restart` (из папки `frontend`) |

---

## 6. Краткий чеклист

1. VPS с Ubuntu/Debian, открыты 22, 80, 443.
2. Установлены Docker и Docker Compose.
3. Клонирован репо, в `frontend/` создан `.env.production`.
4. Выполнены `docker compose build` и `docker compose up -d`.
5. (Опционально) Настроены Nginx + Certbot для домена и HTTPS.

После пуша в GitHub на VPS достаточно: `git pull` → `docker compose build` → `docker compose up -d` в папке `frontend`.
