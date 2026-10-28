---
id: config
title: Главный конфигурационный файл
sidebar_custom_props:
  icon: FaCog
---

Главный конфигурационный файл для общих настроек плагина **DonateCase** - `Config.yml`

---

## Параметры

### `update-checker`

> Проверяет наличие новой версии с Modrinth

```yaml
update-checker: true
```

### `database`

> Настройки для подключения к базе данных

```yaml
database:
  type: SQLITE
  settings:
    host: 'localhost'
    port: 3306
    database: 'nameDataBase'
    username: 'root'
    password: 'password'
```

#### `type`

> Тип базы данных\
> Доступные параметры: `SQLITE`, `MYSQL`, `POSTGRESQL`

#### `settings`

> Настройки для удалённых баз данных (MYSQL, POSTGRESQL)

| Параметр   | Описание                          |
| ---------- | --------------------------------- |
| `host`     | Хост для подключения              |
| `port`     | Порт для подключения              |
| `database` | Название базы данных              |
| `username` | Имя пользователя для подключения  |
| `password` | Пароль для подключения            |

### `language`

> Локализация плагина\
> Доступные параметры: `en_US`, `es_ES`, `ru_RU`, `ua_UA`

```yaml
language: en_US
```

### `hologram-driver`

> Драйвер для создания голограмм над блоками кейсов\
> Доступные параметры: `CMI`, `DecentHolograms`, `HolographicDisplays`, `FancyHolograms`

:::info
Если драйвер задан неправильно или не найден на сервере, то будет использоваться любой из возможных
:::

```yaml
hologram-driver: DecentHolograms
```

### `level-groups`

> Глобальные настройки уровней для групп\
> Используется для проверки группы игрока в LuckPerms при получении приза

:::info
Каждый кейс будет использовать именно эти настройки, если не нашёл личных в конфигурации кейса.
Очистите эту секцию, если хотите отключить глобальные уровни групп
:::

```yaml
level-groups:
  legend: 4 # высший уровень
  deluxe: 3
  vipplus: 2
  vip: 1
  default: 0
```

### `date-format`

> Формат отображения даты для истории открытий\
> Генерируется с помощью [SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html)

```yaml
date-format: "dd.MM HH:mm:ss"
```

### `addons-help`

> Показывает помощь для команд аддонов после использования `/dc` или `/dc help`

```yaml
addons-help: true
```

### `use-packets`

> Использует [PacketEvents](https://modrinth.com/plugin/packetevents) для создания ненастоящих ArmorStand'ов, очень полезно, когда сервер обрабатывает много сущностей

:::info
Для работы необходимо загрузить [PacketEvents](https://modrinth.com/plugin/packetevents) на ваш сервер
:::

```yaml
use-packets: true
```

### `caching`

> Кеширование для получения количества ключей, открытий кейсов и истории\
> Используется только при включённом параметре `mysql`\
> Задаётся в тиках (1 секунда = 20 тиков)

:::info
На самом деле используется только в плейсхолдерах (GUI и PlaceholderAPI)
:::

```yaml
caching: 20
```

### `format-player-name`

> Форматирует никнейм игрока, ищет похожий на сервере без учёта регистра

:::tip
Важно использовать, если на вашем сервере есть сайт автодоната, когда игроки могут по ошибке ввести свой ник в нижнем регистре (`_jodex__` вместо `_Jodex__`)
:::

```yaml
format-player-name: false
```

### `converter`

> Настройки конвертации старых конфигураций

```yaml
converter:
  keys: false
  data: false
```

#### `keys`

> Конвертация Keys.yml в базу данных

#### `data`

> Конвертация Data.yml в базу данных
