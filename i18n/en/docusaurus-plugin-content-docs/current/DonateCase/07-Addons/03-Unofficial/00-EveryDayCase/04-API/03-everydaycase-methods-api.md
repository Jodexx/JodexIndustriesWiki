---
id: everydaycase-api-methods
title: API methods
toc_min_heading_level: 2
toc_max_heading_level: 5
sidebar_custom_props:
  icon: FaCog
---

# API methods

## `getNextClaimTime(String playerName)`
Returns the time (in milliseconds) when the player will be able to claim the next case.

**Parameters:**
- `playerName` — the player's name.

**Returns:** `long` — the time of the next claim.

---

## `getClaimCooldown()`
Returns the default cooldown between case openings.

**Returns:** `long` — the cooldown duration in milliseconds.

---

## `getCaseName()`
Returns the name of the case used in this API session.

**Returns:** `String` — the case name.

---

## `getKeysAmount()`
Returns the number of keys available for opening the case.

**Returns:** `int` — the number of keys.

---

## `isPending(String playerName)`
Checks whether the player has a pending case claim.

**Parameters:**
- `playerName` — the player's name.

**Returns:** `boolean` — `true` if the case is pending a claim, `false` otherwise.
