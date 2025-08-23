---
id: everydaycase-case-config
title: Конфігурація кейса
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaBox
---

## Приклад меню використання кейса

<details>
<summary>plugins/DonateCase/cases/&lt;case&gt;/menu/&lt;menu&gt;.yml</summary>

```yaml
config:
  version: 10
  type: case_menu
id: everydaycase_menu
title: 'DCEveryDayCase'
size: 45
update-rate: 20
items:
    '1':
        material:
            id: WHITE_STAINED_GLASS_PANE
            display-name: '&cJodexIndustries.xyz'
            enchanted: false
            lore:
            - ''
            rgb: []
        slots:
        - 0
        - 8
        type: DEFAULT
    open:
        material:
            id: CHEST
            display-name: '&aЩоденний кейс'
            enchanted: false
            lore:
            - ''
            - '&7Безкоштовний кейс з різноманітними нагородами.'
            - '%dceverydaycase_remaining_time%'
            - ''
            - §#FF6BA0Не знаєш, що отримаєш?
            - §#CF6BFFПеревір свою удачу — твоя нагорода чекає на тебе!
            rgb: []
        slots:
        - 4
        type: OPEN
```