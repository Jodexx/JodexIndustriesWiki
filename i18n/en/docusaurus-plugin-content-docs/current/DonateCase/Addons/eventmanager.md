---
sidebar_position: 1
id: dc-event-manager
title: DCEventManager
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# DCEventManager Wiki

This addon allows you to manage DonateCase events.<br></br>
With it, you can perform certain actions, such as sending messages and executing commands on behalf of the console. <br></br>
**How does it work?**<br></br>
The addon listens for all events registered in DonateCase.
&#x20;Event retrieval occurs through reflection, which means that when DonateCase is updated, new events will automatically load into DCEventManager without the need to update the addon! <br></br>

## Example config.yml

```yml
Debug: false
Package: "com.jodexindustries.donatecase.api.events" # don't change this

Events:
  MyEvent:
    Event: AnimationStartEvent
    Actions:
      - "[command] say Анімація почалась!"

  MyAnotherEvent:
    Event: AnimationEndEvent
    Actions:
      - "[broadcast] &dАнімація завершена!"
```

## Events

> **List of all available events [here](https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot-api/2.0.2.1/raw/com/jodexindustries/donatecase/api/events/package-summary.html)**

## Actions

### [All DonateCase actions](../items-settings#actions)

### DCEventManager actions

#### Method call

Example
`- [invoke] setCancelled(true)`

## Support for a specific case

Works only if the event has methods `getCaseType` or `getCaseData`

```yaml
Events:
  MyEvent:
    Event: AnimationStartEvent # your event
    Case: case # here specific case
    Actions:
      - "[command] say Case opened!"
```

## Support for a specific case slot

Works only if the event has a method `getSlot`

```yaml
Events:
  MyEvent:
    Event: CaseGuiClickEvent # your event
    Case: case # here specific case
    Slot: 1 # here specific slot
    Actions:
      - "[command] say Gui clicked!"
```

## Placeholders

DCEventManager has its own placeholder system that allows you to use **ALL** methods provided by events.<br></br>
**This system works using Reflection!**<br></br>

Example placeholders:

```yaml
Events:
  AddonDisableEvent: # name of event class
    addon: # placeholder id
      placeholder: "%addon%" # placeholder for replacement
      method: "getAddon#getName" # method of the class
    reason: # placeholder id
      placeholder: "%reason%" # placeholder for replacement
      method: "getReason" # method of the class
    caused: # placeholder id
      placeholder: "%caused%" # placeholder for replacement
      method: "getCaused#getName" # method of the class
```

If you're not familiar with programming, this might seem a bit confusing because of the `method` parameter.  
But don't worry, it's easy! <br></br>  
This parameter is used to determine where the placeholder value will be taken from. <br></br>
Let's take a look at the JavaDocs for the [AddonDisableEvent](https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot-api/2.0.2.1/raw/com/jodexindustries/donatecase/api/events/AddonDisableEvent.html#method-summary) class<br></br>  
![jd.png](../../assets/jd.png)

Here we see that the [AddonDisableEvent](https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot-api/2.0.2.1/raw/com/jodexindustries/donatecase/api/addon/internal/InternalAddon.html#method-summary) class has several interesting methods, such as `getAddon`, `getCaused`, and `getReason`. <br></br>  
I think you've already guessed that these methods are used to get the placeholder values, but what does the `#` mean? <br></br>  
It's a symbol used to separate methods. For example, we are calling the `getAddon` method, which is an object of the [InternalAddon](https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot-api/2.0.2.1/raw/com/jodexindustries/donatecase/api/addon/internal/InternalAddon.html) class, which has methods like:
![addon.png](../../assets/addon.png)  
Of course, it might seem a little odd to display information about certain [InternalAddon](https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot-api/2.0.2.1/raw/com/jodexindustries/donatecase/api/addon/internal/InternalAddon.html) objects without further instructions, but it's worth checking out what this class is. It seems to represent the interface of an internal addon, and we can extract useful information from it! Let's find out the name of this addon; the [getName](https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/api/2.0.2.1/raw/com/jodexindustries/donatecase/api/addon/Addon.html#getName()) method should work for us! <br></br>  
Now our method looks like this: `getAddon#getName`<br></br>  

If you have any additional questions, please contact us on the [Discord server](https://discord.gg/2syNtcKcgR)!