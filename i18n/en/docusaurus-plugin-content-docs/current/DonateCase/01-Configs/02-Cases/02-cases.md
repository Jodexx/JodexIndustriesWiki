---
id: cases
title: Case settings
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Mermaid from '@theme/Mermaid';

Cases in **DonateCase** are the main element of the plugin, through which players can receive prizes.  
In this section we will look at how to configure cases, their appearance, and the list of rewards.

---

## Creating your first case
After loading, the `DonateCase/cases` directory already contains a default case named `default` — that is the one we will start editing.

### Structure
In the case directory we can see the following structure:

<Mermaid value={
`graph LR
  C1[default \ndefault case directory]
  C1 --> C1a[menu \nCase menu directory]
  C1a --> C1a1[default_menu.yml \nMenu settings file]
  C1 --> C1b[items.yml \nPrize settings file]
  C1 --> C1c[settings.yml \nCase settings file]
`
}
/>

### General settings
Let's look at the `settings.yml` file

#### `type`
> Your case type for registration in the registry\
> Do not use spaces, preferably in lowercase\
> Must be unique, other cases cannot have the same type

:::note
If the case type is not set, the directory name will be used
:::

```yaml
type: default
```

#### `default-menu`
> The default menu to open by right-clicking the case block
```yaml
default-menu: default_menu
```

:::note
If the default menu is not set, any available one will be used
:::

#### `animation`
> The animation that will play after opening the case\
> Available parameters: `SHAPE`, `FIREWORK`, `RAINLY`, `WHEEL`, `RANDOM`, `POP`, `SELECT`\
> [Animation settings](./animations)\
> [Animation preview](../animations)

```yaml
animation: WHEEL
```

#### `animation-settings`
> Local animation setting\
> To configure, you need to copy all animation parameters from [`Animations.yml`](./animations) into this section

:::info
If you comment out/remove this parameter, the animation settings will be global
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
> Settings of the hologram above the case block\
> Uses the driver set in [this parameter](config#hologram-driver)\
> For [FancyHolograms](https://hangar.papermc.io/Oliver/FancyHolograms) [advanced parameters](../holograms#display-entity-1194) are available

```yaml
hologram:
  enabled: true
  height: 1.5
  range: 8
  message:
    - '&6DonateCase'
```

| Parameter    | Description                            |
| ------------ | -------------------------------------- |
| `enabled`    | Toggles whether the hologram is on     |
| `height`     | Height above the block                 |
| `range`      | Visibility range (only for CMI and DecentHolograms)             |
| `message`    | Hologram content                       |

#### `open-type`
> Case opening type\
> Available parameters: `GUI` - opening through a menu, `BLOCK` - immediate opening after right-clicking the case block
```yaml
open-type: GUI
```

#### `no-key-actions`
> Actions that are performed if the player has no keys for the case
```yaml
no-key-actions:
  - "[message] &cYou don't have keys for this case. You can buy them here >>> &6www.jodex.xyz"
  - "[sound] ENTITY_ENDERMAN_TELEPORT"
```

#### `history-data-size`
> The size of the case opening history\
> Remove it or set it to 0 if you want to disable the history
```yaml
history-data-size: 10
```

#### `cooldown-before-animation`
> Delay before playing the opening animation\
> Set in ticks (20 ticks = 1 second)

:::tip
Useful if you perform additional actions using [DCEventManager](../Addons/dc-event-manager) before the animation starts
:::
```yaml
cooldown-before-animation: 0
```

#### `level-groups`
> Local level settings for groups\
> The same as described for the [global configuration](./config#level-groups)

:::info
Remove this section entirely if you want to use the global settings
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
> The display name of the case, mostly for placeholders
```yaml
display-name: "&6Donate&7-&fCase"
```

#### `custom-data` (optional)
> Arbitrary data for use by addons\
> Any addon can read parameters from this section for its own needs\
> For example, DCWebHook uses this to display case names in Discord

```yaml
custom-data:
  webhook-name: "Донат Кейс"
```

:::tip
Keys and values can be anything — each addon reads only the ones it needs
:::

## Creating other cases

To create another case with its own separate settings and prizes, simply copy the default case directory `default`, rename it, for example, to `donate`, open the `settings.yml` settings file, and edit the [`type`](#type) parameter.

The directory structure will be approximately as follows:
<Mermaid value={
`graph LR
  C1[default \ndefault case directory]
  C1 --> C1a[menu \nCase menu directory]
  C1a --> C1a1[default_menu.yml \nMenu settings file]
  C1 --> C1b[items.yml \nPrize settings file]
  C1 --> C1c[settings.yml \nCase settings file]
  A1[donate \ndonate case directory]
  A1 --> A1a[menu \nCase menu directory]
  A1a --> A1a1[default_menu.yml \nMenu settings file]
  A1 --> A1b[items.yml \nPrize settings file]
  A1 --> A1c[settings.yml \nCase settings file]
`
}
/>
