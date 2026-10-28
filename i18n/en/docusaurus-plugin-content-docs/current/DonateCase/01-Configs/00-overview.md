---
id: overview
title: Configurations
sidebar_custom_props:
  icon: FaSlidersH
---

import Mermaid from '@theme/Mermaid';

<Mermaid value={
`graph LR
  A[plugins/DonateCase \nMain plugin directory]
  A --> B[addons \nAddons directory]
  A --> C[cases \nCase configurations directory]
  C --> C1[default \ndefault case directory]
  C1 --> C1a[menu \nCase menu directory]
  C1a --> C1a1[default_menu.yml \nMenu settings file]
  C1 --> C1b[items.yml \nPrize settings file]
  C1 --> C1c[settings.yml \nCase settings file]
  A --> D[lang \nLocalizations directory]
  A --> E[Animations.yml \nGlobal animation settings]
  A --> F[Cases.yml \nStorage of created cases]
  A --> G[Config.yml \nMain configuration file]
  A --> H[database.db \nStorage of keys and case opening history]
  `
}
/>
