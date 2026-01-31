# Обновление сайта на VPS (новая версия)

После того как изменения запушены на GitHub, на VPS выполни:

## 1. Подключись к VPS

```bash
ssh root@IP_ТВОЕГО_СЕРВЕРА
# или
ssh user@IP_ТВОЕГО_СЕРВЕРА
```

## 2. Перейди в папку проекта и подтяни новую версию

```bash
cd /var/www/dior-host
git pull origin main
```

Если проект лежит в подпапке `frontend`:

```bash
cd /var/www/dior-host/frontend
# из корня репо:
cd /var/www/dior-host && git pull origin main
cd frontend
```

## 3. Установи зависимости (если добавлялись пакеты) и пересобери

```bash
cd /var/www/dior-host/frontend
npm install
npm run build
```

## 4. Перезапусти приложение

**Если используешь PM2:**

```bash
pm2 restart all
# или по имени процесса, например:
pm2 restart dior-host
```

**Если используешь systemd:**

```bash
sudo systemctl restart dior-host
# или как у тебя назван сервис
```

**Если просто запускаешь `npm start` вручную:**  
останови процесс (Ctrl+C) и снова запусти:

```bash
npm run build && npm start
```

## 5. Проверка

Открой сайт в браузере и убедись, что кнопки «Заказать» / «Войти» ведут на **https://my.dior.host** без длинных billmgr-ссылок.

---

## Кратко (скопируй и вставь на VPS)

```bash
cd /var/www/dior-host && git pull origin main
cd frontend && npm install && npm run build
pm2 restart all
```

*(Замени путь и команду перезапуска, если у тебя другая структура или не PM2.)*
