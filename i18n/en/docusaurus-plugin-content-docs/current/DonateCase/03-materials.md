---
id: materials
title: Materials
sidebar_custom_props:
  icon: FaCube
---

Materials in **DonateCase** are used to generate the items displayed in menus and animations.

## Minecraft materials

> Regular Minecraft materials\
> [List of all materials](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)

```yml
material:
  id: GOLDEN_SWORD
```

## Player head

> A player's head by nickname\
> Format: `HEAD:<player name>`

```yml
material:
  id: HEAD:_Jodex__
```

## [HeadDatabase](https://www.spigotmc.org/resources/head-database.14280/)

> Heads from the [HeadDatabase](https://www.spigotmc.org/resources/head-database.14280/) plugin\
> Format: `HDB:<ID>`

```yml
material:
  id: HDB:1234
```

## [CustomHeads](https://www.spigotmc.org/resources/custom-heads-1-8-1-20.29057/)

> Heads from the [CustomHeads](https://www.spigotmc.org/resources/custom-heads-1-8-1-20.29057/) plugin\
> Format: `CH:<category>:<id>`

```yml
material:
  id: CH:Food:131
```

## [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%A8itemsadder%E2%AD%90emotes-mobs-items-armors-hud-gui-emojis-blocks-wings-hats-liquids.73355/)

> Items from the [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%A8itemsadder%E2%AD%90emotes-mobs-items-armors-hud-gui-emojis-blocks-wings-hats-liquids.73355/) plugin\
> Format: `IA:<namespace>:<id>`

```yml
material:
  id: IA:realcraft:waterskin
```

## Mojang Base64

> Heads from the Mojang database whose values are encoded in `BASE64`\
> Recommended head search service - [Minecraft Heads](https://minecraft-heads.com/)\
> Format: `BASE64:<value>`

```yml
material:
  id: BASE64:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDY3YzVlOGMzYTIwOGRhN2Y3ODBiMzQwY2VmMjI2NDJkNTVlMDA0NzJkMzY5M2IzNDg2ZDcxNDVkNDk5NzBiYiJ9fX0=
```

## Mojang MCURL

> Heads from the Mojang database as a texture id after `https://textures.minecraft.net/textures/`\
> Recommended head search service - [Minecraft Heads](https://minecraft-heads.com/)\
> Format: `MCURL:<texture-id>`

```yml
material:
  id: MCURL:3ba311761e3234810bb2b451f6bd0b506f8cb48e1195bef784eb7e2c6095d277
```

## [Oraxen](https://www.spigotmc.org/resources/%E2%98%84%EF%B8%8F-oraxen-custom-items-blocks-emotes-furniture-resourcepack-and-gui-1-18-1-21.72448/)

> Items from the [Oraxen](https://www.spigotmc.org/resources/%E2%98%84%EF%B8%8F-oraxen-custom-items-blocks-emotes-furniture-resourcepack-and-gui-1-18-1-21.72448/) plugin\
> Format: `ORAXEN:<id>`

```yml
material:
  id: ORAXEN:test
```
