---
id: cases
title: Настройки кейсов
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Mermaid from '@theme/Mermaid';

Кейсы в **DonateCase** — это главный элемент плагина, через который игроки могут получать призы.  
В этом разделе рассмотрим, как настраивать кейсы, их внешний вид и список наград.

---

## Создание первого кейса
После загрузки в директории `DonateCase/cases` уже есть стандартный кейс с названием `default`, его мы и начнём редактировать.

### Структура
В директории кейса мы можем увидеть вот такую структуру:

<Mermaid value={
`graph LR
  C1[default \nДиректория default кейса]
  C1 --> C1a[menu \nДиректория меню кейса]
  C1a --> C1a1[default_menu.yml \nФайл настроек меню]
  C1 --> C1b[items.yml \nФайл настроек призов]
  C1 --> C1c[settings.yml \nФайл настроек кейса]
`
}
/>

### Общие настройки
Посмотрим на файл `settings.yml`

#### `type`
> Тип вашего кейса для регистрации в реестре\
> Не используйте пробелы, желательно в нижнем регистре\
> Должен быть уникальным, другие кейсы не могут иметь такой же тип

:::note
Если тип кейса не задан, будет использовано название директории
:::

```yaml
type: default
```

#### `default-menu`
> Стандартное меню для открытия с помощью клика правой кнопкой мыши по блоку кейса
```yaml
default-menu: default_menu
```

:::note
Если стандартное меню не задано, будет использовано любое из доступных
:::

#### `animation`
> Анимация, которая будет проигрываться после открытия кейса\
> Доступные параметры: `SHAPE`, `FIREWORK`, `RAINLY`, `WHEEL`, `RANDOM`, `POP`, `SELECT`\
> [Настройки анимаций](./animations)\
> [Предпросмотр анимаций](../animations)

```yaml
animation: WHEEL
```

#### `animation-settings`
> Локальная настройка анимации\
> Для настройки нужно скопировать все параметры анимации из [`Animations.yml`](./animations) в эту секцию

:::info
Если закомментировать/удалить этот параметр, настройки анимации будут глобальными
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
> Настройки голограммы над блоком кейса\
> Использует драйвер, заданный в [этом параметре](config#hologram-driver)\
> Для [FancyHolograms](https://hangar.papermc.io/Oliver/FancyHolograms) доступны [расширенные параметры](../holograms#display-entity-1194)

```yaml
hologram:
  enabled: true
  height: 1.5
  range: 8
  message:
    - '&6DonateCase'
```

| Параметр     | Описание                             |
| ------------ | ------------------------------------ |
| `enabled`    | Переключает включённость голограммы  |
| `height`     | Высота над блоком                    |
| `range`      | Диапазон видимости (только для CMI и DecentHolograms)            |
| `message`    | Содержимое голограммы                |

#### `open-type`
> Тип открытия кейса\
> Доступные параметры: `GUI` - открытие через меню, `BLOCK` - мгновенное открытие после клика ПКМ по блоку кейса
```yaml
open-type: GUI
```

#### `no-key-actions`
> Действия, которые выполняются, если у игрока нет ключей от кейса
```yaml
no-key-actions:
  - "[message] &cYou don't have keys for this case. You can buy them here >>> &6www.jodex.xyz"
  - "[sound] ENTITY_ENDERMAN_TELEPORT"
```

#### `history-data-size`
> Размер истории открытий кейса\
> Удалите или установите 0, если хотите отключить историю
```yaml
history-data-size: 10
```

#### `cooldown-before-animation`
> Задержка перед проигрыванием анимации открытия\
> Задаётся в тиках (20 тиков = 1 секунда)

:::tip
Полезно, если вы выполняете дополнительные действия с помощью [DCEventManager](../Addons/dc-event-manager) перед началом анимации
:::
```yaml
cooldown-before-animation: 0
```

#### `level-groups`
> Локальные настройки уровней для групп\
> То же самое, что было описано для [глобальной конфигурации](./config#level-groups)

:::info
Полностью удалите эту секцию, если хотите использовать глобальные настройки
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
> Отображаемое имя кейса, чаще для плейсхолдеров (placeholders)
```yaml
display-name: "&6Donate&7-&fCase"
```

#### `custom-data` (необязательно)
> Произвольные данные для использования аддонами\
> Любой аддон может считывать параметры из этой секции для собственных нужд\
> Например, DCWebHook использует это для отображения названий кейсов в Discord

```yaml
custom-data:
  webhook-name: "Донат Кейс"
```

:::tip
Ключи и значения могут быть любыми — каждый аддон считывает только те, что ему нужны
:::

## Создание других кейсов

Для того чтобы создать ещё один кейс со своими отдельными настройками и призами, достаточно скопировать директорию стандартного кейса `default`, переименовать её, например, в `donate`, открыть файл настроек `settings.yml` и отредактировать параметр [`type`](#type).

Структура директорий будет примерно такой:
<Mermaid value={
`graph LR
  C1[default \nДиректория default кейса]
  C1 --> C1a[menu \nДиректория меню кейса]
  C1a --> C1a1[default_menu.yml \nФайл настроек меню]
  C1 --> C1b[items.yml \nФайл настроек призов]
  C1 --> C1c[settings.yml \nФайл настроек кейса]
  A1[donate \nДиректория donate кейса]
  A1 --> A1a[menu \nДиректория меню кейса]
  A1a --> A1a1[default_menu.yml \nФайл настроек меню]
  A1 --> A1b[items.yml \nФайл настроек призов]
  A1 --> A1c[settings.yml \nФайл настроек кейса]
`
}
/>
