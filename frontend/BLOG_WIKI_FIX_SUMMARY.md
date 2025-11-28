# Исправление Blog и Wiki - Итоговый отчёт

## Выполненные изменения

### 1. Исправлены недостающие `id` и `url` в статьях Wiki

Добавлены недостающие метаданные в следующие файлы:
- `wiki/articles/fastpanel-on-server.md`
- `wiki/articles/site-on-the-server.md`
- `wiki/articles/the-error-fatal-glibc-error-cpu-does-not-support-on-centos-9.md`
- `wiki/articles/problem-with-session-lockout-on-windows-after-multiple-failed-login-attempts-to-server.md`
- `wiki/articles/ispmanager-on-the-server.md`

Все статьи теперь имеют:
- `layout: layouts/wikilayout.vto`
- `lang: [en, ru]`
- `id: <slug>`
- `url: /wiki/articles/<slug>/`

### 2. Созданы helper-функции в `_config.ts`

Добавлены две функции-фильтра для автоматической загрузки статей:

**`getBlogArticles(lang)`**
- Автоматически загружает все статьи из `blog/articles/*.md`
- Фильтрует по языку (en/ru)
- Извлекает метаданные: `id`, `url`, `date`, `readingTime`, `title`, `summary`, `tags`
- Сортирует по дате (новые сначала)
- Возвращает массив объектов статей

**`getWikiArticles(lang)`**
- Автоматически загружает все статьи из `wiki/articles/*.md`
- Фильтрует по языку (en/ru)
- Извлекает метаданные: `id`, `url`, `title` (из `atitle`)
- Сортирует по алфавиту
- Возвращает массив объектов статей

### 3. Обновлён `blog/index.vto`

**До:**
- Хардкод списка постов в front-matter
- Ручное обновление при добавлении новых статей

**После:**
- Автоматическая загрузка статей через `getBlogArticles(lang)`
- Динамическое отображение всех статей из `blog/articles/*.md`
- Автоматическая сортировка по дате
- Отображение метаданных: дата, время чтения, теги, заголовок, краткое описание

### 4. Обновлён `wiki/index.vto` (конвертирован из `wiki/index.md`)

**До:**
- Хардкод ссылок в Markdown контенте
- Ручное обновление при добавлении новых статей

**После:**
- Автоматическая загрузка статей через `getWikiArticles(lang)`
- Динамическое отображение всех статей из `wiki/articles/*.md`
- Автоматическая сортировка по алфавиту
- Отображение всех статей в простом списке

### 5. Исправлены layouts для статей блога

**Исправлено:**
- Все 17 статей блога теперь используют `layout: layouts/blogarticle.vto` вместо `layouts/wikilayout.vto`

**Файлы:**
- `bulletproof-dedicated-servers-guide.md`
- `bulletproof-dedicated-vs-vds.md`
- `bulletproof-domains-guide.md`
- `bulletproof-security-controls.md`
- `bulletproof-vds-complete-guide.md`
- `bulletproof-vps-for-marketers.md`
- `dmca-ignored-hosting-checklist.md`
- `llm-ready-hosting-faq.md`
- `offshore-compliance-guide.md`
- `privacy-first-billing.md`

## Структура роутинга

### Blog
```
/blog/                    → blog/index.vto (список статей)
/blog/<slug>/             → blog/articles/<slug>.md (страница статьи)
/ru/blog/                 → blog/index.vto (русский список)
/ru/blog/<slug>/          → blog/articles/<slug>.md (русская статья)
```

### Wiki
```
/wiki/                    → wiki/index.vto (список статей)
/wiki/articles/<slug>/    → wiki/articles/<slug>.md (страница статьи)
/ru/wiki/                 → wiki/index.vto (русский список)
/ru/wiki/articles/<slug>/ → wiki/articles/<slug>.md (русская статья)
```

## Как это работает

1. **Автоматическая загрузка статей:**
   - Helper-функции используют `site.search.pages()` для поиска всех страниц
   - Фильтруют по пути (`blog/articles/` или `wiki/articles/`)
   - Извлекают метаданные из front-matter каждой статьи
   - Возвращают отсортированный массив объектов

2. **Роутинг:**
   - Lume автоматически создаёт страницы для каждого `.md` файла
   - Multilanguage plugin создаёт отдельные страницы для каждого языка
   - URL формируется на основе поля `url` в front-matter или пути файла

3. **Парсинг Markdown:**
   - Lume использует `markdown-it` для парсинга Markdown
   - Front-matter парсится как YAML
   - Контент извлекается из `en.content` или `ru.content` в front-matter
   - Обрабатывается через `site.preprocess` и `site.process` хуки в `_config.ts`

## Проверка работы

После изменений необходимо:

1. **Пересобрать сайт:**
   ```bash
   deno task build
   ```

2. **Запустить dev server:**
   ```bash
   deno task serve
   ```

3. **Проверить:**
   - `/blog/` - должен показывать список всех статей
   - `/blog/<slug>/` - должна открываться страница статьи
   - `/wiki/` - должен показывать список всех статей
   - `/wiki/articles/<slug>/` - должна открываться страница статьи
   - Все ссылки должны работать без 404
   - Контент должен отображаться корректно (не "0")

## Изменённые файлы

### Новые/Изменённые:
- `_config.ts` - добавлены helper-функции `getBlogArticles` и `getWikiArticles`
- `blog/index.vto` - обновлён для автоматической загрузки статей
- `wiki/index.vto` - создан новый файл (заменяет `wiki/index.md`)
- `wiki/index.md` - удалён (заменён на `wiki/index.vto`)

### Исправленные статьи Wiki:
- `wiki/articles/fastpanel-on-server.md`
- `wiki/articles/site-on-the-server.md`
- `wiki/articles/the-error-fatal-glibc-error-cpu-does-not-support-on-centos-9.md`
- `wiki/articles/problem-with-session-lockout-on-windows-after-multiple-failed-login-attempts-to-server.md`
- `wiki/articles/ispmanager-on-the-server.md`

### Исправленные статьи Blog (layout):
- Все 17 статей в `blog/articles/*.md` теперь используют `blogarticle.vto`

## Преимущества нового подхода

1. **Автоматизация:** Не нужно вручную добавлять статьи в список
2. **Единообразие:** Все статьи загружаются одинаковым способом
3. **Масштабируемость:** Новые статьи автоматически появляются в списке
4. **Поддержка:** Легче поддерживать и обновлять
5. **Метаданные:** Автоматическое извлечение всех метаданных из front-matter



