# Настройка GitHub Actions для деплоя

## Проблема: "can't connect without a private SSH key or password"

Эта ошибка возникает, когда в GitHub Actions не настроены необходимые секреты для SSH подключения.

## Решение: Настройка секретов в GitHub

### Шаг 1: Перейдите в настройки репозитория

1. Откройте репозиторий на GitHub: https://github.com/pavelfrolovvvvv1234-debug/host-land
2. Перейдите в **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **New repository secret**

### Шаг 2: Добавьте следующие секреты

#### DEPLOY_HOST
- **Name**: `DEPLOY_HOST`
- **Value**: IP адрес или домен вашего сервера (например: `123.45.67.89` или `server.example.com`)

#### DEPLOY_USER
- **Name**: `DEPLOY_USER`
- **Value**: Имя пользователя для SSH (например: `root` или `deploy`)

#### DEPLOY_KEY
- **Name**: `DEPLOY_KEY`
- **Value**: Приватный SSH ключ для подключения к серверу

**Как получить SSH ключ:**

```bash
# Если у вас уже есть SSH ключ
cat ~/.ssh/id_rsa

# Или создайте новый ключ
ssh-keygen -t rsa -b 4096 -C "github-actions"
cat ~/.ssh/id_rsa
```

**Важно:** Добавьте публичный ключ на сервер:

```bash
# На сервере
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

#### DEPLOY_PATH
- **Name**: `DEPLOY_PATH`
- **Value**: Путь на сервере, куда деплоить проект (например: `/var/www/dior-host`)

#### DEPLOY_PORT (опционально)
- **Name**: `DEPLOY_PORT`
- **Value**: SSH порт (по умолчанию: `22`)

## Альтернатива: Использование пароля вместо ключа

Если вы хотите использовать пароль вместо SSH ключа, измените workflow:

```yaml
- name: Deploy to server
  uses: appleboy/scp-action@master
  with:
    host: ${{ secrets.DEPLOY_HOST }}
    username: ${{ secrets.DEPLOY_USER }}
    password: ${{ secrets.DEPLOY_PASSWORD }}  # Вместо key
    port: ${{ secrets.DEPLOY_PORT || 22 }}
    source: "./apps/client"
    target: ${{ secrets.DEPLOY_PATH }}
```

И добавьте секрет `DEPLOY_PASSWORD` вместо `DEPLOY_KEY`.

## Проверка

После настройки секретов:
1. Перейдите в **Actions** в репозитории
2. Запустите workflow вручную (workflow_dispatch)
3. Проверьте логи выполнения

## Безопасность

⚠️ **Важно:**
- Никогда не коммитьте секреты в код
- Используйте SSH ключи вместо паролей
- Ограничьте доступ к секретам только необходимым workflow
- Регулярно ротируйте SSH ключи

