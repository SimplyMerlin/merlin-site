<script lang="ts">
  import { videos as defaultVideos, type Video } from "../data/videos";
  import { activeVideo as activeVideoStore } from "../stores/activeVideo";

  interface Props {
    videos?: Video[];
  }

  let { videos = defaultVideos }: Props = $props();

  interface YTPlayer {
    seekTo(seconds: number, allowSeekAhead: boolean): void;
    playVideo(): void;
    pauseVideo(): void;
    loadVideoById(id: string): void;
    destroy(): void;
  }

  let activeIndex = $state(0);
  let player = $state<YTPlayer | null>(null);
  let playerReady = $state(false);
  let playerContainerId = "yt-player-" + Math.random().toString(36).slice(2, 9);

  let currentVideo = $derived(videos[activeIndex]);

  function handleGoTo(index: number) {
    activeVideoStore.set({
      youtubeId: videos[index].youtubeId,
      source: "showcase",
    });
    activeIndex = index;
  }

  function seekTo(seconds: number | undefined) {
    if (player && playerReady && seconds !== undefined) {
      player.seekTo(seconds, true);
      player.playVideo();
    }
  }

  // Load new video when activeIndex changes
  $effect(() => {
    const vid = videos[activeIndex];
    if (player && playerReady && vid) {
      player.loadVideoById(vid.youtubeId);
      player.playVideo();
    }
  });

  // Mount YouTube IFrame API on component init
  $effect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    // Define callback before loading script
    const onReady = () => {
      const w = window as any;
      player = new w.YT.Player(playerContainerId, {
        videoId: videos[activeIndex].youtubeId,
        playerVars: {
          autoplay: 0,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: () => {
            playerReady = true;
          },
          onStateChange: (event: any) => {
            const w = window as any;
            if (event.data === w.YT.PlayerState.PLAYING) {
              activeVideoStore.set({
                youtubeId: videos[activeIndex].youtubeId,
                source: "showcase",
              });
            } else if (
              event.data === w.YT.PlayerState.PAUSED ||
              event.data === w.YT.PlayerState.ENDED
            ) {
              activeVideoStore.set(null);
            }
          },
        },
      });
    };

    const w = window as any;

    if (w.YT && w.YT.Player) {
      onReady();
    } else {
      // Store previous callback if any
      const prev = w.onYouTubeIframeAPIReady;
      w.onYouTubeIframeAPIReady = () => {
        if (prev) prev();
        onReady();
      };

      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
    }

    return () => {
      if (player && player.destroy) {
        player.destroy();
      }
    };
  });

  // Subscribe to activeVideoStore - pause when another video plays
  $effect(() => {
    const unsubscribe = activeVideoStore.subscribe(
      (active: { youtubeId: string; source: string } | null) => {
        // Pause if: there's an active video AND it's from a different source
        if (active && active.source !== "showcase" && player && playerReady) {
          player.pauseVideo();
        }
      },
    );
    return unsubscribe;
  });

  function goNext() {
    activeIndex = (activeIndex + 1) % videos.length;
    activeVideoStore.set({
      youtubeId: videos[activeIndex].youtubeId,
      source: "showcase",
    });
  }

  function goPrev() {
    activeIndex = (activeIndex - 1 + videos.length) % videos.length;
    activeVideoStore.set({
      youtubeId: videos[activeIndex].youtubeId,
      source: "showcase",
    });
  }
</script>

<div class="flex flex-col gap-6 my-8">
  <div
    class={`grid grid-cols-1 items-center gap-8 ${
      currentVideo.short ? "md:grid-cols-[3fr_1fr]" : "md:grid-cols-2"
    }`}
  >
    <div
      class="flex flex-col justify-between h-full rounded-xl bg-orange-100 px-5 py-4 gap-8"
    >
      <div class="flex flex-col gap-4 text-lg">
        {#each currentVideo.highlights as highlight, i (activeIndex + "-" + i)}
          <div class="flex">
            {#if highlight.timecode}
              <div
                class="flex items-center text-stone-700 hover:text-stone-900 transition-colors"
              >
                <button
                  onclick={() => seekTo(highlight.seconds)}
                  class="underline decoration-stone-900/30 cursor-pointer"
                  >{highlight.timecode}</button
                >
              </div>
              <div class="mx-3 w-px bg-stone-900/10"></div>
            {/if}
            <p class="text-stone-800">{highlight.description}</p>
          </div>
        {/each}
      </div>
      <a
        class="underline decoration-stone-900/30 text-stone-700 hover:text-stone-900 transition-colors"
        href={currentVideo.playlistLink}
        target="_blank"
        rel="noopener noreferrer">{currentVideo.seeMoreText}</a
      >
    </div>

    <div
      class={`w-full overflow-hidden rounded-xl bg-stone-200 ${
        currentVideo.short ? "aspect-9/16" : "aspect-video"
      }`}
    >
      <div id={playerContainerId} class="h-full w-full"></div>
    </div>
  </div>

  <div class="flex items-center justify-center gap-4">
    <button
      onclick={goPrev}
      class="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900/5 text-stone-600 transition-all hover:bg-stone-900/10 hover:text-stone-900 active:scale-95"
      aria-label="Previous video"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>

    <div class="flex items-center gap-2">
      {#each videos as _, i}
        <button
          onclick={() => handleGoTo(i)}
          class="h-2.5 w-2.5 rounded-full transition-all duration-300 {i ===
          activeIndex
            ? 'bg-stone-800 scale-110'
            : 'bg-stone-900/20 hover:bg-stone-900/40'}"
          aria-label="Go to video {i + 1}"
        ></button>
      {/each}
    </div>

    <button
      onclick={goNext}
      class="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900/5 text-stone-600 transition-all hover:bg-stone-900/10 hover:text-stone-900 active:scale-95"
      aria-label="Next video"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  </div>
</div>
