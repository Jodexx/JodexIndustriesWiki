---
id: animations
title: Налаштування анімацій
sidebar_custom_props:
  icon: FaSpinner
---

Наскільки вам відомо, **DonateCase** має різні анімації відкриття кейсів. Іноді стандартні налаштування не зовсім підходять для користувачів, тому маємо конфігурацію `Animations.yml`

:::tip
Даний файл являється глобальною конфігурацією для всіх кейсів, однак кожен кейс також може мати свої особисті налаштування анімацій за допомогою секції [`animation-settings`](./cases#animation-settings)
:::
---

## Спільні налаштування

Деякі анімації мають спільні параметри, тому вони винесені сюди

### `ItemSlot`

> Встановлює слот в якому буде відображатись предмет для ArmorStand'а\
> Доступні параметри: `HEAD`, `HAND`, `OFF_HAND`, `FEET`, `LEGS`, `CHEST`

```yaml
ItemSlot: HEAD
```

### `SmallArmorStand`

> Встановлює маленький розмір ArmorStand'а

```yaml
SmallArmorStand: true
```

### `StartPosition`

> Змінює початкову позицію за координатами

```yaml
StartPosition:
  x: 0.5
  y: 1
  z: 0.5
```

### `Facing`

> Примусово встановлює сторону для показу анімації\
> Доступні параметри: `NORTH`, `NORTH_EAST`, `EAST`, `SOUTH_EAST`, `SOUTH`, `SOUTH_WEST`, `WEST`, `NORTH_WEST`, `UP`, `DOWN`, `UP_NORTH`, `UP_EAST`, `UP_SOUTH`, `UP_WEST`, `DOWN_NORTH`, `DOWN_EAST`, `DOWN_SOUTH`, `DOWN_WEST`, `UP_NORTH_WEST`, `DOWN_SOUTH_EAST`

:::info
За замовчуванням використовується погляд гравця під час встановлення кейсу (якщо закоментовано або видалено)
:::

```yaml
Facing: EAST
```

### `Pose`

> Змінює позу ArmorStand'ів\
> Зазвичай не використовується у більшості випадків

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
    Sound: ENTITY_EXPERIENCE_ORB_PICKUP
    Volume: 1
    Pitch: 1
  End:
    Sound: ENTITY_GENERIC_EXPLODE
    Volume: 1
    Pitch: 1
  FallingParticle: FALLING_WATER 
```

## [FIREWORK](../animations#firework)

```yaml
FIREWORK:
  ItemSlot:
  SmallArmorStand: true
  Power: 0
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

## RANDOM

```yaml
RANDOM:
  SHAPE: 15
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
  Timeout: 600
  Radius: 1.5
  Item: CHEST
#  Period: 0
#  ItemSlot: HEAD
```
