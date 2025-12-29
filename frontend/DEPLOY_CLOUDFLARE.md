# 🚀 Деплой на Cloudflare Pages

## 📋 Подготовка

### 1. Требования
- Аккаунт на [Cloudflare](https://dash.cloudflare.com)
- Репозиторий на GitHub/GitLab/Bitbucket
- Node.js 20+ (для локальной проверки)

### 2. Настройка проекта для Cloudflare Pages

Cloudflare Pages автоматически определяет Next.js, но нужно убедиться, что проект настроен правильно.

## 🔧 Шаг 1: Подготовка репозитория

### Убедитесь, что код в Git:

```bash
cd frontend
git add .
git commit -m "Prepare for Cloudflare Pages deployment"
git push origin main
```

## 🌐 Шаг 2: Деплой через Cloudflare Dashboard

### Вариант A: Автоматический деплой из Git

1. **Войдите в Cloudflare Dashboard:**
   - Перейдите на [dash.cloudflare.com](https://dash.cloudflare.com)
   - Выберите аккаунт

2. **Создайте новый проект:**
   - Перейдите в **Pages** → **Create a project**
   - Выберите **Connect to Git**
   - Авторизуйтесь через GitHub/GitLab/Bitbucket
   - Выберите репозиторий

3. **Настройте проект:**
   - **Project name:** `dior-host-frontend` (или любое другое)
   - **Production branch:** `main` (или `master`)
   - **Framework preset:** `Next.js` (автоматически определится)
   - **Build command:** `npm run build` (или оставьте пустым, Cloudflare определит)
   - **Build output directory:** `.next` (или оставьте пустым)

4. **Настройте переменные окружения:**
   - Нажмите **Environment variables**
   - Добавьте следующие переменные:

   ```env
   NODE_VERSION=20
   NPM_VERSION=10
   NEXT_TELEMETRY_DISABLED=1
   NODE_ENV=production
   ```

   **Опционально (для аналитики):**
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-V906RRPH8Z
   NEXT_PUBLIC_YANDEX_METRIKA_ID=105570768
   NEXT_PUBLIC_BING_VERIFICATION=your-bing-code
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-code
   ```

5. **Настройте домен:**
   - После первого деплоя перейдите в **Custom domains**
   - Добавьте домены:
     - `diorhost.com`
     - `diorhost.net`
     - `diors.host`
     - `d1or.host`
     - `d1ior.com`
   - Cloudflare автоматически настроит SSL

6. **Запустите деплой:**
   - Нажмите **Save and Deploy**
   - Дождитесь завершения сборки (обычно 3-5 минут)

## 🔧 Шаг 3: Настройка Next.js для Cloudflare Pages

### Создайте файл `wrangler.toml` (опционально):

```toml
name = "dior-host-frontend"
compatibility_date = "2024-01-01"

[env.production]
routes = [
  { pattern = "diorhost.com/*", zone_name = "diorhost.com" },
  { pattern = "diorhost.net/*", zone_name = "diorhost.net" },
  { pattern = "diors.host/*", zone_name = "diors.host" },
  { pattern = "d1or.host/*", zone_name = "d1or.host" },
  { pattern = "d1ior.com/*", zone_name = "d1ior.com" }
]
```

### Обновите `next.config.mjs` для Cloudflare:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Для Cloudflare Pages можно использовать 'export'
  poweredByHeader: false,
  compress: true,
  
  // Для Cloudflare Pages можно использовать статический экспорт
  // output: 'export', // Раскомментируйте, если нужен статический экспорт
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  env: {
    API_BASE_URL: process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || 'https://api.diorhost.com/api/v1',
    FRONTEND_URL: process.env.FRONTEND_URL || process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://diorhost.com',
  },
};

export default nextConfig;
```

## 📝 Шаг 4: Настройка доменов

### После деплоя:

1. **Добавьте домены в Cloudflare Pages:**
   - Перейдите в проект → **Custom domains**
   - Добавьте каждый домен:
     - `diorhost.com`
     - `diorhost.net`
     - `diors.host`
     - `d1or.host`
     - `d1ior.com`

2. **Настройте DNS записи:**
   - В Cloudflare DNS для каждого домена добавьте CNAME:
     ```
     Type: CNAME
     Name: @ (или www)
     Target: your-project.pages.dev
     Proxy: Proxied (оранжевое облако)
     ```

3. **SSL/TLS:**
   - Cloudflare автоматически выдаст SSL сертификаты
   - Убедитесь, что режим SSL: **Full (strict)**

## 🔄 Автоматический деплой

После настройки, каждый push в ветку `main` автоматически запустит новый деплой.

### Проверка деплоя:

```bash
# После push в main, проверьте статус в Cloudflare Dashboard
# Или используйте Cloudflare CLI:
npm install -g wrangler
wrangler pages deployment list --project-name=your-project-name
```

## 🐛 Решение проблем

### Проблема: Build fails

**Решение:**
1. Проверьте логи в Cloudflare Dashboard
2. Убедитесь, что Node.js версия >= 20
3. Проверьте, что все зависимости в `package.json`

### Проблема: Домен не работает

**Решение:**
1. Проверьте DNS записи (должен быть CNAME на `*.pages.dev`)
2. Убедитесь, что домен добавлен в Cloudflare Pages
3. Подождите 5-10 минут для распространения DNS

### Проблема: Изображения не загружаются

**Решение:**
- Cloudflare Pages поддерживает Next.js Image Optimization
- Убедитесь, что `next.config.mjs` настроен правильно

## 📊 Мониторинг

### Просмотр логов:

1. В Cloudflare Dashboard → Pages → Ваш проект → **Deployments**
2. Выберите деплой → **View build logs**

### Аналитика:

- Cloudflare автоматически собирает аналитику
- Доступна в разделе **Analytics** проекта

## 🔒 Безопасность

1. **Не коммитьте секреты** в Git
2. Используйте **Environment variables** в Cloudflare
3. Включите **WAF (Web Application Firewall)** в Cloudflare
4. Настройте **Rate Limiting** для защиты от DDoS

## 📚 Полезные ссылки

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Cloudflare Dashboard](https://dash.cloudflare.com)

## ✅ Чеклист деплоя

- [ ] Код залит в Git репозиторий
- [ ] Проект создан в Cloudflare Pages
- [ ] Репозиторий подключен
- [ ] Переменные окружения настроены
- [ ] Первый деплой успешно завершен
- [ ] Домены добавлены и настроены
- [ ] DNS записи настроены
- [ ] SSL сертификаты активны
- [ ] Сайт открывается на всех доменах
- [ ] Автоматический деплой работает

---

**Готово!** Ваш сайт теперь задеплоен на Cloudflare Pages 🎉

