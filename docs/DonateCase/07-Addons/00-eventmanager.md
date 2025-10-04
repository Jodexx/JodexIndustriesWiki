---
id: dc-event-manager
title: DCEventManager
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaBox
---

# DCEventManager Wiki

Цей аддон дозволяє вам керувати івентами DonateCase\
З його допомогою ви можете виконувати певні дії, такі як надсилання повідомлень і виконання команд від імені консолі.\
**Як це працює?**\
Аддон прослуховує всі події, зареєстровані в DonateCase.
Отримання подій відбувається за допомогою рефлексії, а це означає, що при оновленні DonateCase нові події будуть автоматично завантажуватися в DCEventManager без необхідності оновлювати аддон

## Конфігурації

```yaml
├── config.yml # головний конфігураційний файл
├── events.yml # конфігурація слухачів івентів
└── placeholders.yml # заповнювачі для івентів
```

## Приклад events.yml

```yml
events:
  AnimationStartEvent: # назва класу івенту
    executors: # виконувачі дій
      - name: test # назва виконувача
        actions: # список дій
          - "[broadcast] &cAnimation started %casetype% %player%!"
  AnimationEndEvent:
    executors:
      - name: test
        actions:
          - "[broadcast] &cAnimation ended %player%!"
```

**Список всіх доступних подій [тут](https://repo.jodex.xyz/javadoc/releases/com/jodexindustries/donatecase/api/2.1.0.0/raw/com/jodexindustries/donatecase/api/event/package-summary.html)**

## Дії

> - [Усі дії DonateCase](../items-settings#дії)
> - Дії DCEventManager
>
>> - Виклик методу
>>
>> ```yaml
>> - "[invoke] cancelled(true)" # відміняє івент 
>> ```

## Заповнювачі

У DCEventManager є своя власна система заповнювачів, яка дозволяє вам використовувати **ВСІ** методи, що надаються івентами.

:::info
Заповнювачі генеруються автоматично після першого запуску DCEventManager, але не вся інформація може бути використана
:::

### Приклад заповнювачів

```yaml
events:
    JoinEvent: # назва класу івенту
        placeholders:
        -   name: player # назва заповнювача
            replace: '%player%' # текст, що буде замінено на значення, поверненого з метода
            method: player#getName # метод для повернення інформації
    CaseInteractEvent:
        placeholders:
        -   name: cancelled
            replace: '%cancelled%'
            method: cancelled
        -   name: player
            replace: '%player%'
            method: player#getName
```

Якщо ви не розбираєтесь у програмуванні, це може виглядати трохи заплутано через параметр `method`.
Але не засмучуйтесь, це не складно!\
Цей параметр використовується для визначення місця, звідки буде взято значення для `replace`.

Давайте подивимось на JavaDocs [CaseInteractEvent](https://repo.jodex.xyz/javadoc/releases/com/jodexindustries/donatecase/api/2.1.0.0/raw/com/jodexindustries/donatecase/api/event/player/CaseInteractEvent.html) класу\
![jd.png](../../assets/jd.png)

Тут ми бачимо, що клас має кілька цікавих методів, таких як: `caseInfo`, `player` та `action`.\
Думаю, ви вже здогадались, що ці методи використовуються для отримання значень `replace`, але що таке `#`?\
Це символ для розділення методів. Наприклад, ми викликаємо метод player, який повертає об’єкт [DCPlayer](https://repo.jodex.xyz/javadoc/releases/com/jodexindustries/donatecase/api/2.1.0.0/raw/com/jodexindustries/donatecase/api/platform/DCPlayer.html), що має такі методи:
![dcplayer.png](../../assets/dcplayer.png)

Варто подивитись, що це за клас. Схоже, він представляє інтерфейс гравця, ми можемо витягти з нього корисну інформацію. Давайте дізнаємось ім'я гравця, метод [getName](https://repo.jodex.xyz/javadoc/releases/com/jodexindustries/donatecase/api/2.1.0.0/raw/com/jodexindustries/donatecase/api/platform/DCPlayer.html#getName()) якраз нам підходить!\
Тепер наш цільовий `method` виглядає так: `player#getName`

:::info
DCEventManager автоматично шукатиме метод `player` для знаходження об'єкта [DCPlayer](https://repo.jodex.xyz/javadoc/releases/com/jodexindustries/donatecase/api/2.1.0.0/raw/com/jodexindustries/donatecase/api/platform/DCPlayer.html), котрий буде використовуватись у діях **DonateCase** та заповнювачах **PlaceholderAPI**.\
Якщо такого методу немає в заповнювачах івенту (placeholders), то дії (та PlaceholderAPI), котрі використовують гравця, працювати не будуть.
:::

## Умови виконання

Для виконання конкретних дій, можна задавати умови за якими буде виконана та чи інша дія.

- `type` - тип порівняння
- `placeholder` - плейсхолдер для перевірки (може використовувати PlaceholderAPI)
- `input` - очікуваний результат (від `placeholder`)

### Типи умов

- `EQUALS` - Дорівнює `=`
- `NOT_EQUAL_TO` - Не дорівнює `!=`
- `LESS_THAN` - Менше за `<`
- `LESS_THAN_OR_EQUAL_TO` - Менше за або дорівнює `<=`
- `GREATER_THAN` - Більше за `>`
- `GREATER_THAN_OR_EQUAL_TO` - Більше за або дорівнює `>=`

### Декілька умов

Також можна задавати декілька умов для виконання певних дій.

**Приклад**\
Дії виконаються лише, якщо тип кейсу дорівнює `case` та гравець, що відкриває кейс, має нікнейм `_Jodex__`

```yaml
AnimationStartEvent:
  executors:
    - name: test
      actions:
        - "[broadcast] &cAnimation started %casetype% %player%!"
    conditions: # умови для виконання дій
      - type: EQUALS # тип порівняння
        placeholder: "%casetype%" # плейсхолдер для перевірки
        input: "case" # очікуваний результат
      - type: EQUALS
        placeholder: "%player%"
        input: "_Jodex__"
```

## Взаємодія з іншими аддонами

DCEventManager дозволяє реєстрацію будь-яких івентів, які стосуються DonateCase.
Поглянемо на головний конфігураційний файл `config.yml`

```yaml
debug: false
packages:
#  - "com.jodexindustries.donatecase.api.event" # actually used only for FriendCase addon
  - "com.jodexindustries.donatecase.api.event.addon"
  - "com.jodexindustries.donatecase.api.event.animation"
  - "com.jodexindustries.donatecase.api.event.player"
  - "com.jodexindustries.donatecase.api.event.plugin"
```

Тут задано список пакетів, які DCEventManager перевіряє на наявність івентів від DonateCase (DCEvent).
Наприклад, аддон [FriendCase](https://www.spigotmc.org/resources/friendcase-donatecase-addon.114293/) має івент [CaseGiftEvent](https://github.com/Jodexx/DonateCase/blob/main/addons/FriendCase/src/main/java/com/jodexindustries/donatecase/api/event/CaseGiftEvent.java), що міститься в пакеті `com.jodexindustries.donatecase.api.event`. Якщо ми додамо його в список, то DCEventManager просканує та згенерує деякі заповнювачі в `placeholders.yml` автоматично.
