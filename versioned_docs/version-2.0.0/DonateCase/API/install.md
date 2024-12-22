---
id: install
title: Встановлення
sidebar_position: 2
authors:
  name: Denys Tkachuk
  title: Developer of DonateCase
  url: https://github.com/Jodexx
  image_url: https://github.com/Jodexx.png
  socials:
    github: Jodexx
---
# Встановлення 

Модулі DonateCase API:
- `api` - головний модуль, який містить в собі основні конструкції для взаємодії з DonateCase. Немає залежностей.
- `spigot-api` - модуль для платформи `spigot`, містить в собі конструкції для взаємодії з плагіном. Є залежність від Spigot 1.16.5.

Maven
```xml
<repository>
    <id>JodexIndustries</id>
    <name>JodexIndustries Repo</name>
    <url>https://repo.jodexindustries.xyz/releases</url>
</repository>
```
```xml
<dependency>
  <groupId>com.jodexindustries.donatecase</groupId>
  <artifactId>модуль</artifactId>
  <version>2.0.0</version>
  <scope>provided</scope>
</dependency>
```

Gradle
```gradle
maven {
    name "JodexIndustries"
    url "https://repo.jodexindustries.xyz/releases"
}
```
```gradle
compileOnly("com.jodexindustries.donatecase:модуль:2.0.0")
```