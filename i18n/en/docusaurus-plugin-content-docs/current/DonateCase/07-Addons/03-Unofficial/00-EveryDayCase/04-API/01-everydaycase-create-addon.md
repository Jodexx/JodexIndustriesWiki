---
id: everydaycase-api-implementing
title: Creating an addon
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaCog
---

import CodeBlock from '@theme/CodeBlock';

# Creating an addon

This option offers the creation of specialized addons for DCEveryDayCase

Addon example: [Github](https://github.com/1wairesd/DCEveryDayCaseTestAddon)

## Main class
The main class is the entry point of your addon.
Here is an example of what your `DCEveryDayCaseTestAddon` class should look like:
<CodeBlock
        language="java"
        title="src/main/java/com/wairesd/testaddon/DCEveryDayCaseTestAddon.java"
>
{
`import com.wairesd.dceverydaycase.api.DCEDCAPI;
import org.bukkit.plugin.java.JavaPlugin;

public class DCEveryDayCaseTestAddon extends JavaPlugin {

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
`
}
</CodeBlock>
