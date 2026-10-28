---
id: config
title: Main configuration file
sidebar_custom_props:
  icon: FaCog
---

The main configuration file for general **DonateCase** plugin settings - `Config.yml`

---

## Parameters

### `update-checker`

> Checks for a new version on Modrinth

```yaml
update-checker: true
```

### `database`

> Settings for connecting to the database

```yaml
database:
  type: SQLITE
  settings:
    host: 'localhost'
    port: 3306
    database: 'nameDataBase'
    username: 'root'
    password: 'password'
```

#### `type`

> Database type\
> Available parameters: `SQLITE`, `MYSQL`, `POSTGRESQL`

#### `settings`

> Settings for remote databases (MYSQL, POSTGRESQL)

| Parameter  | Description                       |
| ---------- | --------------------------------- |
| `host`     | Host to connect to                |
| `port`     | Port to connect to                |
| `database` | Database name                     |
| `username` | Username for the connection       |
| `password` | Password for the connection       |

### `language`

> Plugin localization\
> Available parameters: `en_US`, `es_ES`, `ru_RU`, `ua_UA`

```yaml
language: en_US
```

### `hologram-driver`

> Driver for creating holograms above case blocks\
> Available parameters: `CMI`, `DecentHolograms`, `HolographicDisplays`, `FancyHolograms`

:::info
If the driver is set incorrectly or not found on the server, any available one will be used
:::

```yaml
hologram-driver: DecentHolograms
```

### `level-groups`

> Global level settings for groups\
> Used to check a player's group in LuckPerms when receiving a prize

:::info
Each case will use exactly these settings if it did not find its own in the case configuration.
Clear this section if you want to disable global group levels
:::

```yaml
level-groups:
  legend: 4 # highest level
  deluxe: 3
  vipplus: 2
  vip: 1
  default: 0
```

### `date-format`

> Date display format for the opening history\
> Generated using [SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html)

```yaml
date-format: "dd.MM HH:mm:ss"
```

### `addons-help`

> Shows help for addon commands after using `/dc` or `/dc help`

```yaml
addons-help: true
```

### `use-packets`

> Uses [PacketEvents](https://modrinth.com/plugin/packetevents) to create fake ArmorStands, very useful when the server processes a lot of entities

:::info
To work, you need to load [PacketEvents](https://modrinth.com/plugin/packetevents) on your server
:::

```yaml
use-packets: true
```

### `caching`

> Caching for retrieving the number of keys, case openings, and history\
> Used only when the `mysql` parameter is enabled\
> Set in ticks (1 second = 20 ticks)

:::info
Actually used only in placeholders (GUI and PlaceholderAPI)
:::

```yaml
caching: 20
```

### `format-player-name`

> Formats a player's nickname, searching for a similar one on the server case-insensitively

:::tip
Important to use if your server has an auto-donation website, where players might mistakenly enter their nickname in lowercase (`_jodex__` instead of `_Jodex__`)
:::

```yaml
format-player-name: false
```

### `converter`

> Settings for converting old configurations

```yaml
converter:
  keys: false
  data: false
```

#### `keys`

> Converting Keys.yml to the database

#### `data`

> Converting Data.yml to the database
