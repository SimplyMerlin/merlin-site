---
title: Videograms
datePublished: 2024-10-03
description: Videograms have one task, make the unused space in the timeline more useful.
---

## Audiograms

Audiograms, also called 'the cool waveform thingy', are an abstraction of sound. All they do is show the amplitude of audio over time. That is their only task. You cannot easily infer if the sound is high or low pitched. You cannot easily infer if it's low or high quality. But even while they don't show much, they are quite useful.

Right above the audio tracks in the timeline, there are video tracks. For most video editors, these tracks do not show any data. Premiere has the possibility to show a frame from the video, but most editors do not use that feature as it is generally not useful enough. Here's where videograms come in.

## Videograms

Videograms try to plot a graph based on visual data. A simple version of this would be how different a new frame is compared to the previous frame. This would make the useless space on the timeline useful. Please note, I came up with this term, and I have no idea if someone thought of this before.

![A screenshot of a Premiere Pro timeline.](/attachments/timeline.png)
Here's an example of a timeline for [a video I edited](https://www.youtube.com/watch?v=GCKZCM6ZvsM). As you can see, a lot of data for the audio part, very few data for the video part. Wasted potential.

## Use case

A simple scenario would be for a editor that edits gaming videos. In games you often open your inventory, which pops up a menu in the middle of the screen. A common issue is when a menu pops up a few frames before a cut to a different clip. This causes the screen to cut to something very different twice in a few frames which is disruptive. Videograms would show a peak in the graph when the menu gets opened, making it easy to see where to place your L-cut without having to look at the preview.

Another common scenario is for real life editors. For a lot of handheld footage, the camera will quickly pan down before the videographer ends the recording. That quick pan will show up in the graph, making it easy for the editor to see when the usable footage ends.

## Implementation

Implementation would generally be just the delta between the old and the new frame, but could also be done on multiple variables such as brightness. Maybe even something more advanced.

Sadly I am not product owner of Premiere Pro (although, Adobe, I'm down for the task!) so for now we will have to live with the thought of what could be. But maybe one day, we might finally use the timeline more effectively.
