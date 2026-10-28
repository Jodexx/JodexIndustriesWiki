---
id: actions
title: Действия
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaTasks
---

Чаще всего действия используются для выдачи призов. Задаются в формате: `[название действия] (параметры)`

## Список действий

### `command`
> Выполнить консольную команду
```yaml
- '[command] say Hello, %player%!'
```

### `message`
> Отправить сообщение игроку
```yaml
- '[message] &cHello, %player%!'
```

### `broadcast`
> Отправить сообщение всем игрокам на сервере
```yaml
- '[broadcast] &6Hello server!'
```

### `title`
> Отправить заголовок игроку\
> Знак `;` разделяет заголовок и подзаголовок
```yaml
- '[title] (&cTitle);(&6SubTitle)'
```

### `sound`
> Проиграть звук игроку\
> Параметры: `sound` - название звука, `volume` - громкость, `pitch` - тон
```yaml
- '[sound] (sound) (volume) (pitch)'
```
```yaml
- '[sound] ENTITY_ENDERMAN_TELEPORT 10 1'
```

## Задержка действий
Задержка действий происходит с помощью дополнительного параметра `[cooldown:<задержка в секундах>]`.

Эта команда будет выполнена с задержкой в 1 секунду
```yaml
- '[cooldown:1][command] lp user %player% parent set %group%'
```
