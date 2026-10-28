---
id: overview
title: Конфигурации
sidebar_custom_props:
  icon: FaSlidersH
---

import Mermaid from '@theme/Mermaid';

<Mermaid value={
`graph LR
  A[plugins/DonateCase \nГлавная директория плагина]
  A --> B[addons \nДиректория аддонов]
  A --> C[cases \nДиректория конфигураций кейсов]
  C --> C1[default \nДиректория default кейса]
  C1 --> C1a[menu \nДиректория меню кейса]
  C1a --> C1a1[default_menu.yml \nФайл настроек меню]
  C1 --> C1b[items.yml \nФайл настроек призов]
  C1 --> C1c[settings.yml \nФайл настроек кейса]
  A --> D[lang \nДиректория локализаций]
  A --> E[Animations.yml \nГлобальные настройки анимаций]
  A --> F[Cases.yml \nХранилище созданных кейсов]
  A --> G[Config.yml \nГлавный конфигурационный файл]
  A --> H[database.db \nХранилище ключей и истории открытий кейсов]
  `
}
/>
