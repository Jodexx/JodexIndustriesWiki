---
id: configurations
title: Конфігурації
sidebar_position: 2
---

```yaml
├── addons # директорія аддонів
├── cases # директорія конфігурацій кейсів
│   └── case.yml # ваша конфігурація кейсу
├── lang # директорія локалізацій
├── Animations.yml # глобальні налаштування анімацій
├── Cases.yml # сховище створених кейсів (локацій)
├── Config.yml # головний конфігураційний файл
└── database.db # сховище ключів та історії відкриттів кейсів
```

<details>
<summary>Config.yml</summary>

```yml
config:
  version: 25
  type: config

DonateCase:
  #Do I need to check for plugin updates?
  UpdateChecker: true
  #MySQL Settings
  MySql:
    Enabled: false
    Host: 'localhost'
    Port: 3306
    DataBase: 'nameDataBase'
    User: 'root'
    Password: 'password'
  # en_US, es_ES, ru_RU, ua_UA
  Languages: en_US
  HologramDriver: DecentHolograms # CMI, DecentHolograms, HolographicDisplays or FancyHolograms
  LevelGroup: false # Don't enable if you use "parent add" in LuckPerms
  LevelGroups:
    legend: 4
    deluxe: 3
    vipplus: 2
    vip: 1
    default: 0
  DateFormat: "dd.MM HH:mm:ss"
  AddonsHelp: true # Show help list for addons commands?
  UsePackets: false # 1.18+ for using packets, you need to install packetevents plugin
  # Caching for getting number of keys, case opens and history data
  # Used only if MySQL enabled
  # Actually used in placeholders (GUI and PlaceholderAPI)
  Caching: 20 # in ticks
  # Set spawn-protection to 0 in server.properties
  DisableSpawnProtection: true
  # If true, checks whether the player with the nickname exists on the server.
  CheckPlayerName: true
```
</details>

<details>
<summary>case.yml</summary>

```yml
config:
  version: 13
  type: old_case
case:
  Animation: WHEEL #SHAPE, FIREWORK, RAINLY, WHEEL, RANDOM, POP see: https://wiki.jodexindustries.xyz/en/docs/2.0.0/DonateCase/animations
  #  AnimationSettings:
  #    Type: FULL # or RANDOM
  #    ItemSlot: HEAD # HEAD, HAND, OFF_HAND, FEET, LEGS, CHEST
  #    SmallArmorStand: true
  #    ItemsCount: 6 # only for RANDOM type
  #    CircleSpeed: 0.5
  #    CircleRadius: 1.5
  #    LiftingAlongX: 0
  #    LiftingAlongY: 0
  #    LiftingAlongZ: 0
  #    Flame:
  #      Enabled: true
  #      Particle: FLAME
  #    Scroll:
  #      Time: 100
  #      Sound: UI_BUTTON_CLICK
  #      Volume: 10
  #      Pitch: 1
  #    Facing: west # for POP animation

  Hologram: # see: https://wiki.jodexindustries.xyz/en/docs/2.0.0/DonateCase/holograms
    # Toggle on and off the holograms for the crates.
    Toggle: true
    # The height of the hologram above the crate.
    Height: 1.5
    # The distance the hologram can be seen. Only works with CMI and DecentHolograms
    Range: 8
    # The message that will be displayed.
    Message:
      - '&6DonateCase'

  ## FancyHolograms
  #    type: TEXT
  #    visibility_distance: -1
  #    visibility: ALL
  #    persistent: true
  #    scale_x: 1.5
  #    scale_y: 1.5
  #    scale_z: 1.5
  #    shadow_radius: 1.0
  #    shadow_strength: 1.0
  #    text:
  #      - "Test"
  #    text_shadow: false
  #    see_through: false
  #    text_alignment: center
  #    update_text_interval: -1

  OpenType: GUI # or BLOCK

  NoKeyActions:
    - "[message] &cYou don't have keys for this case. You can buy them here >>> &6JodexIndustries.xyz"
    - "[sound] ENTITY_ENDERMAN_TELEPORT"

  HistoryDataSize: 10 # 0 if you want to disable history data

  CooldownBeforeAnimation: 0 # in tick

  LevelGroups: # delete all of this section, if you want to use default LevelGroups from Config.yml
    ultra: 6
    legend: 5
    deluxe: 4
    premium: 3
    vipplus: 2
    vip: 1
    default: 0

  DisplayName: "&c&lDonate-&a&lCase" # Name for placeholders
  Gui: # see more about items configuring -> https://wiki.jodexindustries.xyz/en/docs/2.0.0/DonateCase/items-settings
    Title: "&c&lDonate-&a&lCase"
    Size: 45
    UpdateRate: 20 # in ticks, set -1 to disable updating
    Items:
      "1":
        Material:
          ID: WHITE_STAINED_GLASS_PANE # see: https://wiki.jodexindustries.xyz/en/docs/2.0.0/DonateCase/materials
          DisplayName: "&cJodexIndustries.xyz"
          Enchanted: false
          Lore:
            - ""
        Slots: # or Slots: 0-10 (range)
          - 0
          - 8
        Type: DEFAULT
      Open:
        Material:
          ID: TRIPWIRE_HOOK # see: https://wiki.jodexindustries.xyz/en/docs/2.0.0/DonateCase/materials
          DisplayName: "&bOpen Case"
          Enchanted: false
          Lore:
            - '&6The case can be bought on the website: &cJodexIndustries.xyz'
            - ''
            - '&7Keys: &e%keys%'
            - ''
            - '&6Drops:'
            - '&7[&eVIP&7] - &b&n30%'
            - '&7[&bVIP&6+&7] - &b&n25%'
            - '&7[&3Premium&7] - &b&n20%'
            - '&7[&5Deluxe&7] - &b&n15%'
            - '&7[&dLegend&7] - &b&n10%'
            - '&7[&cUltra&7] - &b&n5%'
            - ''
        Slots: # or Slots: 0-10 (range)
          - 22
        Type: OPEN # or you can use OPEN_<anotherCaseName> for opening another case
  Items:
    Vip:
      Group: vip
      Chance: 30
      Material:
        ID: YELLOW_WOOL # see: https://wiki.jodexindustries.xyz/en/docs/2.0.0/DonateCase/materials
        DisplayName: '&7[&eVIP&7]'
        Enchanted: false
      Index: 0
      GiveType: ONE # or RANDOM
      Actions: # GiveType: ONE
        - '[command] lp user %player% parent set %group%'
        - '[title] &aCongratulations!;&5you won %groupdisplayname%'
        - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
      AlternativeActions: # GiveType: any, it doesn't matter; is performed if the group is lower in rank than the player's group in LevelGroups
        - "[message] &cI'm sorry %player%, but you have group a stronger group than you won:("
      RandomActions: # GiveType: RANDOM
        first:
          Chance: 50
          DisplayName: "something" # displayname for historydata displaying
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
        second:
          Chance: 50
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
    VipPlus:
      Group: vipplus
      Chance: 25
      Material:
        ID: LIGHT_BLUE_WOOL # see: https://wiki.jodexindustries.xyz/en/docs/2.0.0/DonateCase/materials
        DisplayName: '&7[&bVIP&6+&7]'
        Enchanted: false
      Index: 1
      GiveType: ONE # or RANDOM
      Actions: # GiveType: ONE
        - '[command] lp user %player% parent set %group%'
        - '[title] &aCongratulations!;&5you won %groupdisplayname%'
        - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
      AlternativeActions: # GiveType: any, it doesn't matter; is performed if the group is lower in rank than the player's group in LevelGroups
        - "[message] &cI'm sorry %player%, but you have group a stronger group than you won:("
      RandomActions: # GiveType: RANDOM
        first:
          Chance: 50
          DisplayName: "something" # displayname for historydata displaying
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
        second:
          Chance: 50
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
    Premium:
      Group: premium
      Chance: 20
      Material:
        ID: CYAN_WOOL
        DisplayName: '&7[&3Premium&7]'
      Index: 2
      GiveType: ONE
      Actions:
        - '[command] lp user %player% parent set %group%'
        - '[title] &aCongratulations!;&5you won %groupdisplayname%'
        - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from
        &5Ultra-Case.'
      AlternativeActions: # GiveType: any, it doesn't matter; is performed if the group is lower in rank than the player's group in LevelGroups
        - "[message] &cI'm sorry %player%, but you have group a stronger group than you won:("
      RandomActions: # GiveType: RANDOM
        first:
          Chance: 50
          DisplayName: "something" # displayname for historydata displaying
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
        second:
          Chance: 50
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
    Deluxe:
      Group: deluxe
      Chance: 15
      Material:
        ID: PURPLE_WOOL # see: https://wiki.jodexindustries.xyz/en/docs/2.0.0/DonateCase/materials
        DisplayName: '&7[&5Deluxe&7]'
        Enchanted: false
      Index: 3
      GiveType: ONE # or RANDOM
      Actions: # GiveType: ONE
        - '[command] lp user %player% parent set %group%'
        - '[title] &aCongratulations!;&5you won %groupdisplayname%'
        - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
      AlternativeActions: # GiveType: any, it doesn't matter; is performed if the group is lower in rank than the player's group in LevelGroups
        - "[message] &cI'm sorry %player%, but you have group a stronger group than you won:("
      RandomActions: # GiveType: RANDOM
        first:
          Chance: 50
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
        second:
          Chance: 50
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
    Legend:
      Group: legend
      Chance: 10
      Material:
        ID: PINK_WOOL # see: https://wiki.jodexindustries.xyz/en/docs/2.0.0/DonateCase/materials
        DisplayName: '&7[&dLegend&7]'
        Enchanted: false
      Index: 4
      GiveType: ONE # or RANDOM
      Actions: # GiveType: ONE
        - '[command] lp user %player% parent set %group%'
        - '[title] &aCongratulations!;&5you won %groupdisplayname%'
        - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
      AlternativeActions: # GiveType: any, it doesn't matter; is performed if the group is lower in rank than the player's group in LevelGroups
        - "[message] &cI'm sorry %player%, but you have group a stronger group than you won:("
      RandomActions: # GiveType: RANDOM
        first:
          Chance: 50
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
        second:
          Chance: 50
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
    Ultra:
      Group: ultra
      Chance: 5
      Material:
        ID: RED_WOOL
        DisplayName: '&7[&cUltra&7]'
        Enchanted: true
      Index: 5
      GiveType: ONE
      Actions:
        - '[command] lp user %player% parent set %group%'
        - '[command] say lp user %player% parent set %group%'
        - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from
        &5Ultra-Case.'
      AlternativeActions: # GiveType: any, it doesn't matter; is performed if the group is lower in rank than the player's group in LevelGroups
        - "[message] &cI'm sorry %player%, but you have group a stronger group than you won:("
      RandomActions: # GiveType: RANDOM
        first:
          Chance: 50
          DisplayName: "something" # displayname for historydata displaying
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
        second:
          Chance: 50
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won a donate %groupdisplayname% &6from &5Ultra-Case.'
```
</details>

<details>
<summary>Animations.yml</summary>

```yml
config: # Please do not touch this section
  version: 15
  type: animations

SHAPE:
  ItemSlot: HEAD # HEAD, HAND, OFF_HAND, FEET, LEGS, CHEST
  SmallArmorStand: true
  Firework: true
  #  Pose:
  #    Head:
  #      x: 0
  #      y: 0
  #      z: 0
  #    Body:
  #      x: 0
  #      y: 0
  #      z: 0
  #    RightArm:
  #      x: 0
  #      y: 0
  #      z: 0
  #    LeftArm:
  #      x: 0
  #      y: 0
  #      z: 0
  #    RightLeg:
  #      x: 0
  #      y: 0
  #      z: 0
  #    LeftLeg:
  #      x: 0
  #      y: 0
  #      z: 0
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

RAINLY:
  ItemSlot: HEAD # HEAD, HAND, OFF_HAND, FEET, LEGS, CHEST
  SmallArmorStand: true
  Scroll:
    Sound: ENTITY_EXPERIENCE_ORB_PICKUP
    Volume: 1
    Pitch: 1
  End:
    Sound: ENTITY_GENERIC_EXPLODE
    Volume: 1
    Pitch: 1
  FallingParticle: FALLING_WATER # you can use all particles, full list: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html
  # FALLING_WATER
  # FALLING_LAVA
  # FALLING_DUST
  # FALLING_HONEY
  # FALLING_NECTAR
  # FALLING_OBSIDIAN_TEAR

FIREWORK:
  ItemSlot: HEAD # HEAD, HAND, OFF_HAND, FEET, LEGS, CHEST
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

WHEEL:
  Type: FULL # or RANDOM
  ItemSlot: HEAD # HEAD, HAND, OFF_HAND, FEET, LEGS, CHEST
  SmallArmorStand: true
  ItemsCount: 6 # only for RANDOM type
  Shuffle: true # only for FULL type
  CircleRadius: 2
  StartPosition:
    x: 0.5
    y: 1
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

RANDOM:
  SHAPE: 15 # Chance
  RAINLY: 15
  FIREWORK: 15
  WHEEL: 15
  POP: 15
  SELECT: 15

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

SELECT:
  Facing: EAST
  Timeout: 600 # in ticks
#  Period: 0
#  ItemSlot: HEAD
```
</details>