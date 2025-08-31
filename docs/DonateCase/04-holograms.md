---
id: holograms
title: Голограми
sidebar_custom_props:
  icon: FaLayerGroup
---

# DonateCase Голограми

**DonateCase** використовує зовнішні плагіни в якості драйверу для голограм. Для їхньої роботи потрібно обов'язково завантажити один із запропонованих плагінів нижче та встановити [`hologram-driver`](./Configs/config#hologram-driver)

## ArmorStand (1.16+)

- [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) (1.16-1.20.4)
- [DecentHolograms](https://www.spigotmc.org/resources/decentholograms-1-8-1-21-1-papi-support-no-dependencies.96927/) (1.16+)
- [CMI Holograms](https://www.zrips.net/cmi/holograms/) (1.16+)

### Налаштування
> Стандартні параметри з цієї секції - [`hologram`](./Configs/Cases#hologram)

```yaml
hologram:
  enabled: true
  height: 1.5
  range: 8
  message:
    - '&6DonateCase'
```

---

## Display entity (1.19.4+)

- [FancyHolograms](https://hangar.papermc.io/Oliver/FancyHolograms)

### Налаштування
> Лише параметри `enabled` та `height` залишаються стандартними. Поглиблені налаштування зчитуються напряму плагіном [FancyHolograms](https://hangar.papermc.io/Oliver/FancyHolograms) з його форматом конфігурації


```yaml
hologram:
  enabled: true
  height: 0.0

  type: TEXT
  visibility_distance: -1
  visibility: ALL
  persistent: true
  scale_x: 1.5
  scale_y: 1.5
  scale_z: 1.5
  shadow_radius: 1.0
  shadow_strength: 1.0
  text:
    - "&6DonateCase"
  text_shadow: false
  see_through: false
  text_alignment: center
  update_text_interval: -1
```