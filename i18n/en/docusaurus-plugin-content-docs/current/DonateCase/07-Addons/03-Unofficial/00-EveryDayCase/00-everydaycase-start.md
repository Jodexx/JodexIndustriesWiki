---
id: everydaycase-start
title: Getting started
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaFlagCheckered
---

# DCEveryDayCase Wiki

DCEveryDayCase is an addon for DonateCase that automatically gives players daily cases with a configurable cooldown.

:::warning
Unofficial addons are in no way related to the JodexIndustries studio, may not be updated, and do not guarantee functionality on new versions of DonateCase.
:::

## Core functionality

### Automatic case issuance
- **Daily issuance** — players receive cases automatically after a set time interval
- **Configurable cooldown** — you can set any interval (default is 24 hours)
- **Notifications** — players receive a message about the case being ready
- **Database** — all data is stored in the DonateCase database

### Commands
| Command | Description | Permission |
|---------|-------------|------------|
| `/dc edc` | Toggle daily case notifications | `dc.everydaycase.granted` |


## Events and integration

### Automatic check
The addon automatically checks all online players and:
- Gives out cases when the time comes
- Sends notifications to players
- Saves data to the database

### Notifications
- Players receive a message when the case is ready
- Notifications can be enabled/disabled with the `/dc edc` command
- Configurable messages in the language files

### Database
- All claim times are stored in the DonateCase DB
- Asynchronous saving for performance
- Automatic data recovery on restart

---
## API

**GitHub:** [API](https://github.com/1wairesd/DCEveryDayCase)

**WiKi:** [API](./API/everydaycase-api-install)

## Authorship

**Author:** [@1wairesd](https://github.com/1wairesd)  

---


