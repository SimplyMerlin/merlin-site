import { writable } from "svelte/store";

export type VideoSource = "showcase" | "client";

interface ActiveVideo {
  youtubeId: string;
  source: VideoSource;
}

export const activeVideo = writable<ActiveVideo | null>(null);
