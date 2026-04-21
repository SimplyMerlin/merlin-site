export interface Highlight {
  timecode?: string;
  seconds?: number;
  description: string;
}

export interface Video {
  youtubeId: string;
  playlistLink: string;
  seeMoreText: string;
  highlights: Highlight[];
  short?: boolean;
}

export const videos: Video[] = [
  {
    youtubeId: "EJePwAgbHbk",
    playlistLink:
      "https://www.youtube.com/playlist?list=PLe_xsQA-kWyJ7enbSSUx-5uGOmvFT_apI",
    seeMoreText: "See all the videos I've edited for Legitimoose here",
    highlights: [
      {
        description:
          "While the script is written by Legitimoose, almost all the shots are recorded by me! Including diving into the code and rolling back to older versions.",
      },
      {
        timecode: "2:10",
        seconds: 130,
        description:
          "This video has some pretty cool motion graphics. I used After Effects expressions to create this accurate hex code converter. So I could move around a null object and it would show the hex code!",
      },
      {
        timecode: "3:04",
        seconds: 184,
        description:
          "More motion graphics! This time trying to explain some fairly complex numbers in a little more digestable way. Also with just a little bit of tactile sound design.",
      },
      {
        description:
          "This video has plenty of flashback shots. So I'm pretty decent at composition and know my way around creating b-roll in video games!",
      },
    ],
  },
  {
    youtubeId: "g1fXTFzFt-M",
    playlistLink:
      "https://www.youtube.com/playlist?list=PLe_xsQA-kWyJ7enbSSUx-5uGOmvFT_apI",
    seeMoreText: "See the 31 other videos I've edited for ParrotX2 here",
    highlights: [
      {
        description: "When working with Parrot I've edited about 32 videos, two videos a week, with this one being my favorite. So I have a lot of experience with quick turnarounds, so turning 3 hours of (unscripted) footage into a 20 minute video in about 3 days!",
      },
      {
        timecode: "0:05",
        seconds: 5,
        description:
          "That's me you see running around. I've written the scripts and recorded the replay shots for all these videos! Parrot once said that it was weird how similarly I wrote to how he spoke, which is quite the compliment LOL",
      },
      {
        timecode: "3:40",
        seconds: 220,
        description:
          "These videos are quite chill, so a lot of the effort went into pacing and music. I've gotten quite familiar with Epidemic Sounds, with the song here specifically being one of my favorites, and kinda turned into the sound of these videos.",
      },
    ],
  },
  {
    youtubeId: "M6VkZmIBYmQ",
    short: true,
    playlistLink:
      "https://www.youtube.com/playlist?list=PLe_xsQA-kWyJh17wXJOosdtcDPaqaYB2B",
    seeMoreText: "See the 11 other shorts I've made here",
    highlights: [
      {
        description:
          "One day I saw a tweet from theo saying that people are allowed to make shorts of his content. I ended up making about 12 shorts just for fun, with this one being my favorite.",
      },
      {
        description:
          "The main challenge of this experiment was seeing how quickly I could go from opening theo's channel to uploading the short. When I got into the flow I ended up going from clicking on a random video to uploading the short in just under one hour.",
      },
      {
        description:
          "One thing interesting about these shorts is I don't do automatic subtitles. I hate them! I feel like a video flows SO much better when the intonation of words match the subtitles. Sometimes jokes are even spoiled in the subtitles. I feel like I'm the only editor that cares about this but it matters a lot to me!!",
      },
    ],
  },
];
