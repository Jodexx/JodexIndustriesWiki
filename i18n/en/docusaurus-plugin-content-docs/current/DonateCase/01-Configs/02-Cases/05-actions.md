---
id: actions
title: Actions
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaTasks
---

Most often, actions are used to issue prizes. They are set in the format: `[action name] (parameters)`

## List of actions

### `command`
> Execute a console command
```yaml
- '[command] say Hello, %player%!'
```

### `message`
> Send a message to the player
```yaml
- '[message] &cHello, %player%!'
```

### `broadcast`
> Send a message to all players on the server
```yaml
- '[broadcast] &6Hello server!'
```

### `title`
> Send a title to the player\
> The `;` sign separates the title and subtitle
```yaml
- '[title] (&cTitle);(&6SubTitle)'
```

### `sound`
> Play a sound for the player\
> Parameters: `sound` - the name of the sound, `volume` - loudness, `pitch` - tone
```yaml
- '[sound] (sound) (volume) (pitch)'
```
```yaml
- '[sound] ENTITY_ENDERMAN_TELEPORT 10 1'
```

## Action delay
Action delay is done using the additional parameter `[cooldown:<delay in seconds>]`.

This command will be executed with a delay of 1 second
```yaml
- '[cooldown:1][command] lp user %player% parent set %group%'
```
