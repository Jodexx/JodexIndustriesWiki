---
id: materials
title: Материалы
sidebar_custom_props:
  icon: FaCube
---

Материалы в **DonateCase** используются для генерации предметов, отображаемых в меню и анимациях.

## Материалы Minecraft

> Обычные материалы майнкрафта\
> [Список всех материалов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)

```yml
material:
  id: GOLDEN_SWORD
```

## Голова игрока

> Голова игрока по нику\
> Формат: `HEAD:<имя игрока>`

```yml
material:
  id: HEAD:_Jodex__
```

## [HeadDatabase](https://www.spigotmc.org/resources/head-database.14280/)

> Головы из плагина [HeadDatabase](https://www.spigotmc.org/resources/head-database.14280/)\
> Формат: `HDB:<ID>`

```yml
material:
  id: HDB:1234
```

## [CustomHeads](https://www.spigotmc.org/resources/custom-heads-1-8-1-20.29057/)

> Головы из плагина [CustomHeads](https://www.spigotmc.org/resources/custom-heads-1-8-1-20.29057/)\
> Формат: `CH:<category>:<id>`

```yml
material:
  id: CH:Food:131
```

## [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%A8itemsadder%E2%AD%90emotes-mobs-items-armors-hud-gui-emojis-blocks-wings-hats-liquids.73355/)

> Предметы из плагина [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%A8itemsadder%E2%AD%90emotes-mobs-items-armors-hud-gui-emojis-blocks-wings-hats-liquids.73355/)\
> Формат: `IA:<namespace>:<id>`

```yml
material:
  id: IA:realcraft:waterskin
```

## Mojang Base64

> Головы из базы Mojang, значения которых закодированы в `BASE64`\
> Рекомендуемый сервис поиска голов - [Minecraft Heads](https://minecraft-heads.com/)\
> Формат: `BASE64:<value>`

```yml
material:
  id: BASE64:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDY3YzVlOGMzYTIwOGRhN2Y3ODBiMzQwY2VmMjI2NDJkNTVlMDA0NzJkMzY5M2IzNDg2ZDcxNDVkNDk5NzBiYiJ9fX0=
```

## Mojang MCURL

> Головы из базы Mojang в виде id текстуры после `https://textures.minecraft.net/textures/`\
> Рекомендуемый сервис поиска голов - [Minecraft Heads](https://minecraft-heads.com/)\
> Формат: `MCURL:<texture-id>`

```yml
material:
  id: MCURL:3ba311761e3234810bb2b451f6bd0b506f8cb48e1195bef784eb7e2c6095d277
```

## [Oraxen](https://www.spigotmc.org/resources/%E2%98%84%EF%B8%8F-oraxen-custom-items-blocks-emotes-furniture-resourcepack-and-gui-1-18-1-21.72448/)

> Предметы из плагина [Oraxen](https://www.spigotmc.org/resources/%E2%98%84%EF%B8%8F-oraxen-custom-items-blocks-emotes-furniture-resourcepack-and-gui-1-18-1-21.72448/)\
> Формат: `ORAXEN:<id>`

```yml
material:
  id: ORAXEN:test
```
