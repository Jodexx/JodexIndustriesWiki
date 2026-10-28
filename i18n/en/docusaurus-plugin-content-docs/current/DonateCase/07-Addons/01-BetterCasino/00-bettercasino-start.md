---
id: bettercasino-start
title: Getting started
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaFlagCheckered
---

import CodeBlock from '@theme/CodeBlock';

# BetterCasino

DCBetterCasino is a tool for creating unique and dynamic animations in a GUI for DonateCase. It lets you bring even your boldest ideas to life using flexible and convenient YAML syntax.

Key features:

- Flexibility: create animations that perfectly match your needs, whether simple changes or complex scenarios.
- Simplicity: the YAML syntax is intuitive even for beginners, making working with the addon fast and convenient.
- Control: you have full access to configuring every aspect of the animation, from moving items to creating interactive elements.

## How does it work?

Imagine creating an animation like writing a script:

1. You lay out the steps for each tick (a unit of time in the animation).
2. You define actions: moving objects, click interactions, property changes, and so on.
3. You get the result — a dynamic and beautiful animation that matches your requirements.

Below is a simple script that demonstrates how DCBetterCasino works:

At the start (tick 0), a DIAMOND item is added to slot 0.
After 20 ticks (1 second), this item is moved forward one slot.

```yaml
ticks:
  0: # The tick number at which the actions are executed
    actions: # List of actions
      - type: replace_item # Action: replace the item
        slot: 0 # Slot to replace
        material: DIAMOND # Item material
  20: # Actions that happen after 20 ticks
    actions:
      - type: move_item # Action: move the item
        from: 0 # From which slot
        to: 1 # To which slot
```

:::info
Currently the addon is a premium resource, so it is sold for 5$. To purchase, contact us on the [Discord server](https://discord.gg/2syNtcKcgR) or [Telegram](https://t.me/jodexindustries)
:::

## Installation

1. Get the addon file
2. Move it to the folder: `plugins/DonateCase/addons`
3. Restart the server or use the command: `/dc addon load DCBetterCasino-1.0.0.jar`

## First steps

#### Main addon configuration

<CodeBlock
language="yaml"
title="plugins/DonateCase/addons/BetterCasino/config.yml">
{`license: "" # your license
animation: "BETTER_CASINO" # the animation name that will be used in the case configuration
menus: # your menu configurations
    csgo: "csgo_dcbc.yml"
    wheel: "wheel_dcbc.yml"
`}
</CodeBlock>

:::info
Creating all animation configurations happens in the `plugins/DonateCase/addons/BetterCasino/menus` folder
:::

#### Assigning animations to cases

<CodeBlock
language="yaml"
title="plugins/DonateCase/cases/default/settings.yml">
{`
animation: BETTER_CASINO # or another animation name previously specified in the addon configuration
animation-settings:
    Menu: csgo # menu configuration name
`}
</CodeBlock>

:::tip
You can also assign the same menus for all case types in the `Animations.yml` file
:::
