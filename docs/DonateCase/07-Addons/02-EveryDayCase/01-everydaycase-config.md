---
id: everydaycase-config
title: Конфігурація
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaBox
---

## Конфігурація

### Основний файл config.yml
```yaml
DCEveryDayCase:
  case_settings:
    case_name: DCEveryDayCase    # Назва кейса для видачі
    keys_amount: 1               # Кількість ключів за раз
    claim_cooldown: 86400        # Кулдаун в секундах (24 години)
    new_player_choice: case      # Що робити з новими гравцями: case/key
    turn_off_daily_case_logic: false  # Вимкнути логіку щоденних кейсів
  debug: false                   # Режим відладки
  Languages: en_US               # Мова повідомлень
config:
  version: 1
  type: CONFIG
```

### Параметри конфігурації

#### case_settings
- **case_name** — назва кейса, який буде видаватися гравцям
- **keys_amount** — кількість ключів, що видаються за один раз
- **claim_cooldown** — час в секундах між видачами (86400 = 24 години)
- **new_player_choice** — поведінка для нових гравців:
    - `case` — одразу видати кейс
    - `key` — тільки встановити таймер
- **turn_off_daily_case_logic** — повністю вимкнути логіку щоденних кейсів

#### Загальні налаштування
- **debug** — увімкнути/вимкнути режим відладки
- **Languages** — мова повідомлень (en_US, ru_RU, uk_UA)

## Мовні файли

### Структура папки lang/
```
lang/
├── en_US.yml    # Англійська
├── ru_RU.yml    # Російська
└── uk_UA.yml    # Українська
```

### Плейсхолдери в повідомленнях
- `{key}` — кількість ключів
- `{player}` — ім'я гравця
- `{case}` — назва кейса
- `$d` — дні
- `$h` — години
- `$m` — хвилини
- `$s` — секунди