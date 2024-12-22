---
id: implementing-addon
title: Впровадження за допомогою аддону
sidebar_position: 3
---

# Провадження
## Приклад без зовнішнього плагіну
:::note
Для роботи обов'язково потрібно вибрати `spigot-api` модуль в якості залежності [встановлення](../../install.md)
:::
> src/main/java/com/jodexindustries/testaddon/TestAddon
```java
import com.jodexindustries.donatecase.api.addon.internal.InternalJavaAddonBukkit;

public class TestAddon extends InternalJavaAddonBukkit {

    @Override
    public void onLoad() {
        getLogger().info("TestAddon is loaded!")
    }

    @Override
    public void onEnable() {
        getLogger().info("TestAddon is enabled!");
    }

    @Override
    public void onDisable() {
        getLogger().info("TestAddon is disabled!");
    }
}
```

> src/main/resources/addon.yml
```yaml
name: TestAddon
main: com.jodexindustries.testaddon.TestAddon
version: 1.0
api: 2.0.0 # мінімальна версія api, яка потрібна для роботи аддона
```