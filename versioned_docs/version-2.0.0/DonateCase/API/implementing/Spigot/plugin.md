---
id: implementing-plugin
title: Впровадження за допомогою плагіну
sidebar_position: 4
---

## Приклад із зовнішнім плагіном
> TestDonateCase клас
```java
import org.bukkit.plugin.java.JavaPlugin;

public final class TestDonateCase extends JavaPlugin {

    @Override
    public void onEnable() {
      int playerKeys = Case.getKeys("case", "_Jodex__");
      getLogger().info(String.valueOf(playerKeys));
    }
}

```
plugin.yml
```yaml
depend:
  - DonateCase
```

