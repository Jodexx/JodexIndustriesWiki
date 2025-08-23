---
id: everydaycase-api-example-addon
title: Приклад аддона
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaCog
---

import CodeBlock from '@theme/CodeBlock';

# Приклад аддона

Цей приклад показує, як за допомогою API `DCEDCAPI` отримати основні дані про кейс і гравця:  
час наступного отримання, кулдаун, інформацію про кейс та статус гравця.

<CodeBlock
language="java"
title="src/main/java/com/wairesd/testaddon/DCEveryDayCaseTestAddon.java"
>
{
`package com.wairesd.testaddon;

import com.wairesd.dceverydaycase.api.DCEDCAPI;
import org.bukkit.plugin.java.JavaPlugin;

public final class DCEveryDayCaseTestAddon extends JavaPlugin {
private final DCEDCAPI api = DCEDCAPI.getInstance();

    @Override
    public void onEnable() {
        String playerName = "playerName";

        long nextClaim = api.getNextClaimTime(playerName);
        long cooldown = api.getClaimCooldown();
        String caseName = api.getCaseName();
        int keysAmount = api.getKeysAmount();
        boolean isPending = api.isPending(playerName);

        getLogger().info(playerName + " next claim: " + nextClaim);
        getLogger().info("Claim cooldown: " + cooldown);
        getLogger().info("Case name: " + caseName);
        getLogger().info("Keys amount: " + keysAmount);
        getLogger().info(playerName + " is pending: " + isPending);
    }

    @Override
    public void onDisable() {
        getLogger().info("Plugin disabled");
    }
}`
</CodeBlock>
