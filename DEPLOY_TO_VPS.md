# 🚀 Загрузка изменений на VPS

## Шаг 1: Закоммитить изменения в GitHub

Открой **новый терминал** (не тот, где запущен dev-сервер!) и выполни:

```bash
# Перейди в папку проекта
cd C:\Users\xd-user\Desktop\dior\host-land

# Добавь изменённые файлы
git add frontend/app/services/vds/page.tsx
git add frontend/app/ru/services/vds/page.tsx
git add frontend/services.yml
git add frontend/services_ru.yml
git add frontend/VDS_SEPARATION_DONE.md

# Создай коммит
git commit -m "fix: separate Virtual Servers and Bulletproof VDS

- Created separate pages for regular VDS and Bulletproof VDS
- Regular VDS: complaints NOT ignored (standard policies)
- Bulletproof VDS: DMCA ignored, manual review
- Fixed all service links in services.yml and services_ru.yml
- Added comparison tables and warnings"

# Загрузи на GitHub
git push origin main
```

---

## Шаг 2: Обновить на VPS

Подключись к своему VPS по SSH и выполни:

```bash
# Перейди в папку проекта на VPS
cd /path/to/your/project

# Получи последние изменения
git pull origin main

# Перейди в папку frontend
cd frontend

# Пересобери проект (если нужно)
npm run build

# Перезапусти приложение
# Зависит от того, как у тебя настроен запуск (pm2, docker, systemd и т.д.)

# Если используешь PM2:
pm2 restart dior-host

# Если используешь Docker:
docker-compose restart

# Если используешь systemd:
sudo systemctl restart dior-host
```

---

## Быстрая команда для VPS (если используешь Coolify/Docker)

```bash
# SSH на VPS
ssh user@your-vps-ip

# Перейди в проект
cd /path/to/project

# Обнови код
git pull origin main

# Если используешь Docker Compose (как в твоём проекте)
cd frontend
docker-compose down
docker-compose up -d --build
```

---

## Если используешь Coolify (рекомендуется для твоего проекта)

У тебя есть файл `frontend/coolify.yml`, значит можешь использовать Coolify:

1. **Автоматический деплой:**
   - В Coolify настрой GitHub webhook
   - При каждом push в `main` будет автоматический деплой

2. **Ручной деплой:**
   ```bash
   # В интерфейсе Coolify нажми "Redeploy"
   # Или через CLI:
   coolify deploy --project dior-host
   ```

---

## Проверка на VPS

После деплоя проверь, что всё работает:

```bash
# Проверь логи (если используешь PM2)
pm2 logs dior-host

# Проверь логи (если используешь Docker)
docker-compose logs -f

# Открой сайт в браузере
# Проверь эти страницы:
https://your-domain.com/services/vds          ✅ Обычные VDS
https://your-domain.com/bulletproof/vds       ✅ Bulletproof VDS
https://your-domain.com/ru/services/vds       ✅ Русская версия
```

---

## Твоя конфигурация

Судя по файлам в проекте, у тебя есть:
- ✅ `docker-compose.yml`
- ✅ `Dockerfile`
- ✅ `coolify.yml`

**Рекомендую использовать Coolify** - он автоматизирует весь процесс!

---

## Нужна помощь?

Если не знаешь, как у тебя настроен деплой:
1. Подключись к VPS: `ssh user@your-vps-ip`
2. Посмотри процессы: `pm2 list` или `docker ps`
3. Напиши мне результат - помогу настроить правильную команду

---

**Готово! После push на GitHub и pull на VPS - изменения будут live! 🚀**

