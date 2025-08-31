---
id: cases
title: Налаштування кейсів
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Mermaid from '@theme/Mermaid';

Кейси у **DonateCase** — це головний елемент плагіна, через який гравці можуть отримувати призи.  
У цьому розділі розглянемо, як налаштовувати кейси, їхній вигляд та список винагород.

---

## Створення першого кейсу
Після завантаження, в директорії `DonateCase/cases` вже є стандартний кейс з назвою `default`, його ми і почнемо редагувати.

### Структура
В директорії кейсу ми можемо побачити ось таку структуру:

<Mermaid value={
`graph LR
  C1[default \nДиректорія default кейсу]
  C1 --> C1a[menu \nДиректорія меню кейсу]
  C1a --> C1a1[default_menu.yml \nФайл налаштувань меню]
  C1 --> C1b[items.yml \nФайл налаштувань призів]
  C1 --> C1c[settings.yml \nФайл налаштувань кейсу]
`
}
/>

### Загальні налаштування
Поглянемо на файл `settings.yml`

#### `type`
> Тип вашого кейсу для реєстрації в регістру\
> Не використовуйте пробіли, бажано в нижньому регістрі\
> Повинен бути ідентичним, інші кейси не можуть мати такий самий тип

:::note
Якщо тип кейсу не задано, буде використано назву директорії
:::

```yaml
type: default
```

#### `default-menu`
> Стандартне меню для відкриття за допомогою кліка правої кнопки миші по блоку кейса
```yaml
default-menu: default_menu
```

:::note
Якщо стандартне меню не задано, буде використано будь-яке з доступних
:::

#### `animation`
> Анімація, що буде програватись після відкриття кейсу\
> Доступні параметри: `SHAPE`, `FIREWORK`, `RAINLY`, `WHEEL`, `RANDOM`, `POP`, `SELECT`\
> [Налаштування анімацій](./animations)\
> [Попередній перегляд анімацій](../animations)

```yaml
animation: WHEEL
```

#### `animation-settings`
> Локальне налаштування анімації\
> Для налаштування потрібно скопіювати всі параметри анімації з [`Animations.yml`](./animations) в цю секцію

:::info
Якщо закоментувати/видалити цей параметр, налаштування анімації будуть глобальними
:::
```yaml
animation-settings:
  Type: FULL
  ItemSlot: HEAD
  SmallArmorStand: true
  ItemsCount: 6
  Shuffle: true
  CircleRadius: 2
  # Facing: UP
  StartPosition:
    x: 0.5
    y: -0.5
    z: 0.5
  Flame:
    Enabled: true
    Particle: FLAME
  Scroll:
    Count: 1
    Time: 150
    EaseAmount: 2.5
    Sound: UI_BUTTON_CLICK
    Volume: 10
    Pitch: 1
```

#### `hologram`
> Налаштування голограми над блоком кейсу\
> Використовує драйвер, що задано в [цьому параметрі](config#hologram-driver)\
> Для [FancyHolograms](https://hangar.papermc.io/Oliver/FancyHolograms) доступні [розширені параметри](../holograms#display-entity-1194)

```yaml
hologram:
  enabled: true
  height: 1.5
  range: 8
  message:
    - '&6DonateCase'
```

| Параметр     | Опис                                 |
| ------------ | ------------------------------------ |
| `enabled`    | Перемикає увімкненість голограми     |
| `height`     | Висота над блоком                    |
| `range`      | Діапазон видимості (лише для CMI та DecentHolograms)             |
| `message`    | Вміст голограми                      |

#### `open-type`
> Тип відкриття кейсу\
> Доступні параметри: `GUI` - відкриття через меню, `BLOCK` - негайне відкриття після кліку ПКМ по блоку кейса
```yaml
open-type: GUI
```

#### `no-key-actions`
> Дії, що відтворюються, якщо в гравця немає ключів від кейсу
```yaml
no-key-actions:
  - "[message] &cYou don't have keys for this case. You can buy them here >>> &6www.jodex.xyz"
  - "[sound] ENTITY_ENDERMAN_TELEPORT"
```

#### `history-data-size`
> Розмір історії відкриттів кейсу\
> Видаліть або встановіть 0, якщо хочете відключити історію
```yaml
history-data-size: 10
```

#### `cooldown-before-animation`
> Затримка перед програванням анімації відкриття\
> Задається в тіках (20 тіків = 1 секунда)

:::tip
Корисно, якщо ви відтворюєте додаткові дії за допомогою [DCEventManager](../Addons/dc-event-manager) перед початком анімації
:::
```yaml
cooldown-before-animation: 0
```

#### `level-groups`
> Локальні налаштування рівнів для груп\
> Те саме, що було описано для [глобальної конфігурації](./config#level-groups)

:::info
Повністю видаліть цю секцію, якщо хочете використовувати глобальні налаштування
:::

```yaml
level-groups:
  ultra: 6
  legend: 5
  deluxe: 4
  premium: 3
  vipplus: 2
  vip: 1
  default: 0
```

#### `display-name`
> Відображуване ім'я кейсу, частіше для заповнювачів (placeholders)
```yaml
display-name: "&6Donate&7-&fCase"
```

## Створення інших кейсів

Для того, щоб створити ще один кейс зі своїми окремими налаштуваннями та призами, достатньо скопіювати директорію стандартного кейсу `default`, переіментувати її наприклад в `donate`, відкрити файл налаштувань `settings.yml` та відредагувати параметр [`type`](#type).

Структура директорій буде приблизно такою:
<Mermaid value={
`graph LR
  C1[default \nДиректорія default кейсу]
  C1 --> C1a[menu \nДиректорія меню кейсу]
  C1a --> C1a1[default_menu.yml \nФайл налаштувань меню]
  C1 --> C1b[items.yml \nФайл налаштувань призів]
  C1 --> C1c[settings.yml \nФайл налаштувань кейсу]
  A1[donate \nДиректорія donate кейсу]
  A1 --> A1a[menu \nДиректорія меню кейсу]
  A1a --> A1a1[default_menu.yml \nФайл налаштувань меню]
  A1 --> A1b[items.yml \nФайл налаштувань призів]
  A1 --> A1c[settings.yml \nФайл налаштувань кейсу]
`
}
/>