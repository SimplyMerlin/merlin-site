export interface YTPlayer {
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  playVideo(): void;
  pauseVideo(): void;
  loadVideoById(id: string): void;
  destroy(): void;
}

const API_SCRIPT_SRC = "https://www.youtube.com/iframe_api";

export function ensureYouTubeAPI(): Promise<void> {
  const w = window as any;

  if (w.YT && w.YT.Player) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const prev = w.onYouTubeIframeAPIReady;
    w.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };

    if (!document.querySelector(`script[src="${API_SCRIPT_SRC}"]`)) {
      const tag = document.createElement("script");
      tag.src = API_SCRIPT_SRC;
      document.head.appendChild(tag);
    }
  });
}
