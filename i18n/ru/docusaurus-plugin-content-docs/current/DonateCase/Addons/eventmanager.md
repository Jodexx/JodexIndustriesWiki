---
sidebar_position: 1
id: dc-event-manager
title: DCEventManager
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# DCEventManager Wiki
Этот аддон позволяет вам управлять ивентами DonateCase<br></br>
С его помощью вы можете выполнять определённые действия, такие как отправка сообщений и выполнение команд от имени консоли. <br></br>
**Как это работает?**<br></br>
Аддон прослушивает все события, зарегистрированные в DonateCase.
Получение событий происходит с использованием рефлексии, а это значит, что при обновлении DonateCase новые события будут автоматически загружаться в DCEventManager без необходимости обновлять аддон! <br></br>

## Пример config.yml
```yml
Debug: false
Package: "com.jodexindustries.donatecase.api.events" # не изменяйте это

Events:
  MyEvent:
    Event: AnimationStartEvent
    Actions:
      - "[command] say Анимация началась!"

  MyAnotherEvent:
    Event: AnimationEndEvent
    Actions:
      - "[broadcast] &dАнимация завершена!"
```

## События
> **Список всех доступных событий [здесь](https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot-api/2.0.2.1/raw/com/jodexindustries/donatecase/api/events/package-summary.html)**

## Действия
### [Все действия DonateCase](../items-settings#действия)
### Действия DCEventManager
#### Вызов метода
Пример
`- [invoke] setCancelled(true)`

## Поддержка конкретного кейса
Работает, только если в событии есть методы `getCaseType` или `getCaseData`
```yaml
Events:
  MyEvent:
    Event: AnimationStartEvent # ваше событие
    Case: case # здесь конкретный кейс
    Actions:
      - "[command] say Case opened!"
```

## Поддержка конкретного слота кейса
Работает только в случае, если в событии есть метод `getSlot`
```yaml
Events:
  MyEvent:
    Event: CaseGuiClickEvent # ваше событие
    Case: case # здесь конкретный кейс
    Slot: 1 # здесь конкретный слот
    Actions:
      - "[command] say Gui clicked!"
```

## Плейсхолдеры
У DCEventManager есть своя собственная система плейсхолдеров, которая позволяет вам использовать **ВСЕ** методы, предоставляемые событиями.<br></br>
**Эта система работает с использованием рефлексии!**<br></br>

Пример плейсхолдеров:
```yaml
Events:
  AddonDisableEvent: # название класса события
    addon: # ID плейсхолдера
      placeholder: "%addon%" # заменённый плейсхолдер
      method: "getAddon#getName" # метод класса
    reason: # ID плейсхолдера
      placeholder: "%reason%" # заменённый плейсхолдер
      method: "getReason" # метод класса
    caused: # ID плейсхолдера
      placeholder: "%caused%" # заменённый плейсхолдер
      method: "getCaused#getName" # метод класса
```

Если вы не разбираетесь в программировании, это может выглядеть немного запутанно из-за параметра `method`.
Но не переживайте, это просто! <br></br>
Этот параметр используется для определения места, откуда будет взято значение плейсхолдера. <br></br>

Давайте посмотрим на JavaDocs [AddonDisableEvent](https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot-api/2.0.2.1/raw/com/jodexindustries/donatecase/api/events/AddonDisableEvent.html#method-summary) класса<br></br>
![jd.png](../../assets/jd.png)

Здесь мы видим, что класс [AddonDisableEvent](https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/spigot-api/2.0.2.1/raw/com/jodexindustries/donatecase/api/addon/internal/InternalAddon.html#method-summary) имеет несколько интересных методов, таких как: `getAddon`, `getCaused` и `getReason`. <br></br>
Думаю, вы уже догадались, что эти методы используются для получения значений плейсхолдеров, но что такое `#`? <br></br>
Это символ для разделения методов. Например, мы вызываем метод getAddon, который является объектом [InternalAddon](https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/api/2.0.2.1/raw/com/jodexindustries/donatecase/api/addon/internal/InternalAddon.html), имеющим такие методы:
![addon.png](../../assets/addon.png)
Конечно, будет немного странно просто отображать информацию о некоторых [InternalAddon](https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/api/2.0.2.1/raw/com/jodexindustries/donatecase/api/addon/internal/InternalAddon.html) без дополнительных инструкций, но стоит посмотреть, что это за класс. Похоже, он представляет интерфейс внутреннего аддона, и мы можем извлечь из него полезную информацию! Давайте узнаем имя этого аддона, похоже, метод [getName](https://repo.jodexindustries.xyz/javadoc/releases/com/jodexindustries/donatecase/api/2.0.2.1/raw/com/jodexindustries/donatecase/api/addon/Addon.html#getName()) как раз нам подойдёт! <br></br>
Теперь наш метод выглядит так: `getAddon#getName`<br></br>

Если у вас есть дополнительные вопросы, пожалуйста, свяжитесь с нами на [Discord сервере](https://discord.gg/2syNtcKcgR)!

