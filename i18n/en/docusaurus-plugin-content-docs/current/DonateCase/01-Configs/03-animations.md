---
id: animations
title: Animation settings
sidebar_custom_props:
  icon: FaSpinner
---

As you may know, **DonateCase** has different case opening animations. Sometimes the default settings are not quite suitable for users, so there is the `Animations.yml` configuration

:::tip
This file is a global configuration for all cases, however each case can also have its own personal animation settings using the [`animation-settings`](./cases#animation-settings) section
:::

---

## Common settings

Some animations share common parameters, so they are extracted here

### `ItemSlot`

> Sets the slot in which the item will be displayed for the ArmorStand\
> Available parameters: `HEAD`, `HAND`, `OFF_HAND`, `FEET`, `LEGS`, `CHEST`

```yaml
ItemSlot: HEAD
```

### `SmallArmorStand`

> Sets the small size of the ArmorStand

```yaml
SmallArmorStand: true
```

### `StartPosition`

> Changes the starting position by coordinates

```yaml
StartPosition:
  x: 0.5
  y: 1
  z: 0.5
```

### `Facing`

> Forces the side for displaying the animation\
> Available parameters: `NORTH`, `NORTH_EAST`, `EAST`, `SOUTH_EAST`, `SOUTH`, `SOUTH_WEST`, `WEST`, `NORTH_WEST`, `UP`, `DOWN`, `UP_NORTH`, `UP_EAST`, `UP_SOUTH`, `UP_WEST`, `DOWN_NORTH`, `DOWN_EAST`, `DOWN_SOUTH`, `DOWN_WEST`, `UP_NORTH_WEST`, `DOWN_SOUTH_EAST`

:::info
By default the player's view direction when placing the case is used (if commented out or removed)
:::

```yaml
Facing: EAST
```

### `Pose`

> Changes the pose of the ArmorStands\
> Usually not used in most cases

```yaml
Pose:
  Head:
    x: 0
    y: 0
    z: 0
  Body:
    x: 0
    y: 0
    z: 0
  RightArm:
    x: 0
    y: 0
    z: 0
  LeftArm:
    x: 0
    y: 0
    z: 0
  RightLeg:
    x: 0
    y: 0
    z: 0
  LeftLeg:
    x: 0
    y: 0
    z: 0
```

## [SHAPE](../animations#shape)

```yaml
SHAPE:
  ItemSlot: HEAD
  SmallArmorStand: true
  Firework: true
  # Pose:
  Particle:
    Orange:
      Size: 1.0
      Rgb: 255, 165, 0
    White:
      Size: 1.0
      Rgb: 255, 255, 255
  StartPosition:
    x: 0.5
    y: -0.1
    z: 0.5
  Tail:
    Radius: 0.5
  Scroll:
    Period: 2
    Time: 15
    Height: 0.91
    Interval: 1
    Yaw: 20.0
    Volume: 10
    Pitch: 1
    Sound: UI_BUTTON_CLICK
  End:
    Time: 25
```

## [RAINLY](../animations#rainly)

```yaml
RAINLY:
  ItemSlot: HEAD
  SmallArmorStand: true
  Scroll:
    Particle: FIREWORK
    Sound: ENTITY_EXPERIENCE_ORB_PICKUP
    Volume: 1
    Pitch: 1
  End:
    Particle: EXPLOSION
    Sound: ENTITY_GENERIC_EXPLODE
    Volume: 1
    Pitch: 1
  CloudParticle: CLOUD
  FallingParticle: FALLING_WATER # you can use all particles, full list: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html
```

## [FIREWORK](../animations#firework)

```yaml
FIREWORK:
  ItemSlot:
  SmallArmorStand: true
  Power: 0 # Firework power
  StartPosition:
    x: 0.5
    y: 1
    z: 0.5
  Scroll:
    Period: 2
    Yaw: 20.0
  FireworkColors:
    - RED
    - BLUE
    - GREEN
    - YELLOW
```

## [WHEEL](../animations#wheel-full)

```yaml
WHEEL:
  Type: FULL # or RANDOM
  ItemSlot: HEAD
  SmallArmorStand: true
  ItemsCount: 6 # only for RANDOM type
  Shuffle: true # only for FULL type
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
    EaseAmount: 2.5 # 1 = linear
    Sound: UI_BUTTON_CLICK
    Volume: 10
    Pitch: 1
```

## RANDOM

```yaml
RANDOM:
  SHAPE: 15 # Chance
  RAINLY: 15
  FIREWORK: 15
  WHEEL: 15
  POP: 15
  SELECT: 15
```

## [POP](../animations#pop)

```yaml
POP:
  Scroll:
    Sound: ENTITY_ITEM_PICKUP
    Volume: 10
    Pitch: 1
  Facing: EAST
  Rounded: true
  Radius: 1.5
#  Period: 0
#  ItemSlot: HEAD
```

## [SELECT](../animations#select)

```yaml
SELECT:
  Facing: EAST
  Timeout: 600 # in ticks
  Radius: 1.5
  Item: CHEST
#  Period: 0
#  ItemSlot: HEAD
```

## [FUTURE_WHEEL](../animations#futurewheel)

```yaml
FUTURE_WHEEL:
  #  Facing: EAST
  StartPosition:
    x: 0.5
    y: -0.5
    z: 0.5
  HologramPosition:
    x: 0.0
    y: 1.0
    z: 0.0
  Spawn:
    Interval: 20 # in ticks
    Particle: SMOKE
    ParticleCount: 3
    Sound: ENTITY_ARROW_SHOOT
    Volume: 10
    Pitch: 1
  Scroll:
    Particle: SMOKE
    ParticleCount: 3
    Sound: ENTITY_ARROW_SHOOT
    Volume: 10
    Pitch: 1
  CircleRadius: 1.0
  ScrollingTime: 120 # in ticks, this value will be appended to the total spawn-time (spawn-time = {item count} * SpawnInterval)
  SkipTicks: 5 # this means that every 5th tick an item in the circle will glow
```
