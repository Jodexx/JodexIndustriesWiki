---
id: donatecase-main
title: Главная
sidebar_custom_props:
  icon: FaHome
---


# DonateCase

DonateCase — мощный плагин для создания донат-кейсов на серверах Minecraft. Лёгкая интеграция, поддержка кастомизации, многоязычные функции и возможность расширения, чтобы сделать ваш сервер по-настоящему уникальным!

## Особенности

- Оптимизированный код
- Возможность выдачи любого приза
- Полная локализация
- Полная свобода в кастомизации и создании кейсов
- Полная свобода в кастомизации GUI
- Красивые анимации
- Настройка анимаций
- История открытий кейсов

## Поддержка

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

## Команды

- /dc help - Помощь по плагину
- /dc keys (Игрок) - Показать ключи
- /dc cases - Показать все доступные кейсы
- /dc opencase (Тип кейса) - Открыть кейс
- /dc create (Тип кейса) (Название кейса) - Установить кейс (Смотреть на блок)
- /dc delete (Название кейса) - Удалить кейс (Смотреть на блок)
- /dc givekey (Игрок) (Кейс) (Ключи) - Выдать игроку ключи
- /dc setkey (Игрок) (Кейс) (Ключи) - Установить игроку ключи
- /dc delkey (Игрок) (Кейс) - Удалить все ключи игрока
- /dc delkey all - Удалить все ключи всех игроков
- /dc reload - Перезагрузить конфиг
- /dc reload cache - Перезагрузить кеш
- /dc addons - Показать загруженные аддоны
- /dc addon (enable/disable | load/unload) - Управление аддонами
- /dc registry (animations|actions|materials) - Показать список зарегистрированных предметов в реестре

## Права

- Для игроков - `donatecase.player` (/dc help, /dc keys, /dc opencase)
- Для модераторов - `donatecase.mod` (/dc keys (Игрок), /dc givekey/setkey/delkey)
- Для администрации - `donatecase.admin` (все команды)

## PlaceholderAPI

| Плейсхолдер                                        | Описание                                                 | Аргументы                                                                                                                                       |
|----------------------------------------------------|----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `%donatecase_keys_<casetype>%`                     | Количество ключей от отдельного кейса                    | `casetype` - Тип кейса                                                                                                                          |
| `%donatecase_keys_<casetype>_format%`              | Количество ключей от отдельного кейса с форматированием  | `casetype` - Тип кейса                                                                                                                          |
| `%donatecase_keys%`                                | Суммарное количество всех ключей от кейсов               | нет                                                                                                                                             |
| `%donatecase_keys_format%`                         | Суммарное количество всех ключей от кейсов с форматированием | нет                                                                                                                                         |
| `%donatecase_open_count%`                          | Суммарное количество открытий всех кейсов                | нет                                                                                                                                             |
| `%donatecase_open_count_format%`                   | Суммарное количество открытий всех кейсов с форматированием | нет                                                                                                                                          |
| `%donatecase_open_count_<casetype>%`               | Количество открытий отдельного кейса                     | `casetype` - Тип кейса                                                                                                                          |
| `%donatecase_open_count_<casetype>_format%`        | Количество открытий отдельного кейса с форматированием   | `casetype` - Тип кейса                                                                                                                          |
| `%donatecase_history_<casetype>_<index>_<value>%` | Данные истории открытий отдельного кейса                 | `casetype` - Тип кейса<br/>`index` - Индекс истории<br/>`value` - Значение (допустимые: `player`, `casetype`, `group`, `action`, `item`, `time`) |

## Дополнительная информация

Если у вас возникли проблемы, вы можете обратиться за помощью на нашем [Discord сервере](https://discord.gg/a65jvpk9vm). Пожалуйста, делайте это только если вы полностью прочитали **документацию** плагина

Если у вас есть сообщение об ошибке, вы можете создать [issue на GitHub.](https://github.com/Jodexx/DonateCase/issues)
Также, если вы хотите помочь с развитием, вы можете сделать [pull request](https://github.com/Jodexx/DonateCase/pulls).

## Дополнения (addons)

### Официальные

[DCEventManager](https://www.spigotmc.org/resources/dceventmanager.114740/) - Дополнение для управления событиями. Больше деталей [здесь](./Addons/dc-event-manager)

[DCPhysicalKey](https://www.spigotmc.org/resources/dcphysicalkey-donatecase-addon.120298/) - Добавляет возможность создания физических ключей для кейсов.

[DCWebHook](https://www.spigotmc.org/resources/dcwebhook-donatecase-addon.112622/) - Оповещает об открытии кейсов с помощью веб-хуков в Discord

[FriendCase](https://www.spigotmc.org/resources/friendcase-donatecase-addon.114293/) - Добавляет возможность дарить ключи от кейсов своим друзьям

[DCPrizePreview](https://www.spigotmc.org/resources/dcprizepreview-donatecase-addon.119445/) - Добавляет предпросмотр призов в кейсе

[DCBlockAnimations](https://www.spigotmc.org/resources/dcblockanimations-donatecase-addon.118943/) - Добавляет определённые анимации открытия блоков кейсов

[DCHistoryEditor](https://www.spigotmc.org/resources/dchistoryeditor-donatecase-addon.121401/) - Позволяет редактировать историю открытий кейсов

~~[FreeCases](https://www.spigotmc.org/resources/freecases-donatecase-addon.108940/) - Добавляет возможность для игроков получать бесплатные ключи от кейсов~~ **Устарело**

### Неофициальные

:::warning
Неофициальные дополнения никак не относятся к студии JodexIndustries, могут не обновляться и не гарантируют работоспособность на новых версиях DonateCase.
:::

[DCEveryDayCase](https://www.spigotmc.org/resources/dceverydaycase.123912/) - Позволяет игрокам открывать ежедневные бесплатные кейсы. Больше деталей [здесь](./Addons/Unofficial/EveryDayCase/everydaycase-start)

[BOXSellCase](https://www.spigotmc.org/resources/boxsellcase-addon-donatecase-free.116222/) - Позволяет игрокам продавать кейсы и получать награды
