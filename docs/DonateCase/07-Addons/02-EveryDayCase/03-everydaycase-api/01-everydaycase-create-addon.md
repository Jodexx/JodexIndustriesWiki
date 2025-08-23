import CodeBlock from '@theme/CodeBlock';

---
id: everydaycase-api-implementing
title: Створення аддону
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
icon: FaCog
---

# Створення аддону

Цей варіант пропонує створення спеціалізованих аддонів для DCEveryDayCase

Приклад аддону: [Github](https://github.com/1wairesd/DCEveryDayCaseTestAddon)

## Головний клас
Головний клас це початкова точка вашого аддону.
Ось приклад, як повинен виглядати ваш початковий клас:
<CodeBlock language="java" title="src/main/java/com/jodexindustries/testaddon/TestAddon.java">
import com.wairesd.dceverydaycase.api.DCEDCAPI;
import org.bukkit.plugin.java.JavaPlugin;

public class TestAddon extends JavaPlugin {

    private final DCEDCAPI api = DCEDCAPI.getInstance();

    @Override
    public void onEnable() {
        getLogger().info("TestAddon is enabled!");
    }

    @Override
    public void onDisable() {
        getLogger().info("TestAddon is disabled!");
    }
}
</CodeBlock>
