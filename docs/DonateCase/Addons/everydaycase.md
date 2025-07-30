---
sidebar_position: 4
id: dc-everydaycase
title: DCEveryDayCase
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# DCEveryDayCase Wiki

DCEveryDayCase — це аддон для DonateCase, який автоматично видає гравцям щоденні кейси з налаштовуваним кулдауном.

## Основний функціонал

### Автоматична видача кейсів
- **Щоденна видача** — гравці отримують кейси автоматично через заданий проміжок часу
- **Налаштовуваний кулдаун** — можна встановити будь-який інтервал (за замовчуванням 24 години)
- **Сповіщення** — гравці отримують повідомлення про готовність кейса
- **База даних** — всі дані зберігаються в базі даних DonateCase

### Команди
| Команда | Опис | Права |
|---------|------|-------|
| `/dc edc` | Перемкнути сповіщення про щоденний кейс | `dc.everydaycase.granted` |

### API для розробників
```java
// Отримання API
DailyCaseApi api = DailyCaseApi.getInstance();

// Основні методи
long nextClaimTime = api.getNextClaimTime("playerName");
long cooldown = api.getClaimCooldown();
String caseName = api.getCaseName();
int keysAmount = api.getKeysAmount();
boolean isPending = api.isPending("playerName");
Map<String, Long> allTimes = api.getAllNextClaimTimes();
```

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

### Приклад uk_UA.yml
```yaml
available: '&7Щоденний кейс доступний: &aНатисніть, щоб отримати'
remaining: '&7Залишився час: &6$d &7дн, &6$h &7год, &6$m &7хв, &6$s &7сек'
log_console_give_key: 'Видано ключ {key} гравцю {player} для кейса {case}'
info_placeholder: 'Інформація доступна тільки для гравців'
case_granted_on: '&aСповіщення увімкнені'
case_granted_off: '&cСповіщення вимкнені'
only_for_players: 'Ця команда доступна тільки для гравців.'
no_permission: '&cУ вас немає прав.'
case_ready: '&aВаш щоденний кейс готовий!'
```

### Плейсхолдери в повідомленнях
- `{key}` — кількість ключів
- `{player}` — ім'я гравця
- `{case}` — назва кейса
- `$d` — дні
- `$h` — години
- `$m` — хвилини
- `$s` — секунди

## Приклад меню використання

<details>
<summary>plugins/DonateCase/cases/<case>/menu/<menu>.yml</summary>

```yaml
config:
  version: 10
  type: case_menu
id: everydaycase_menu
title: 'DCEveryDayCase'
size: 45
update-rate: 20
items:
    '1':
        material:
            id: WHITE_STAINED_GLASS_PANE
            display-name: '&cJodexIndustries.xyz'
            enchanted: false
            lore:
            - ''
            rgb: []
        slots:
        - 0
        - 8
        type: DEFAULT
    open:
        material:
            id: CHEST
            display-name: '&aЩоденний кейс'
            enchanted: false
            Lore:
            - ''
            - '&7Безкоштовний кейс з різноманітними нагородами.'
            - '%dceverydaycase_remaining_time%'
            - ''
            - §#FF6BA0Не знаєш, що отримаєш?
            - §#CF6BFFПеревір свою удачу — твоя нагорода чекає на тебе!
            rgb: []
        slots:
        - 4
        type: OPEN
```

</details>

## API для інтеграції

### Основні методи DailyCaseApi

#### Отримання часу
```java
// Час наступного отримання для гравця
long nextTime = api.getNextClaimTime("playerName");

// Кулдаун між видачами
long cooldown = api.getClaimCooldown();

// Всі часи отримання для всіх гравців
Map<String, Long> allTimes = api.getAllNextClaimTimes();
```

#### Інформація про кейс
```java
// Назва кейса
String caseName = api.getCaseName();

// Кількість ключів за раз
int keysAmount = api.getKeysAmount();
```

#### Статус гравця
```java
// Чи очікує гравець отримання
boolean isPending = api.isPending("playerName");

// Скинути таймер гравця
api.resetTimer("playerName");
```

### Приклад інтеграції
```java
public class MyPlugin extends JavaPlugin {
    private DailyCaseApi edcApi;
    
    @Override
    public void onEnable() {
        this.edcApi = DailyCaseApi.getInstance();
        getLogger().info("DCEveryDayCase API доступний");
    }
    
    public void checkPlayerDailyCase(String playerName) {
        long nextClaimTime = edcApi.getNextClaimTime(playerName);
        long currentTime = System.currentTimeMillis();
        
        if (currentTime >= nextClaimTime) {
            // Гравець може отримати щоденний кейс
            getLogger().info(playerName + " може отримати щоденний кейс");
        } else {
            // Гравець повинен почекати
            long timeLeft = nextClaimTime - currentTime;
            long hours = TimeUnit.MILLISECONDS.toHours(timeLeft);
            getLogger().info(playerName + " повинен почекати " + hours + " годин");
        }
    }
}
```

## Події та інтеграція

### Автоматична перевірка
Аддон автоматично перевіряє всіх онлайн гравців кожну секунду і:
- Видає кейси коли підходить час
- Відправляє сповіщення гравцям
- Зберігає дані в базу даних

### Сповіщення
- Гравці отримують повідомлення коли кейс готовий
- Можна увімкнути/вимкнути сповіщення командою `/dc edc`
- Налаштовувані повідомлення в мовних файлах

### База даних
- Всі часи отримання зберігаються в БД DonateCase
- Асинхронне збереження для продуктивності
- Автоматичне відновлення даних при перезапуску

## Сумісність

### Вимоги
- **DonateCase** — обов'язкова залежність
- **Java 8+** — мінімальна версія Java
- **Spigot, Paper, Purpur** — сумісні сервери

### Інтеграція з іншими аддонами
DCEveryDayCase надає API для інтеграції з іншими плагінами:
- Отримання інформації про час отримання
- Перевірка статусу гравців
- Управління таймерами

### Приклади інтеграції
- **PlaceholderAPI** — плейсхолдери для часу
- **DiscordBM** — команди для Discord бота
- **Custom plugins** — власні плагіни

## Усунення неполадок

### Часті проблеми

#### Аддон не працює
1. Перевірте, що DonateCase встановлений і працює
2. Переконайтеся, що кейс `DCEveryDayCase` існує в DonateCase
3. Перевірте права гравців: `dc.everydaycase.granted`

#### Гравці не отримують кейси
1. Перевірте налаштування `turn_off_daily_case_logic: false`
2. Переконайтеся, що кулдаун не занадто великий
3. Перевірте логи на помилки

#### Проблеми зі сповіщеннями
1. Перевірте мовні файли
2. Переконайтеся, що гравці увімкнули сповіщення: `/dc edc`
3. Перевірте права доступу

### Режим відладки
Увімкніть `debug: true` в config.yml для отримання детальних логів:
```yaml
DCEveryDayCase:
  debug: true
```

### Логи
Аддон виводить інформацію в консоль:
- Видача ключів гравцям
- Помилки при роботі з БД
- Відладочна інформація (в режимі debug)

## Розробка

### Створення власного аддона
```java
public class MyDailyCaseAddon extends JavaPlugin {
    private DailyCaseApi edcApi;
    
    @Override
    public void onEnable() {
        this.edcApi = DailyCaseApi.getInstance();
    }
}
```

### Події
Аддон використовує події DonateCase для інтеграції:
- `AnimationStartEvent` — початок анімації
- `AnimationEndEvent` — кінець анімації
- `OpenCaseEvent` — відкриття кейса

### База даних
Всі дані зберігаються в таблицях DonateCase:
- Часи наступного отримання
- Статуси сповіщень
- Налаштування гравців

---

## Авторство

**Автор:** [@1wairesd](https://github.com/1wairesd)  

---

