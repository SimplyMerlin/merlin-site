---
title: Premiere path
datePublished: 2026-01-02
description: I made a website, how cool.
---

I'm not sure about you guys, but I love having my old premiere projects, footage and all. I want to open these bad boys up in 5 years and see what decisions I made back then! But throughout my efforts of making sure everything is in one place, I've identified a massive issue.

You see, when moving around projects across drive, you never know if there are still some files left behind. It happens! You just downloaded a sound effect and its still in your downloads folder. Premiere has a tool for this, but what it does is it throws all the media into one big folder. Me on the other hand, I don't want to live without my file structure, and I can't have Premiere destroy this!

Premiere makes it surprisingly hard to just see where your files are. So I made a super simple tool at https://prem.simplymerlin.com/. Just throw in your .prproj file, and it shows you every file location of every piece of media in your project. That's it. Fully local, fully free. I also have a filter bar, so you can filter the root of your project (i.e. `E:\Videos\SimplyMerlin\01 Intro into Game Dev`), and then it will only show files that are NOT in that root folder, so you can quickly check what's left behind on your pc!

behind the scenes, a Premiere Pro project file is just a gzipped xml file. So I use a little library called [Pako](https://www.npmjs.com/package/pako) to unzip the file, and then the built in [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) to read the xml file, which works surprisingly fine! For the rest it's just a svelte project set to prerender mode so it's fully local, with bun! [The source code is here btw](https://github.com/SimplyMerlin/premiere-path).

Happy 2026 and happy hoarding old projects!
