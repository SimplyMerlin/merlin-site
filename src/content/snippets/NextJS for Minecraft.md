---
title: NextJS for Minecraft
datePublished: 2025-02-10
description: The NextJS DX is so good, we should bring it to Bukkit devs.
---

Originally this file was called "Vercel for Minecraft", but as far as I can see Pyro is making strives towards this. So lets limit our scope to DX.

Servers should be immutable. This rule can be broken if the developer sees fit, but at its core this project should make immutable servers as easy as possible. This means a target towards minigame and highly custom servers, not so much just general SMPs. This project should make it as easy as possible to make next generation Minecraft servers like MCC Island.

Your network should exist in one repo. A monorepo. Every server is their own Gradle module. So SkyWars is one module, and BedWars is another module. There should be one generic Server which specifies certain server.properties rules and whatnot. Every Server can override as they see fit. Config files should be generated in the `build.gradle.kts`, or statically added in a override folder which may also contain other files (like worlds).

Here's an unpopular opinion: for minigame servers, the world files should live in the codebase. Ideally a project made with this would be able to go back to any old git commit and it would run perfectly like a time machine. The build server should just commit to the codebase with a GitHub bot. Maybe this project can supply the tooling for that. Maybe even offer a custom world format. Definitely some API to make world loading easier.

The gradle tooling should have a built in way to run the server with a gradle command, like run paper. It should also have a gradle command to build the server into a docker container.

There should be built in tooling to make working with a proxy as easy as possible, while not requiring the proxy while testing locally.

The database should not be something you have to worry about. I would almost argue that we abstract it out of existence. The API should make it as easy as possible to have a custom wrapper for the normal Bukkit player object, which automatically fetches from the database or cache. We shouldn't force users to use this, but we should make it as easy of an experience to use as possible while keeping it flexible.

If the developer is using our database abstraction, we should use a local database for testing, so either just storing it in json files or using SQLite. Again, running locally for testing should be as easy as possible.

Cross server messaging should be abstracted too. Just register your own packet (just a Kotlin data class) and you can start sending and receiving it to servers. It should be able to switch between bungee messaging and Redis or RabbitMQ. Most importantly, it should not break when testing locally.

The long term goal would be to take over the entire supply chain. Imagine an universe where anyone can deploy their entire minigame network just by linking their GitHub repo to a platform. It would scale automatically.

While this is made for massive minigame networks, it should also support smaller scope event servers, or even just servers with one instance.

When you push a new commit to the main branch, the servers should automatically update themselves. For servers with one instance (and with a proxy in front) this means making a new instance of the server and send people joining to the new one, and then give the players on the old one a few minutes to join the new one before kicking them. Not every server needs this though, for minigame servers you can just wait until the minigame ends to shut itself off (or shut it off every time a minigame ends?), and for event servers you can generally just restart it if nobody is online with maybe some extra code making sure the event is not live. The api should make all of these use cases easy.