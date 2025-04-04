---
sidebar_position: 1
id: donatecase-main
title: Головна
---


# DonateCase

DonateCase - потужний плагін для створення кейсів пожертвувань на серверах Minecraft. Легка інтеграція, підтримка кастомізації, багатомовні функції та можливість розширення, щоб зробити ваш сервер дійсно унікальним!

## Особливості
- Оптимізований код
- Можливість видачі будь-якого призу
- Повна локалізація
- Повна свобода у кастомізації та створенні кейсів
- Повна свобода у кастомізації GUI
- Красиві анімації
- Налаштування анімацій
- Історія відкриттів кейсів

## Підтримка
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

## Команди
- /dc help - Допомога по плагіну
- /dc keys (Гравець) - Показати ключі
- /dc cases - Показати всі можливі кейси
- /dc opencase (Тип кейсу) - Відкрити кейс
- /dc create (Тип кейсу) (Назва кейсу) - Встановити кейс (Дивитись на блок)
- /dc delete (Назва кейсу) - Видалити кейс (Дивитись на блок)
- /dc givekey (Гравець) (Кейс) (Ключі) - Видати гравцю ключі
- /dc setkey (Гравець) (Кейс) (Ключі) - Встановити гравцю ключі
- /dc delkey (Гравець) (Кейс) - Видалити всі ключі гравця
- /dc delkey all - Видалити всі ключі всіх гравців
- /dc reload - Перезавантажити конфіг
- /dc reload cache - Перезавантажити кеш
- /dc addons - Показати завантажені аддони
- /dc addon (enable/disable | load/unload) - Управління аддонами
- /dc registry (animations|actions|materials) - Показати список зареєстрованих предметів у регістрі

## Права
- Для гравців - `donatecase.player` (/dc help, /dc keys, /dc opencase)
- Для модераторів - `donatecase.mod` (/dc keys (Гравець), /dc givekey/setkey/delkey)
- Для адміністрації - `donatecase.admin` (всі команди)

## PlaceholderAPI
| Заповнювач                                         | Опис                                                     | Аргументи                                                                                                                                       |
|----------------------------------------------------|----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `%donatecase_keys_<casetype>%`                     | Кількість ключів до окремого кейсу                       | `casetype` - Тип кейсу                                                                                                                          |
| `%donatecase_keys_<casetype>_format%`              | Кількість ключів до окремого кейсу з форматуванням       | `casetype` - Тип кейсу                                                                                                                          |
| `%donatecase_keys%`                                | Сумарна кількість усіх ключів від кейсів                 | немає                                                                                                                                           |
| `%donatecase_keys_format%`                         | Сумарна кількість усіх ключів від кейсів з форматуванням | немає                                                                                                                                           |
| `%donatecase_open_count%`                          | Сумарна кількість відкриттів усіх кейсів                 | немає                                                                                                                                           |
| `%donatecase_open_count_format%`                   | Сумарна кількість відкриттів усіх кейсів з форматуванням | немає                                                                                                                                           |
| `%donatecase_open_count_<casetype>%`               | Кількість відкриттів окремого кейсу                      | `casetype` - Тип кейсу                                                                                                                          |
| `%donatecase_open_count_<casetype>_format%`        | Кількість відкриттів окремого кейсу з форматуванням      | `casetype` - Тип кейсу                                                                                                                          |
| `%donatecase_history_<casetype>_<index>_<value>% ` | Данні історії відкриттів окремого кейсу                  | `casetype` - Тип кейсу<br/>`index` - Індекс історії<br/>`value` - Значення (допустимі: `player`, `casetype`, `group`, `action`, `item`, `time`) |

## Додаткова інформація
Якщо у вас виникли проблеми, ви можете звернутися за допомогою на нашому [Discord сервері](https://discord.gg/a65jvpk9vm). Будь ласка, робіть це тільки якщо ви повністю прочитали **документацію** плагіна

Якщо у вас є повідомлення про помилку, ви можете створити [issue на GitHub.](https://github.com/Jodexx/DonateCase/issues)
Також, якщо ви хочете допомогти з розвитком, ви можете зробити [pull request](https://github.com/Jodexx/DonateCase/pulls).

## Доповнення (addons)

### Офіційні

[DCEventManager](https://www.spigotmc.org/resources/dceventmanager.114740/) - Доповнення для управління подіями. Більше деталей [тут](./Addons/dc-event-manager)

[DCPhysicalKey](https://www.spigotmc.org/resources/dcphysicalkey-donatecase-addon.120298/) - Додає можливість створення фізичних ключів для кейсів.

[DCWebHook](https://www.spigotmc.org/resources/dcwebhook-donatecase-addon.112622/) - Сповіщає про відкриття кейсів за допомогою веб-хуків у Discord

[FriendCase](https://www.spigotmc.org/resources/friendcase-donatecase-addon.114293/) - Додає можливість дарувати ключі від кейсів своїм друзям

[DCPrizePreview](https://www.spigotmc.org/resources/dcprizepreview-donatecase-addon.119445/) - Додає попередній перегляд призів у кейсі

[DCBlockAnimations](https://www.spigotmc.org/resources/dcblockanimations-donatecase-addon.118943/) - Додає певні анімації відкриття блоків кейсів

[DCHistoryEditor](https://www.spigotmc.org/resources/dchistoryeditor-donatecase-addon.121401/) - Дозволяє редагувати історію відкриттів кейсів

~~[FreeCases](https://www.spigotmc.org/resources/freecases-donatecase-addon.108940/) - Додає можливість для гравців отримувати безкоштовні ключі від кейсів~~ **Застаріло**

### Неофіційні

:::warning
Неофіційні доповнення ніяк не відносяться до студії JodexIndustries, можуть не оновлюватись і не гарантують працездатність на нових версіях DonateCase.
:::

[DCEveryDayCase](https://www.spigotmc.org/resources/dceverydaycase.123736/) - Дозволяє гравцям відкривати щоденні безкоштовні кейси

[BOXSellCase](https://www.spigotmc.org/resources/boxsellcase-addon-donatecase-free.116222/) - Дозволяє гравцям продавати кейси та отримувати нагороди