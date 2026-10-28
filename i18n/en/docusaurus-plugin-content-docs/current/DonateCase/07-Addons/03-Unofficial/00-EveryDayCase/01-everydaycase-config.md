---
id: everydaycase-config
title: Configuration
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaBox
---

## Configuration

### Main config.yml file
```yaml
DCEveryDayCase:
  case_settings:
    case_name: DCEveryDayCase    # The name of the case to give out
    keys_amount: 1               # Number of keys at a time
    claim_cooldown: 86400        # Cooldown in seconds (24 hours)
    new_player_choice: case      # What to do with new players: case/key
    turn_off_daily_case_logic: false  # Disable daily case logic
  debug: false                   # Debug mode
  Languages: en_US               # Message language
config:
  version: 1
  type: CONFIG
```

### Configuration parameters

#### case_settings
- **case_name** — the name of the case that will be given out to players
- **keys_amount** — the number of keys given out at one time
- **claim_cooldown** — the time in seconds between issuances (86400 = 24 hours)
- **new_player_choice** — behavior for new players:
    - `case` — give the case right away
    - `key` — only set the timer
- **turn_off_daily_case_logic** — completely disable daily case logic

#### General settings
- **debug** — enable/disable debug mode
- **Languages** — message language (en_US, ru_RU, uk_UA)

## Language files

### Structure of the lang/ folder
```
lang/
├── en_US.yml    # English
├── ru_RU.yml    # Russian
└── uk_UA.yml    # Ukrainian
```

### Placeholders in messages
- `{key}` — number of keys
- `{player}` — player name
- `{case}` — case name
- `$d` — days
- `$h` — hours
- `$m` — minutes
- `$s` — seconds
