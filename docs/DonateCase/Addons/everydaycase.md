---
sidebar_position: 1
id: dc-everydaycase
title: DCEveryDayCase
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# DCEveryDayCase Wiki

DCEveryDayCase — это аддон для DonateCase, который автоматически выдаёт игрокам ежедневные кейсы с настраиваемым кулдауном.

## Основной функционал

### Автоматическая выдача кейсов
- **Ежедневная выдача** — игроки получают кейсы автоматически через заданный промежуток времени
- **Настраиваемый кулдаун** — можно установить любой интервал (по умолчанию 24 часа)
- **Уведомления** — игроки получают сообщения о готовности кейса
- **База данных** — все данные сохраняются в базе данных DonateCase

### Команды
| Команда | Описание | Права |
|---------|----------|-------|
| `/dc edc` | Переключить уведомления о ежедневном кейсе | `dc.everydaycase.granted` |

### API для разработчиков
```java
// Получение API
DailyCaseApi api = DailyCaseApi.getInstance();

// Основные методы
long nextClaimTime = api.getNextClaimTime("playerName");
long cooldown = api.getClaimCooldown();
String caseName = api.getCaseName();
int keysAmount = api.getKeysAmount();
boolean isPending = api.isPending("playerName");
Map<String, Long> allTimes = api.getAllNextClaimTimes();
```

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

### Пример ru_RU.yml
```yaml
available: '&7Ежедневный кейс доступен: &aНажмите, чтобы получить'
remaining: '&7Оставшееся время: &6$d &7дн, &6$h &7час, &6$m &7мин, &6$s &7сек'
log_console_give_key: 'Выдан ключ {key} игроку {player} для кейса {case}'
info_placeholder: 'Информация доступна только для игроков'
case_granted_on: '&aУведомления включены'
case_granted_off: '&cУведомления отключены'
only_for_players: 'Эта команда доступна только для игроков.'
no_permission: '&cУ вас нет прав.'
case_ready: '&aВаш ежедневный кейс готов!'
```

### Плейсхолдеры в сообщениях
- `{key}` — количество ключей
- `{player}` — имя игрока
- `{case}` — название кейса
- `$d` — дни
- `$h` — часы
- `$m` — минуты
- `$s` — секунды

## API для интеграции

### Основные методы DailyCaseApi

#### Получение времени
```java
// Время следующего получения для игрока
long nextTime = api.getNextClaimTime("playerName");

// Кулдаун между выдачами
long cooldown = api.getClaimCooldown();

// Все времена получения для всех игроков
Map<String, Long> allTimes = api.getAllNextClaimTimes();
```

#### Информация о кейсе
```java
// Название кейса
String caseName = api.getCaseName();

// Количество ключей за раз
int keysAmount = api.getKeysAmount();
```

#### Статус игрока
```java
// Ожидает ли игрок получения
boolean isPending = api.isPending("playerName");

// Сбросить таймер игрока
api.resetTimer("playerName");
```

### Пример интеграции
```java
public class MyPlugin extends JavaPlugin {
    private DailyCaseApi edcApi;
    
    @Override
    public void onEnable() {
        this.edcApi = DailyCaseApi.getInstance();
        getLogger().info("DCEveryDayCase API доступен");
    }
    
    public void checkPlayerDailyCase(String playerName) {
        long nextClaimTime = edcApi.getNextClaimTime(playerName);
        long currentTime = System.currentTimeMillis();
        
        if (currentTime >= nextClaimTime) {
            // Игрок может получить ежедневный кейс
            getLogger().info(playerName + " может получить ежедневный кейс");
        } else {
            // Игрок должен подождать
            long timeLeft = nextClaimTime - currentTime;
            long hours = TimeUnit.MILLISECONDS.toHours(timeLeft);
            getLogger().info(playerName + " должен подождать " + hours + " часов");
        }
    }
}
```

## События и интеграция

### Автоматическая проверка
Аддон автоматически проверяет всех онлайн игроков каждую секунду и:
- Выдаёт кейсы когда подходит время
- Отправляет уведомления игрокам
- Сохраняет данные в базу данных

### Уведомления
- Игроки получают сообщение когда кейс готов
- Можно включить/выключить уведомления командой `/dc edc`
- Настраиваемые сообщения в языковых файлах

### База данных
- Все времена получения сохраняются в БД DonateCase
- Асинхронное сохранение для производительности
- Автоматическое восстановление данных при перезапуске

## Совместимость

### Требования
- **DonateCase** — обязательная зависимость
- **Java 8+** — минимальная версия Java
- **Bukkit/Spigot** — совместимые серверы

### Интеграция с другими аддонами
DCEveryDayCase предоставляет API для интеграции с другими плагинами:
- Получение информации о времени получения
- Проверка статуса игроков
- Управление таймерами

### Примеры интеграции
- **PlaceholderAPI** — плейсхолдеры для времени
- **DiscordBM** — команды для Discord бота
- **Custom plugins** — собственные плагины

## Устранение неполадок

### Частые проблемы

#### Аддон не работает
1. Проверьте, что DonateCase установлен и работает
2. Убедитесь, что кейс `DCEveryDayCase` существует в DonateCase
3. Проверьте права игроков: `dc.everydaycase.granted`

#### Игроки не получают кейсы
1. Проверьте настройку `turn_off_daily_case_logic: false`
2. Убедитесь, что кулдаун не слишком большой
3. Проверьте логи на ошибки

#### Проблемы с уведомлениями
1. Проверьте языковые файлы
2. Убедитесь, что игроки включили уведомления: `/dc edc`
3. Проверьте права доступа

### Режим отладки
Включите `debug: true` в config.yml для получения подробных логов:
```yaml
DCEveryDayCase:
  debug: true
```

### Логи
Аддон выводит информацию в консоль:
- Выдача ключей игрокам
- Ошибки при работе с БД
- Отладочная информация (в режиме debug)

## Разработка

### Создание собственного аддона
```java
public class MyDailyCaseAddon extends JavaPlugin {
    private DailyCaseApi edcApi;
    
    @Override
    public void onEnable() {
         this.edcApi = DailyCaseApi.getInstance();
    }
}
```

### События
Аддон использует события DonateCase для интеграции:
- `AnimationStartEvent` — начало анимации
- `AnimationEndEvent` — конец анимации
- `OpenCaseEvent` — открытие кейса

### База данных
Все данные хранятся в таблицах DonateCase:
- Времена следующего получения
- Статусы уведомлений
- Настройки игроков
