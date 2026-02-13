<script>
  /** @type {{ videos: Array<{ youtubeId: string, highlights: Array<{ timecode?: string, seconds?: number, description: string }> }> }} */
  let {
    videos = [
      {
        youtubeId: "EJePwAgbHbk",
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
      {
        youtubeId: "EJePwAgbHbk",
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
    ],
  } = $props();

  let activeIndex = $state(0);
  let player = $state(null);
  let playerReady = $state(false);
  let playerContainerId = "yt-player-" + Math.random().toString(36).slice(2, 9);

  let activeVideo = $derived(videos[activeIndex]);

  function goNext() {
    activeIndex = (activeIndex + 1) % videos.length;
  }

  function goPrev() {
    activeIndex = (activeIndex - 1 + videos.length) % videos.length;
  }

  function goTo(index) {
    activeIndex = index;
  }

  function seekTo(seconds) {
    if (player && playerReady) {
      player.seekTo(seconds, true);
      player.playVideo();
    }
  }

  // Load new video when activeIndex changes
  $effect(() => {
    const vid = videos[activeIndex];
    if (player && playerReady && vid) {
      player.loadVideoById(vid.youtubeId);
    }
  });

  // Mount YouTube IFrame API on component init
  $effect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    // Define callback before loading script
    const onReady = () => {
      player = new window.YT.Player(playerContainerId, {
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
        },
      });
    };

    if (window.YT && window.YT.Player) {
      onReady();
    } else {
      // Store previous callback if any
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
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
</script>

<div class="flex flex-col gap-6 my-8">
  <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
    <div class="flex flex-col h-full gap-4 rounded-xl bg-orange-100 px-5 py-4">
      {#each activeVideo.highlights as highlight, i (activeIndex + "-" + i)}
        <div class="flex">
          {#if highlight.timecode}
            <div class="flex items-center text-stone-700 hover:text-stone-900">
              <button
                onclick={() => seekTo(highlight.seconds)}
                class="underline decoration-stone-900/30"
                >{highlight.timecode}</button
              >
            </div>
            <div class="mx-3 w-px bg-stone-900/10"></div>
          {/if}
          <p class="text-stone-800">{highlight.description}</p>
        </div>
      {/each}
    </div>

    <div class="aspect-video w-full overflow-hidden rounded-xl bg-stone-200">
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
          onclick={() => goTo(i)}
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
