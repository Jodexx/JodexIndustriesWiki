---
id: everydaycase-additional-information
title: Additional information
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaBox
---

## Compatibility

### Requirements
- **DonateCase** — a required dependency
- **Java 8+** — the minimum Java version
- **Spigot, Paper, Purpur** — compatible servers

### Integration with other addons
DCEveryDayCase provides an API for integration with other plugins:
- Getting information about the claim time
- Checking player status
- Managing timers

### Integration examples
- **PlaceholderAPI** — placeholders for time
- **DiscordBM** — commands for a Discord bot

## Troubleshooting

### Common problems

#### The addon doesn't work
1. Check that DonateCase is installed and working
2. Make sure the `DCEveryDayCase` case exists in DonateCase
3. Check player permissions: `dc.everydaycase.granted`

#### Players don't receive cases
1. Check the `turn_off_daily_case_logic: false` setting
2. Make sure the cooldown is not too large
3. Check the logs for errors

#### Problems with notifications
1. Check the language files
2. Make sure players have enabled notifications: `/dc edc`
3. Check access permissions

### Debug mode
Enable `debug: true` in config.yml to get detailed logs:
```yaml
DCEveryDayCase:
  debug: true
```

### Logs
The addon outputs information to the console:
- Issuing keys to players
- Errors when working with the DB
- Debug information (in debug mode)

### Events
The addon uses DonateCase events for integration:
- `AnimationStartEvent` — the start of the animation
- `AnimationEndEvent` — the end of the animation
- `OpenCaseEvent` — the opening of the case

### Database
All data is stored in DonateCase tables:
- Next claim times
- Notification statuses
- Player settings
