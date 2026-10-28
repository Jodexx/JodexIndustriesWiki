---
id: menus
title: Menu settings
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaTh
---

import Mermaid from '@theme/Mermaid';

All menu configurations are stored in each case's directory - `menu`

<Mermaid value={
`graph LR
  C1[default \ndefault case directory]
  C1 --> C1a[menu \nCase menu directory]
  C1a --> C1a1[default_menu.yml \nMenu settings file]
`
}
/>

## Parameters

### `id`
> The id of your menu, which will be used in the case's [`default-menu`](../Cases#default-menu) parameter\
> Do not use spaces, preferably in lowercase\
> Must be unique, other menus cannot have the same id

:::note
If the menu id is not set, the file name will be used
:::

```yaml
id: default_menu
```

### `title`
> Menu title
```yaml
title: '&e&l✨ &6Donate&7-&fCase &e&l✨'
```

### `size`
> Menu size\
> Use a number that is a multiple of 9 and no greater than 54
```yaml
size: 45
```

### `update-rate`
> Menu update rate\
> Set in ticks (20 ticks = 1 second)

### `items`
> Section for configuring items\
> Below are the item configuration parameters

#### `material`
> The same parameters as for [prizes](./prizes#material)
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
> The slots that the item will use

>> List #1
```yaml
slots:
    - [0, 1, 2, 3]
```
>> List #2
```yaml
slots:
    - 0
    - 1
    - 2
    - 3
```
>> Range
```yaml
slots:
    - 0-3
```
>> List + Range
```yaml
slots:
    - 0
    - 1-3
```

#### `type`
> Item type\
> Default is [`DEFAULT`](#default)\
> Available parameters: [`DEFAULT`](#default), [`OPEN`](#open), [`HISTORY`](#history)

## Placeholders

Placeholders are used when generating items in the menu to replace certain information.

| Placeholder                    | Description                                 |
|--------------------------------|---------------------------------------------|
| `%keys%`                       | Number of the player's keys                 |
| `%keys_<case type>`           | Number of the player's keys from another case |
| `%casetype%`                   | Case type                                   |

## Item types

### `DEFAULT`
> A regular item type, used only for cosmetic purposes
```yaml
type: DEFAULT
```

### `OPEN`
> An item that, when clicked, opens the case (starts the animation)\
> It can open another case using the format: `OPEN_<case type>`
```yaml
type: OPEN
```

Opening the `donate` case
```yaml
type: OPEN_donate
```

### `HISTORY`
> An item that displays the history of recent case openings\
> Configuration format: `HISTORY-(index)-[case type]` (the index corresponds to the [`history-data-size`](./#history-data-size) range, the case type is optional and is used to display the history of another case)\
> To display a sorted opening history of all cases, use `GLOBAL` as the case type\
> `DEFAULT` as the item id indicates that the material of the won item will be used

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
The item can display the head of the player who opened the case as the item. Just comment out the `id` parameter
```yaml
material:
    # id: DEFAULT
```
:::

#### Placeholders

| Placeholder           | Description                                                           |
|-----------------------|-----------------------------------------------------------------------|
| `%player%`            | Player name                                                          |
| `%group%`             | Group name                                                           |
| `%groupdisplayname%`  | Group display name                                                   |
| `%time%`              | Case opening time with the [`date-format`](../config#date-format) format |
| `%action%`            | Name of the [`random-action`](./prizes#random-actions)              |
| `%actiondisplayname%` | Display name of the [`random-action`](./prizes#random-actions)      |
| `%casetype%`          | Case type                                                            |
| `%casedisplayname%`   | Case display name                                                    |

#### History not found
> The extended `HistoryNotFound` function is available for this item - displaying an item for an empty index\
> Just add a `HistoryNotFound` section as a [material](#material) configuration
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
