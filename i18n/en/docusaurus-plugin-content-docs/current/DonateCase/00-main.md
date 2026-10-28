---
id: donatecase-main
title: Home
sidebar_custom_props:
  icon: FaHome
---


# DonateCase

DonateCase is a powerful plugin for creating donation cases on Minecraft servers. Easy integration, customization support, multilingual features, and expandability to make your server truly unique!

## Features

- Optimized code
- Ability to give out any prize
- Full localization
- Full freedom in customizing and creating cases
- Full freedom in customizing the GUI
- Beautiful animations
- Animation settings
- Case opening history

## Support

- MySQL
- LuckPerms
- PlayerHeads
- CustomHeads
- HeadDataBse
- ItemsAdder
- PlaceholderAPI
- CMI (Holograms)
- HolographicDisplays
- DecentHolograms
- FancyHolograms
- PacketEvents

## Commands

- /dc help - Plugin help
- /dc keys (Player) - Show keys
- /dc cases - Show all available cases
- /dc opencase (Case type) - Open a case
- /dc create (Case type) (Case name) - Place a case (Look at the block)
- /dc delete (Case name) - Delete a case (Look at the block)
- /dc givekey (Player) (Case) (Keys) - Give keys to a player
- /dc setkey (Player) (Case) (Keys) - Set a player's keys
- /dc delkey (Player) (Case) - Delete all of a player's keys
- /dc delkey all - Delete all keys of all players
- /dc reload - Reload the config
- /dc reload cache - Reload the cache
- /dc addons - Show loaded addons
- /dc addon (enable/disable | load/unload) - Manage addons
- /dc registry (animations|actions|materials) - Show the list of registered items in the registry

## Permissions

- For players - `donatecase.player` (/dc help, /dc keys, /dc opencase)
- For moderators - `donatecase.mod` (/dc keys (Player), /dc givekey/setkey/delkey)
- For administrators - `donatecase.admin` (all commands)

## PlaceholderAPI

| Placeholder                                        | Description                                              | Arguments                                                                                                                                       |
|----------------------------------------------------|----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `%donatecase_keys_<casetype>%`                     | Number of keys for a specific case                       | `casetype` - Case type                                                                                                                         |
| `%donatecase_keys_<casetype>_format%`              | Number of keys for a specific case, formatted            | `casetype` - Case type                                                                                                                         |
| `%donatecase_keys%`                                | Total number of all case keys                            | none                                                                                                                                           |
| `%donatecase_keys_format%`                         | Total number of all case keys, formatted                 | none                                                                                                                                           |
| `%donatecase_open_count%`                          | Total number of all case openings                        | none                                                                                                                                           |
| `%donatecase_open_count_format%`                   | Total number of all case openings, formatted             | none                                                                                                                                           |
| `%donatecase_open_count_<casetype>%`               | Number of openings of a specific case                    | `casetype` - Case type                                                                                                                         |
| `%donatecase_open_count_<casetype>_format%`        | Number of openings of a specific case, formatted         | `casetype` - Case type                                                                                                                         |
| `%donatecase_history_<casetype>_<index>_<value>%` | History data of a specific case                          | `casetype` - Case type<br/>`index` - History index<br/>`value` - Value (allowed: `player`, `casetype`, `group`, `action`, `item`, `time`)       |

## Additional information

If you run into problems, you can ask for help on our [Discord server](https://discord.gg/a65jvpk9vm). Please do this only after you have fully read the plugin **documentation**

If you have a bug report, you can create an [issue on GitHub.](https://github.com/Jodexx/DonateCase/issues)
Also, if you want to help with development, you can make a [pull request](https://github.com/Jodexx/DonateCase/pulls).

## Addons

### Official

[DCEventManager](https://www.spigotmc.org/resources/dceventmanager.114740/) - An addon for managing events. More details [here](./Addons/dc-event-manager)

[DCPhysicalKey](https://www.spigotmc.org/resources/dcphysicalkey-donatecase-addon.120298/) - Adds the ability to create physical case keys.

[DCWebHook](https://www.spigotmc.org/resources/dcwebhook-donatecase-addon.112622/) - Notifies about case openings using webhooks in Discord

[FriendCase](https://www.spigotmc.org/resources/friendcase-donatecase-addon.114293/) - Adds the ability to gift case keys to your friends

[DCPrizePreview](https://www.spigotmc.org/resources/dcprizepreview-donatecase-addon.119445/) - Adds a preview of prizes in a case

[DCBlockAnimations](https://www.spigotmc.org/resources/dcblockanimations-donatecase-addon.118943/) - Adds certain opening animations for case blocks

[DCHistoryEditor](https://www.spigotmc.org/resources/dchistoryeditor-donatecase-addon.121401/) - Allows editing case opening history

~~[FreeCases](https://www.spigotmc.org/resources/freecases-donatecase-addon.108940/) - Adds the ability for players to get free case keys~~ **Deprecated**

### Unofficial

:::warning
Unofficial addons are in no way related to the JodexIndustries studio, may not be updated, and do not guarantee functionality on new versions of DonateCase.
:::

[DCEveryDayCase](https://www.spigotmc.org/resources/dceverydaycase.123912/) - Allows players to open daily free cases. More details [here](./Addons/Unofficial/EveryDayCase/everydaycase-start)

[BOXSellCase](https://www.spigotmc.org/resources/boxsellcase-addon-donatecase-free.116222/) - Allows players to sell cases and receive rewards
