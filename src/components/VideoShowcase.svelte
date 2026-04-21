<script lang="ts">
  import { untrack } from "svelte";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import { videos as defaultVideos, type Video } from "../data/videos";
  import { activeVideo as activeVideoStore } from "../stores/activeVideo";
  import { ensureYouTubeAPI, type YTPlayer } from "../utils/youtubePlayer";

  interface Props {
    videos?: Video[];
  }

  let { videos = defaultVideos }: Props = $props();

  let activeIndex = $state(0);
  let player = $state<YTPlayer | null>(null);
  let playerReady = $state(false);

  const containerId = "yt-player-showcase";
  const currentVideo = $derived(videos[activeIndex]);

  function navigateTo(index: number) {
    activeIndex = index;
    activeVideoStore.set({
      youtubeId: videos[index].youtubeId,
      source: "showcase",
    });
  }

  function goNext() {
    navigateTo((activeIndex + 1) % videos.length);
  }

  function goPrev() {
    navigateTo((activeIndex - 1 + videos.length) % videos.length);
  }

  function seekTo(seconds: number | undefined) {
    if (player && playerReady && seconds !== undefined) {
      player.seekTo(seconds, true);
      player.playVideo();
    }
  }

  $effect(() => {
    let destroyed = false;

    (async () => {
      await ensureYouTubeAPI();
      if (destroyed) return;

      const w = window as any;
      player = new w.YT.Player(containerId, {
        videoId: untrack(() => videos[activeIndex].youtubeId),
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
                youtubeId: untrack(() => videos[activeIndex].youtubeId),
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
    })();

    return () => {
      destroyed = true;
      player?.destroy();
    };
  });

  $effect(() => {
    const vid = currentVideo;
    if (player && playerReady) {
      player.loadVideoById(vid.youtubeId);
      player.playVideo();
    }
  });

  $effect(() => {
    return activeVideoStore.subscribe((active) => {
      if (active && active.source !== "showcase" && player && playerReady) {
        player.pauseVideo();
      }
    });
  });
</script>

<div class="flex flex-col gap-6 my-8">
  <div
    class="grid grid-cols-1 items-center gap-8 {currentVideo.short
      ? 'md:grid-cols-[4fr_1fr]'
      : 'md:grid-cols-2'}"
  >
    <div
      class="flex flex-col justify-between h-full rounded-xl bg-orange-100 px-5 py-4 gap-8"
    >
      <div class="flex flex-col gap-4 text-lg">
        {#each currentVideo.highlights as highlight, i (`${activeIndex}-${i}`)}
          <div class="flex">
            {#if highlight.timecode}
              <div
                class="flex items-center text-stone-700 hover:text-stone-900 transition-colors"
              >
                <button
                  onclick={() => seekTo(highlight.seconds)}
                  class="underline decoration-stone-900/30 cursor-pointer"
                >
                  {highlight.timecode}
                </button>
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
        rel="noopener noreferrer"
      >
        {currentVideo.seeMoreText}
      </a>
    </div>

    <div
      class="w-full overflow-hidden rounded-xl bg-stone-200 {currentVideo.short
        ? 'aspect-9/16'
        : 'aspect-video'}"
    >
      <div id={containerId} class="h-full w-full"></div>
    </div>
  </div>

  <div class="flex items-center justify-center gap-4">
    <button
      onclick={goPrev}
      class="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900/5 text-stone-600 transition-all hover:bg-stone-900/10 hover:text-stone-900 active:scale-95"
      aria-label="Previous video"
    >
      <ChevronLeft size={18} />
    </button>

    <div class="flex items-center gap-2">
      {#each videos as _, i}
        <button
          onclick={() => navigateTo(i)}
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
      <ChevronRight size={18} />
    </button>
  </div>
</div>
