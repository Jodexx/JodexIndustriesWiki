---
id: items-settings
title: Items settings
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_position: 3
---


## Item settings in GUI
`DisplayName` - Display name of the item <br />
`Enchanted` - There are 2 types of data: `true` or  `false`, if `true` - the item will be enchanted <br />
`Lore` - Description of the item <br/>
`ModelData (optional)` - Custom model data

### Example description
```yaml
Lore:
  - "&cVery cool description"
  - "&dYes, it's colorful"
  - "&bPlaceholders? %keys%"
```

### Placeholders
- `%keys%` - The number of keys held by the player
- `%case%` - The name of the case

`Slots` - A list or range of slots where this item will be located

### Example list
```yaml
Slots:
  - 0
  - 8
  - 9-16 # can be a range
```
`Material` - The material of the item, all types are described [here](./materials.md) <br />
`Rgb (optional)` - Ability to change the color of leather items <br />

### Example RGB
```yaml
Rgb: 123, 50, 15
```
`Type` - The type of the item, there are 3 types:
- `DEFAULT` - a regular item for the graphical interface
- `OPEN` - an item that opens a case (or you can use OPEN_\<another_case_name\> to open a different case)
- `HISTORY` - an item representing the history of recent case openings<br/>

### Example of an OPEN type for a different case
```yml
Type: OPEN_donate
# donate - another case name
```

### Item settings with type HISTORY
Placeholders:
- `%player%` - The name of the player
- `%group%` - The name of the group
- `%groupdisplayname%` - The displayed name of the group
- `%time%` - The opening time of the case
- `%action%` - The name of the RandomAction
- `%actiondisplayname%` - The displayed name of the RandomAction
- `%casename%` - The name of the case
- `%casedisplayname%` - The displayed name of the case
- `%casetitle%` - The case title

Type: HISTORY-[index]-[case]     (_index - the index of recent case openings, range 0-9; case - the type of the case, optional_)
```yaml
History0:
  DisplayName: "&c%player%"
  Enchanted: false
  Lore:
    - '&6Group &f- &c%group%'
    - '&6Time &f- &c%time%'
    - ''
  Slots:
    - 36
  # Material: TRIPWIRE_HOOK - The material will already be player_head; can be DEFAULT if you want to use the material of the winning item
  Type: HISTORY-0-case # 0 - index of recent case openings, range 0-9; case - the type of case, if empty, the default case will be used (optional)
```
You can use the `HISTORY-[index]-GLOBAL` option if you want to display sorted openings from all cases.

#### No history found
For this type of item, advanced settings are available. If the index of recent openings is not yet filled (the case has not been opened yet), you can set an entirely different item instead of history in the `HistoryNotFound` section:
```yaml
History0:
  DisplayName: "&c%player%"
  Enchanted: false
  Lore:
    - '&6Group &f- &c%group%'
    - '&6Time &f- &c%time%'
    - ''
  Slots:
    - 36
  # Material: TRIPWIRE_HOOK - The material will already be player_head, if commented, can be DEFAULT if you want to use the material of the winning item
  Type: HISTORY-0-case # 0 - index of recent openings, range 0-9; case - the type of case, if empty, the default case will be used (optional)
  HistoryNotFound: # Section for unfilled indices
    DisplayName: "&cNot found"
    Material: BARRIER
    #Enchanted: false
    #Lore:
    # - "&cSorry..."
    #ModelData: 1234
    #Rgb: 255,255,255
```

## Prize item settings
`Group` - The group awarded to the player as a prize<br />
`Chance` - The chance at which this prize is awarded<br />
`GiveType` - The type of reward. If `ONE`, the player is given only one prize (Actions). If `RANDOM`, a prize is selected with different chances (RandomActions).
### Placeholders
- `%player%` - The name of the player
- `%group%` - The name of the group
- `%groupdisplayname%` - The displayed name of the group
- `%casename%` - The name of the case
- `%casedisplayname%` - The displayed name of the case
- `%casetitle%` - The case title

### Actions
- `[command]` - Console command
- `[broadcast]` - Message for all players
- `[message]` - Message for the player who opened the case
- `[title]` - Title for the player who opened the case (use `;` to separate the title and subtitle)
```yml
- '[title] (title);(subtitle)'
```
- `[sound]` - Sound played for the player who opened the case
```yml
- '[sound] (sound) (volume) (pitch)'
```

#### GiveType: `ONE`
```yaml
      Actions: # GiveType: ONE
        - '[command] lp user %player% parent set %group%'
        - '[title] &aCongratulations!;&5you won %groupdisplayname%'
        - '[broadcast] &a>&c>&e> &c%player% &6won the group %groupdisplayname% &6from &5Ultra-Case.'
        - '[sound] ENTITY_ENDERMAN_DEATH 2 1'
```

#### GiveType: `RANDOM`
```yaml
      RandomActions: # GiveType: RANDOM
        first:
          Chance: 50 # Chance between random actions
          DisplayName: "something" # Displayed name for the opening history
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won the group %groupdisplayname% &6from &5Ultra-Case.'
        second:
          Chance: 50 # Chance between random actions
          Actions:
            - '[command] say something'
            - '[broadcast] &a>&c>&e> &c%player% &6won the group %groupdisplayname% &6from &5Ultra-Case.'
```

#### Alternative actions
Executed when the player's group is higher than the one they won (available for both GiveType types)
```yaml
      AlternativeActions: # GiveType: any, doesn't matter; executed if the group is lower ranked than the player's group in LevelGroups
        - "[message] &cSorry %player%, but you have a group higher than the one you won:("
```
#### Action delay
`[cooldown:<delay in seconds>]`
With this option, you can perform actions with a delay.
```yaml
      Actions: # This command will be executed 1 second after opening the case
        - '[cooldown:1][command] lp user %player% parent set %group%'
```