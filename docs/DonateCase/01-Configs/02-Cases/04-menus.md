---
id: menus
title: Налаштування меню
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaTh
---

import Mermaid from '@theme/Mermaid';

Усі конфігурації меню зберігаються в директорії кожного кейсу - `menu`

<Mermaid value={
`graph LR
  C1[default \nДиректорія default кейсу]
  C1 --> C1a[menu \nДиректорія меню кейсу]
  C1a --> C1a1[default_menu.yml \nФайл налаштувань меню]
`
}
/>

## Параметри

### `id`
> Айді вашого меню, що використовуватиметься в параметрі [`default-menu`](../Cases#default-menu) кейсу\
> Не використовуйте пробіли, бажано в нижньому регістрі\
> Повинен бути ідентичним, інші меню не можуть мати такий самий айді

:::note
Якщо айді меню не задано, буде використано назву файлу
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
> Розмір меню\
> Використовуйте число кратне 9 та не більше, ніж 54
```yaml
size: 45
```

### `update-rate`
> Частота оновлення меню\
> Задається в тіках (20 тіків = 1 секунда)

### `items`
> Секція для налаштування предметів\
> Нижче представлені параметри налаштування предметів

#### `material`
> Такі ж параметри, як для [призів](./prizes#material)
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
> Слоти, що будуть використовуватись предметом

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
>> Діапазон
```yaml
slots:
    - 0-3
```
>> Список + Діапазон
```yaml
slots:
    - 0
    - 1-3
```

#### `type`
> Тип предмету\
> За замовчуванням [`DEFAULT`](#default)\
> Доступні параметри: [`DEFAULT`](#default), [`OPEN`](#open), [`HISTORY`](#history)

## Заповнювачі

Заповнювачі (placeholders) використовуються при генеруванні предметів в меню для заміни певної інформаці.

| Заповнювач                     | Опис                                        |
|--------------------------------|---------------------------------------------|
| `%keys%`                       | Кількість ключів гравця                     |
| `%keys_<тип кейсу>`            | Кількість ключів гравця від іншого кейсу    |
| `%casetype%`                   | Тип кейсу                                   |

## Типи предметів

### `DEFAULT`
> Звичайний тип предмету, використовується лише для косметичних цілей
```yaml
type: DEFAULT
```

### `OPEN`
> Предмет, при натисненні якого, відбуватиметься відкриття кейсу (початок анімації)\
> Може відкривати інший кейс за допомогою формату: `OPEN_<тип кейсу>`
```yaml
type: OPEN
```

Відкриття кейсу `donate`
```yaml
type: OPEN_donate
```

### `HISTORY`
> Предмет, що відображає історію недавніх відкриттів кейсів\
> Формат налаштування: `HISTORY-(індекс)-[тип кейсу]` (індекс відповідає діапазону [`history-data-size`](./#history-data-size), тип кейсу необов'язковий, використовується для відображення історії іншого кейсу)\
> Для відображення відсортованої історії відкриттів усіх кейсів, використовуйте `GLOBAL` в якості типу кейсу\
> `DEFAULT` в якості айді предмету вказує на те, що використовуватиметься матеріал виграшного предмета

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
Предмет має можливість відображати голову гравця, що відкривав кейс, в якості предмету. Просто закоментуйте параметр `id`
```yaml
material:
    # id: DEFAULT
```
:::

#### Заповнювачі

| Заповнювач            | Опис                                                                  |
|-----------------------|-----------------------------------------------------------------------|
| `%player%`            | Ім'я гравця                                                           |
| `%group%`             | Ім'я групи                                                            |
| `%groupdisplayname%`  | Відображуване ім'я групи                                              |
| `%time%`              | Час відкриття кейсу з форматом [`date-format`](../config#date-format) |
| `%action%`            | Назва [`random-action`](./prizes#random-actions)                      |
| `%actiondisplayname%` | Відображуване ім'я [`random-action`](./prizes#random-actions)         |
| `%casetype%`          | Тип кейсу                                                             |
| `%casedisplayname%`   | Відображуване ім'я кейсу                                              |

#### Історію не знайдено
> Для цього предмету доступна розширена функція `HistoryNotFound` - відображення предмету пустого індексу\
> Просто додайте секцію `HistoryNotFound` в якості конфігурації [матеріалу](#material)
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