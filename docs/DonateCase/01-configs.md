---
id: configurations
title: Конфігурації
sidebar_custom_props:
  icon: FaSlidersH
---

import Mermaid from '@theme/Mermaid';

<Mermaid value={
`graph LR

  A[plugins/DonateCase \nГоловна директорія плагіну]
  A --> B[addons \nДиректорія аддонів]
  A --> C[cases \nДиректорія конфігурацій кейсів]
  C --> C1[default \nДиректорія default кейсу]
  C1 --> C1a[menu \nДиректорія меню кейсу]
  C1a --> C1a1[default_menu.yml \nФайл налаштувань меню]
  C1 --> C1b[items.yml \nФайл налаштувань призів]
  C1 --> C1c[settings.yml \nФайл налаштувань кейсу]
  A --> D[lang \nДиректорія локалізацій]
  A --> E[Animations.yml \nГлобальні налаштування анімацій]
  A --> F[Cases.yml \nСховище створених кейсів]
  A --> G[Config.yml \nГоловний конфігураційний файл]
  A --> H[database.db \nСховище ключів та історії відкриттів кейсів]
  
`
}
/>