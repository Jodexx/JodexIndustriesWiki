---
id: animations
title: Настройки анимаций
sidebar_custom_props:
  icon: FaSpinner
---

Как вам известно, **DonateCase** имеет разные анимации открытия кейсов. Иногда стандартные настройки не совсем подходят пользователям, поэтому есть конфигурация `Animations.yml`

:::tip
Данный файл является глобальной конфигурацией для всех кейсов, однако каждый кейс также может иметь свои личные настройки анимаций с помощью секции [`animation-settings`](./cases#animation-settings)
:::

---

## Общие настройки

Некоторые анимации имеют общие параметры, поэтому они вынесены сюда

### `ItemSlot`

> Устанавливает слот, в котором будет отображаться предмет для ArmorStand'а\
> Доступные параметры: `HEAD`, `HAND`, `OFF_HAND`, `FEET`, `LEGS`, `CHEST`

```yaml
ItemSlot: HEAD
```

### `SmallArmorStand`

> Устанавливает маленький размер ArmorStand'а

```yaml
SmallArmorStand: true
```

### `StartPosition`

> Изменяет начальную позицию по координатам

```yaml
StartPosition:
  x: 0.5
  y: 1
  z: 0.5
```

### `Facing`

> Принудительно устанавливает сторону для показа анимации\
> Доступные параметры: `NORTH`, `NORTH_EAST`, `EAST`, `SOUTH_EAST`, `SOUTH`, `SOUTH_WEST`, `WEST`, `NORTH_WEST`, `UP`, `DOWN`, `UP_NORTH`, `UP_EAST`, `UP_SOUTH`, `UP_WEST`, `DOWN_NORTH`, `DOWN_EAST`, `DOWN_SOUTH`, `DOWN_WEST`, `UP_NORTH_WEST`, `DOWN_SOUTH_EAST`

:::info
По умолчанию используется направление взгляда игрока во время установки кейса (если закомментировано или удалено)
:::

```yaml
Facing: EAST
```

### `Pose`

> Изменяет позу ArmorStand'ов\
> Обычно не используется в большинстве случаев

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
