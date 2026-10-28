---
id: dc-event-manager
title: DCEventManager
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaBox
---

# DCEventManager Wiki

This addon allows you to manage DonateCase events\
With its help you can perform certain actions, such as sending messages and executing commands from the console.\
**How does it work?**\
The addon listens to all events registered in DonateCase.
Events are received using reflection, which means that when DonateCase is updated, new events will be automatically loaded into DCEventManager without the need to update the addon

## Configurations

```yaml
├── config.yml # main configuration file
├── events.yml # event listener configuration
└── placeholders.yml # placeholders for events
```

## Example events.yml

```yml
events:
  AnimationStartEvent: # event class name
    executors: # action executors
      - name: test # executor name
        actions: # list of actions
          - "[broadcast] &cAnimation started %casetype% %player%!"
  AnimationEndEvent:
    executors:
      - name: test
        actions:
          - "[broadcast] &cAnimation ended %player%!"
```

**A list of all available events [here](https://github.com/Jodexx/DonateCase/tree/main/api/src/main/java/com/jodexindustries/donatecase/api/event)**

## Actions

> - [All DonateCase actions](../items-settings#дії)
> - DCEventManager actions
>
> > - Method call
> >
> > ```yaml
> > - "[invoke] cancelled(true)" # cancels the event
> > ```

## Placeholders

DCEventManager has its own placeholder system, which allows you to use **ALL** methods provided by events.

:::info
Placeholders are generated automatically after the first launch of DCEventManager, but not all information can be used
:::

### Example of placeholders

```yaml
events:
  JoinEvent: # event class name
    placeholders:
      - name: player # placeholder name
        replace: "%player%" # the text that will be replaced with the value returned from the method
        method: player#getName # the method for returning information
  CaseInteractEvent:
    placeholders:
      - name: cancelled
        replace: "%cancelled%"
        method: cancelled
      - name: player
        replace: "%player%"
        method: player#getName
```

If you are not familiar with programming, this may look a little confusing because of the `method` parameter.
But don't worry, it's not hard!\
This parameter is used to determine the place from which the value for `replace` will be taken.

Let's look at the JavaDocs of the [CaseInteractEvent](https://github.com/Jodexx/DonateCase/tree/main/api/src/main/java/com/jodexindustries/donatecase/api/event/player/CaseInteractEvent.java) class\
![jd.png](../../assets/jd.png)

Here we see that the class has several interesting methods, such as: `caseInfo`, `player`, and `action`.\
I think you have already guessed that these methods are used to get the `replace` values, but what is `#`?\
This is a symbol for separating methods. For example, we call the player method, which returns a [DCPlayer](https://github.com/Jodexx/DonateCase/tree/main/api/src/main/java/com/jodexindustries/donatecase/api/platform/DCPlayer.java) object, which has the following methods:
![dcplayer.png](../../assets/dcplayer.png)

It's worth looking at what this class is. It seems to represent a player interface, we can extract useful information from it. Let's find out the player's name, the [getName](https://github.com/Jodexx/DonateCase/tree/main/api/src/main/java/com/jodexindustries/donatecase/api/platform/DCPlayer.java#L9) method is just right for us!\
Now our target `method` looks like this: `player#getName`

:::info
DCEventManager will automatically look for the `player` method to find the [DCPlayer](https://github.com/Jodexx/DonateCase/tree/main/api/src/main/java/com/jodexindustries/donatecase/api/platform/DCPlayer.java) object, which will be used in **DonateCase** actions and **PlaceholderAPI** placeholders.\
If there is no such method in the event's placeholders, then the actions (and PlaceholderAPI) that use the player will not work.
:::

## Execution conditions

To execute specific actions, you can set conditions by which this or that action will be executed.

- `type` - the comparison type
- `placeholder` - the placeholder to check (can use PlaceholderAPI)
- `input` - the expected result (from `placeholder`)

### Condition types

- `EQUALS` - Equal to `=`
- `NOT_EQUAL_TO` - Not equal to `!=`
- `LESS_THAN` - Less than `<`
- `LESS_THAN_OR_EQUAL_TO` - Less than or equal to `<=`
- `GREATER_THAN` - Greater than `>`
- `GREATER_THAN_OR_EQUAL_TO` - Greater than or equal to `>=`

### Multiple conditions

You can also set multiple conditions for executing certain actions.

**Example**\
The actions will only be executed if the case type equals `case` and the player opening the case has the nickname `_Jodex__`

```yaml
AnimationStartEvent:
  executors:
    - name: test
      actions:
        - "[broadcast] &cAnimation started %casetype% %player%!"
    conditions: # conditions for executing the actions
      - type: EQUALS # comparison type
        placeholder: "%casetype%" # the placeholder to check
        input: "case" # the expected result
      - type: EQUALS
        placeholder: "%player%"
        input: "_Jodex__"
```

## Interaction with other addons

DCEventManager allows the registration of any events related to DonateCase.
Let's look at the main configuration file `config.yml`

```yaml
debug: false
packages:
  #  - "com.jodexindustries.donatecase.api.event" # actually used only for FriendCase addon
  - "com.jodexindustries.donatecase.api.event.addon"
  - "com.jodexindustries.donatecase.api.event.animation"
  - "com.jodexindustries.donatecase.api.event.player"
  - "com.jodexindustries.donatecase.api.event.plugin"
```

Here a list of packages is set, which DCEventManager checks for DonateCase events (DCEvent).
For example, the [FriendCase](https://www.spigotmc.org/resources/friendcase-donatecase-addon.114293/) addon has the [CaseGiftEvent](https://github.com/Jodexx/DonateCase/blob/main/addons/FriendCase/src/main/java/com/jodexindustries/donatecase/api/event/CaseGiftEvent.java) event, which is contained in the `com.jodexindustries.donatecase.api.event` package. If we add it to the list, then DCEventManager will scan and generate some placeholders in `placeholders.yml` automatically.
