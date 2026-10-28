---
id: menus
title: Настройки меню
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaTh
---

import Mermaid from '@theme/Mermaid';

Все конфигурации меню хранятся в директории каждого кейса - `menu`

<Mermaid value={
`graph LR
  C1[default \nДиректория default кейса]
  C1 --> C1a[menu \nДиректория меню кейса]
  C1a --> C1a1[default_menu.yml \nФайл настроек меню]
`
}
/>

## Параметры

### `id`
> Айди вашего меню, которое будет использоваться в параметре [`default-menu`](../Cases#default-menu) кейса\
> Не используйте пробелы, желательно в нижнем регистре\
> Должен быть уникальным, другие меню не могут иметь такой же айди

:::note
Если айди меню не задан, будет использовано название файла
:::

```yaml
id: default_menu
```

### `title`
> Заголовок меню
```yaml
title: '&e&l✨ &6Donate&7-&fCase &e&l✨'
```

### `size`
> Размер меню\
> Используйте число, кратное 9 и не больше, чем 54
```yaml
size: 45
```

### `update-rate`
> Частота обновления меню\
> Задаётся в тиках (20 тиков = 1 секунда)

### `items`
> Секция для настройки предметов\
> Ниже представлены параметры настройки предметов

#### `material`
> Такие же параметры, как для [призов](./prizes#material)
```yaml
material:
    id: TRIPWIRE_HOOK
    display-name: "&bOpen Case"
    enchanted: true
    lore:
    - "&eClick to open this donate case!"
    - ""
    - "&6Available rewards:"
    - "&8▸ &eVIP &7- &f30%"
    - "&8▸ &bVIP+ &7- &f25%"
    - "&8▸ &3Premium &7- &f20%"
    - "&8▸ &5Deluxe &7- &f15%"
    - "&8▸ &dLegend &7- &f10%"
    - "&8▸ &cUltra &7- &f5%"
    - ""
    - "&7Your keys: &e%keys%"
    - ""
    - "&aPurchase more at:"
    - "&bwww.jodex.xyz"
    - ''
```

#### `slots`
> Слоты, которые будут использоваться предметом

>> Список #1
```yaml
slots:
    - [0, 1, 2, 3]
```
>> Список #2
```yaml
slots:
    - 0
    - 1
    - 2
    - 3
```
>> Диапазон
```yaml
slots:
    - 0-3
```
>> Список + Диапазон
```yaml
slots:
    - 0
    - 1-3
```

#### `type`
> Тип предмета\
> По умолчанию [`DEFAULT`](#default)\
> Доступные параметры: [`DEFAULT`](#default), [`OPEN`](#open), [`HISTORY`](#history)

## Плейсхолдеры

Плейсхолдеры (placeholders) используются при генерации предметов в меню для замены определённой информации.

| Плейсхолдер                    | Описание                                    |
|--------------------------------|---------------------------------------------|
| `%keys%`                       | Количество ключей игрока                    |
| `%keys_<тип кейса>`           | Количество ключей игрока от другого кейса   |
| `%casetype%`                   | Тип кейса                                   |

## Типы предметов

### `DEFAULT`
> Обычный тип предмета, используется только для косметических целей
```yaml
type: DEFAULT
```

### `OPEN`
> Предмет, при нажатии которого будет происходить открытие кейса (начало анимации)\
> Может открывать другой кейс с помощью формата: `OPEN_<тип кейса>`
```yaml
type: OPEN
```

Открытие кейса `donate`
```yaml
type: OPEN_donate
```

### `HISTORY`
> Предмет, отображающий историю недавних открытий кейсов\
> Формат настройки: `HISTORY-(индекс)-[тип кейса]` (индекс соответствует диапазону [`history-data-size`](./#history-data-size), тип кейса необязателен, используется для отображения истории другого кейса)\
> Для отображения отсортированной истории открытий всех кейсов используйте `GLOBAL` в качестве типа кейса\
> `DEFAULT` в качестве айди предмета указывает на то, что будет использоваться материал выигранного предмета

```yaml
history0:
    material:
        id: DEFAULT
        display-name: "&c%player%"
        lore:
        - '&6Group &f- &c%groupdisplayname%'
        - '&6Time &f- &c%time%'
        - ''
    slots:
        - 36
    type: HISTORY-0
```

:::tip
Предмет имеет возможность отображать голову игрока, открывавшего кейс, в качестве предмета. Просто закомментируйте параметр `id`
```yaml
material:
    # id: DEFAULT
```
:::

#### Плейсхолдеры

| Плейсхолдер           | Описание                                                              |
|-----------------------|-----------------------------------------------------------------------|
| `%player%`            | Имя игрока                                                            |
| `%group%`             | Имя группы                                                            |
| `%groupdisplayname%`  | Отображаемое имя группы                                              |
| `%time%`              | Время открытия кейса с форматом [`date-format`](../config#date-format) |
| `%action%`            | Название [`random-action`](./prizes#random-actions)                   |
| `%actiondisplayname%` | Отображаемое имя [`random-action`](./prizes#random-actions)          |
| `%casetype%`          | Тип кейса                                                             |
| `%casedisplayname%`   | Отображаемое имя кейса                                               |

#### История не найдена
> Для этого предмета доступна расширенная функция `HistoryNotFound` - отображение предмета пустого индекса\
> Просто добавьте секцию `HistoryNotFound` в качестве конфигурации [материала](#material)
```yaml
history0:
    material:
        id: DEFAULT
        display-name: "&c%player%"
        lore:
        - '&6Group &f- &c%groupdisplayname%'
        - '&6Time &f- &c%time%'
        - ''
    slots:
        - 36
    type: HISTORY-0
    HistoryNotFound:
        id: BARRIER
        display-name: "&cNot found"
```
