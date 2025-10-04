---
id: config
title: Головний конфігураційний файл
sidebar_custom_props:
  icon: FaCog
---

Головний конфігураційний файл для загальних налаштувань плагіну **DonateCase** - `Config.yml`

---

## Параметри

### `update-checker`

> Перевіряє наявність нової версії з Modrinth

```yaml
update-checker: true
```

### `mysql`

> Налаштування для підключення до бази даних MySQL

```yaml
mysql:
  enabled: false
  host: 'localhost'
  port: 3306
  database: 'nameDataBase'
  username: 'root'
  password: 'password'
```

| Параметр   | Опис                             |
| ---------- | -------------------------------- |
| `enabled`  | Перемикає увімкненість MySQL     |
| `host`     | Хост для підключення             |
| `port`     | Порт для підключення             |
| `database` | Назва бази даних                 |
| `username` | Ім'я користувача для підключення |
| `password` | Пароль для підключення           |

### `language`

> Локалізація плагіну\
> Доступні параметри: `en_US`, `es_ES`, `ru_RU`, `ua_UA`

```yaml
language: en_US
```

### `hologram-driver`

> Драйвер для створення голограм над блоками кейсів\
> Доступні параметри: `CMI`, `DecentHolograms`, `HolographicDisplays`, `FancyHolograms`

:::info
Якщо драйвер задано неправильно, або не знайдено на сервері, то буде використовуватись будь-який з можливих
:::

```yaml
hologram-driver: DecentHolograms
```

### `level-groups`

> Глобальні налаштування рівнів для груп\
> Використовується для перевірки групи гравця в LuckPerms при отриманні приза

:::info
Кожен кейс буде використовувати саме ці налаштування, якщо не знайшов особистих в конфігурації кейсу.
Очистіть цю секцію, якщо хочете відключити глобальні рівні груп
:::

```yaml
level-groups:
  legend: 4 # найвищий рівень
  deluxe: 3
  vipplus: 2
  vip: 1
  default: 0
```

### `date-format`

> Формат відображення дати для історії відкриттів\
> Генерується за допомогою [SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html)

```yaml
date-format: "dd.MM HH:mm:ss"
```

### `addons-help`

> Показує допомогу для команд аддонів після використання `/dc` або `/dc help`

```yaml
addons-help: true
```

### `use-packets`

> Використовує [PacketEvents](https://modrinth.com/plugin/packetevents) для створення несправжніх ArmorStand'ів, дуже корисно, коли сервер опрацьовує багато сутностей

:::info
Для роботи необхідно завантажити [PacketEvents](https://modrinth.com/plugin/packetevents) на ваш сервер
:::

```yaml
use-packets: true
```

### `caching`

> Кешування для отримання кількості ключів, відкриттів кейсів та історії\
> Використовується лише при увімкненому параметрі `mysql`\
> Задається в тіках (1 секунда = 20 тіків)

:::info
Насправді використовується лише в заповнювачах (GUI та PlaceholderAPI)
:::

```yaml
caching: 20
```

### `format-player-name`

> Форматує нікнейм гравця, шукає схожий на сервері без урахування регістру

:::tip
Важливо використовувати, якщо на вашому сервері є сайт автодонату, коли гравці можуть помилково ввести свій нік з нижнього регістру (`_jodex__` заміть `_Jodex__`)
:::

```yaml
format-player-name: false
```

### `converter`

> Налаштування конвертації старих конфігурацій

```yaml
converter:
  keys: false
  data: false
```

#### `keys`

> Конвертація Keys.yml до бази данних

#### `data`

> Конвертація Data.yml до бази данних
