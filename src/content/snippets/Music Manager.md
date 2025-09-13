---
title: Music Manager for video editors
datePublished: 2025-11-13
description: Managing music for video editors is literally just mp3 files in a file explorer. It could be so much more.
---

A software that combines music management, backlinks, and youtubers.

Video editing has a big problem with music. Especially video game music. Usually you end up with a million mp3 files from different sources, some higher quality, some less so. There is so much potential to improve here. 

Most examples will be with video game music.

# Extra metadata
Generally, video game music is categorised just by the video game name. But there is so much more that music can be categorised into. Is the song happy or sad? Is the song fast or slow? Or even leitmotifs[^1]? Being able to sort by songs that share a melody would be sick.

# YouTube integration
Creating a place where youtubers can show which songs they use would be great. Just a simple timestamp to song name would do the trick. You would be able to search for a certain video and see which songs were used in there. Either the creator of the video or someone else would have to put that data into the database. You could also search for a certain creator and then get all the songs they've ever used. This would also be a great way to get users on the platform in the first place.

# Advanced search
A search engine for music would be crazy. Imagine being able to filter for only Nintendo songs used by TommyInnit, or all upbeat songs from the Animal Crossing series. How about all Mario Kart songs that have a real orchestra?

# Download manager
Most video game music is on https://downloads.khinsider.com/. Having a nice wrapper on top of this that downloads music with the click of a button would be great. Obviously you can add your own songs as well.

# Technical details
Ideally, this entire project would be written in something like [Tauri](https://tauri.app/) or [Electron](https://www.electronjs.org/). So the entire YouTube integration can be hosted on a site and the rest of the app (such as the download feature) can be on your pc. There would have to be some kind of global database where you can get info and 'tags' of songs. As well as the ability to add your own songs and change the tags for yourself only.


[^1]: A musical phrase/melody that is present in multiple songs. https://en.wikipedia.org/wiki/Leitmotif
