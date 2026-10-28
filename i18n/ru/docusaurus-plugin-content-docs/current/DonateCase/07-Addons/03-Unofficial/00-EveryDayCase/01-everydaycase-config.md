---
id: everydaycase-config
title: Конфигурация
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaBox
---

## Конфигурация

### Основной файл config.yml
```yaml
DCEveryDayCase:
  case_settings:
    case_name: DCEveryDayCase    # Название кейса для выдачи
    keys_amount: 1               # Количество ключей за раз
    claim_cooldown: 86400        # Кулдаун в секундах (24 часа)
    new_player_choice: case      # Что делать с новыми игроками: case/key
    turn_off_daily_case_logic: false  # Отключить логику ежедневных кейсов
  debug: false                   # Режим отладки
  Languages: en_US               # Язык сообщений
config:
  version: 1
  type: CONFIG
```

### Параметры конфигурации

#### case_settings
- **case_name** — название кейса, который будет выдаваться игрокам
- **keys_amount** — количество ключей, выдаваемых за один раз
- **claim_cooldown** — время в секундах между выдачами (86400 = 24 часа)
- **new_player_choice** — поведение для новых игроков:
    - `case` — сразу выдать кейс
    - `key` — только установить таймер
- **turn_off_daily_case_logic** — полностью отключить логику ежедневных кейсов

#### Общие настройки
- **debug** — включить/выключить режим отладки
- **Languages** — язык сообщений (en_US, ru_RU, uk_UA)

## Языковые файлы

### Структура папки lang/
```
lang/
├── en_US.yml    # Английский
├── ru_RU.yml    # Русский
└── uk_UA.yml    # Украинский
```

### Плейсхолдеры в сообщениях
- `{key}` — количество ключей
- `{player}` — имя игрока
- `{case}` — название кейса
- `$d` — дни
- `$h` — часы
- `$m` — минуты
- `$s` — секунды
