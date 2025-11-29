# КРИТИЧНО: Проверка секретов в GitHub

## Проблема
Workflow не получает секреты `HOST`, `USERNAME`, `SSH_KEY` - они пустые в логах.

## Решение: Пересоздать секреты

### Шаг 1: Удалить ВСЕ старые секреты
1. Откройте: https://github.com/pavelfrolovvvvv1234-debug/host-land/settings/secrets/actions
2. Удалите ВСЕ существующие секреты (SSH_HOST, SSH_USER, SSH_PRIVATE_KEY, HOST, USERNAME, SSH_KEY - все что есть)

### Шаг 2: Создать секреты заново с ТОЧНЫМИ именами

**ВАЖНО:** Регистр важен! Имена должны быть ТОЧНО такими:

#### 1. HOST
- **Имя:** `HOST` (заглавными буквами)
- **Значение:** `95.182.98.171`

#### 2. USERNAME
- **Имя:** `USERNAME` (заглавными буквами)
- **Значение:** `root`

#### 3. SSH_KEY
- **Имя:** `SSH_KEY` (заглавными буквами)
- **Значение:** (весь приватный ключ, скопируйте полностью):
```
-----BEGIN OPENSSH PRIVATE KEY-----
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
LiORVm/rJdsAAAAKZGVwbG95X2tleQE=
-----END OPENSSH PRIVATE KEY-----
```

#### 4. DEPLOY_PATH
- **Имя:** `DEPLOY_PATH` (заглавными буквами)
- **Значение:** Ваш путь на сервере (например `/var/www/host-land`)

### Шаг 3: Проверить
После создания секретов:
1. Запустите workflow вручную (Actions → Deploy → Run workflow)
2. Проверьте шаг "Debug secrets" - все должны показать ✓
3. Если все ✓, то шаг "Deploy via SCP" должен работать

## Если все еще не работает

Попробуйте использовать `password` вместо `key`:

В workflow замените:
```yaml
key: ${{ secrets.SSH_KEY }}
```

на:
```yaml
password: ${{ secrets.PASSWORD }}
```

И создайте секрет `PASSWORD` со значением `lY3wW4qH1woH`

