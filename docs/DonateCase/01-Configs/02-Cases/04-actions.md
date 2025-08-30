---
id: actions
title: Дії
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaTasks
---

Найчастіше дії використовуються для видачі призів. Задаються в форматі: `[назва дії] (параметри)`

## Список дій

### `command`
> Виконати консольну команду
```yaml
- '[command] say Hello, %player%!'
```

### `message`
> Відправити повідомлення для гравця
```yaml
- '[message] &cHello, %player%!'
```

### `broadcast`
> Відправити повідомлення для всіх гравців на сервері
```yaml
- '[broadcast] &6Hello server!'
```

### `title`
> Відправити заголовок для гравця\
> Знак `;` розділяє заголовок та підзаголовок
```yaml
- '[title] (&cTitle);(&6SubTitle)'
```

### `sound`
> Програти звук гравцю\
> Параметри: `sound` - назва звуку, `volume` - звучність, `pitch` - тон
```yaml
- '[sound] (sound) (volume) (pitch)'
```
```yaml
- '[sound] ENTITY_ENDERMAN_TELEPORT 10 1'
```

## Затримка дій
Затримка дій відбувається за допомогою додаткового параметру `[cooldown:<затримка в секундах>]`.

Ця команда буде виконана з затримкою в 1 секунду
```yaml
- '[cooldown:1][command] lp user %player% parent set %group%'
```