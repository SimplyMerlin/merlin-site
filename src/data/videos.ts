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
}

export const videos: Video[] = [
    {
        youtubeId: "EJePwAgbHbk",
        playlistLink:
            "https://www.youtube.com/playlist?list=PLe_xsQA-kWyJ7enbSSUx-5uGOmvFT_apI",
        seeMoreText: "See all the video's I've edited for Legitimoose here",
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
        youtubeId: "EJePwAgbHbk",
        playlistLink:
            "https://www.youtube.com/playlist?list=PLe_xsQA-kWyJ7enbSSUx-5uGOmvFT_apI",
        seeMoreText: "See the 31 other video's I've edited for ParrotX2 here",
        highlights: [
            {
                description: "BALLS BALLS BALLS.",
            },
            {
                timecode: "0:53",
                seconds: 53,
                description:
                    "This video has some pretty cool motion graphics. I used After Effects expressions to create this accurate hex code converter.",
            },
            {
                timecode: "2:69",
                seconds: 169,
                description:
                    "More motion graphics! This time trying to explain some fairly complex numbers in a little more digestable way. Also with just a little bit of tactile sound design.",
            },
        ],
    },
    {
        youtubeId: "EJePwAgbHbk",
        playlistLink:
            "https://www.youtube.com/playlist?list=PLe_xsQA-kWyJ7enbSSUx-5uGOmvFT_apI",
        seeMoreText: "See the 11 other shorts I've made here",
        highlights: [
            {
                description:
                    "While the script is written by Legitimoose, almost all the shots are recorded by me! Including diving into the code and rolling back to older versions.",
            },
            {
                timecode: "0:53",
                seconds: 53,
                description:
                    "This video has some pretty cool motion graphics. I used After Effects expressions to create this accurate hex code converter.",
            },
            {
                timecode: "2:69",
                seconds: 169,
                description:
                    "More motion graphics! This time trying to explain some fairly complex numbers in a little more digestable way. Also with just a little bit of tactile sound design.",
            },
        ],
    },
];
