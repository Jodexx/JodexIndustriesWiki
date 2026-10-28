---
id: everydaycase-api-install
title: Installation
sidebar_custom_props:
  icon: FaCog
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

DonateCase API modules:
- `api` — the main module, which contains the core constructs for interacting with DCEveryDayCase.

## Maven
```xml title="Maven"
<repository>
    <id>jitpack.io</id>
    <url>https://jitpack.io</url>
</repository>

<dependency>
    <groupId>com.wairesd.dceverydaycase</groupId>
    <artifactId>api</artifactId>
    <version>2.2</version>
    <scope>provided</scope>
</dependency>
```

## Gradle
```gradle title="Gradle"
maven {
    name = "jitpack.io"
    url = "https://jitpack.io"
}

dependencies {
    compileOnly("com.wairesd.dceverydaycase:api:2.2")
}
