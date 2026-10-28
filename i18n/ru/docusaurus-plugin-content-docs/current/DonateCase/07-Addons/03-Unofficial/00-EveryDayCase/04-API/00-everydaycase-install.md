---
id: everydaycase-api-install
title: Установка
sidebar_custom_props:
  icon: FaCog
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Установка

Модули DonateCase API:
- `api` — главный модуль, который содержит основные конструкции для взаимодействия с DCEveryDayCase.

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
