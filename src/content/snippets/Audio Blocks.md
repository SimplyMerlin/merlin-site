---
title: Audio Blocks
datePublished: 2024-10-02
description: Audio blocks take the video game audio granularity to video editing.
---
Video Games have had incredibly advanced tools to sculpt audio for years. With tools like [FMOD](https://www.fmod.com/) and [WWise](https://www.audiokinetic.com/en/wwise/overview/) the possibilities are endless. On the other hand, Video Editors are still dragging mp3's into their timeline and manipulating them manually.

## Features
In an ideal world, Audio Blocks would be its own format. it would have a plethora of features, which simply would be more metadata. This would include bpm, stems, loop information, section information, and events.

### BPM
Placing cuts in time with the music is a big part of video editing, yet to get it perfect takes a lot of time. This is unfortunate as videos generally flow a lot better when they are synced, even if it is just a simple cut for comedic timing. Having the BPM data in the file format might not be game changing, but it would be incredibly convenient.

### Stems
A stem is just an audio source. An example of stems in a song would be the piano, the guitar, and the drums. Stems are generally audio files that play at the same time and form a song together. Sites like Epidemic Sound already have the ability to download stems, but having to use up multiple tracks in the timeline for just one song is inconvenient in its current state.

### Loops
One of the most common tasks when using music in video editing is simply looping a section, but it takes surprisingly much work to do this well. Creating the cut, copying the music, lining them up and adding a crossfade. Just for it to sound mediocre without a lot of care. With a file format that has looping data inside of the file, this would be as easy as just extending the file.

### Sections
Every piece of music has sections, this could be a intro or a chorus. A great example that comes to mind is the [hotel cleanup section](https://www.youtube.com/watch?v=0etenwnI1wo) in Celeste, the same few bars keep repeating until you clean up a part of the hotel, then it smoothly transitions into the next section which then starts looping. This can create more tension and makes the new part feel more unique while still having the same vibes.

### Events
Events are what brings all of this together. They could play extra sound effects such as a drum cymbal or they could change the volume of certain stems. An example would be when the event gets triggered, wait until the end of the musical bar, then play a crash cymbal and switch to the next section. While stems and sections and loops could be manually key framed, events would do this automatically with a bit of logic.

## Implementation
Sadly, i cannot change premiere pro. But what i can do is think about what this would look like. How I would implement this is simply a renamed TAR file with multiple audio files inside, and a JSON file where all the associated metadata would be stored.

The audio files would be editable in a separate software. This software would be similar to something like FMOD, but specifically made for editing, not real time playback.