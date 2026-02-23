<script lang="ts">
  import { activeVideo } from "../stores/activeVideo";
  import { tick } from "svelte";

  let {
    youtubeId,
    description,
    shorts = false,
  }: { youtubeId: string; description: string; shorts?: boolean } = $props();

  let loaded = $state(false);

  async function playVideo() {
    activeVideo.set({ youtubeId, source: "client" });
    await tick();
    loaded = true;
  }

  $effect(() => {
    const unsubscribe = activeVideo.subscribe(
      (active: { youtubeId: string; source: string } | null) => {
        // Reset when: showcase video is playing OR a different client video is playing
        if (
          active &&
          (active.source === "showcase" || active.youtubeId !== youtubeId) &&
          loaded
        ) {
          loaded = false;
        }
      },
    );
    return unsubscribe;
  });
</script>

<div class="relative cursor-pointer">
  {#if !loaded}
    <button
      type="button"
      onclick={playVideo}
      class="relative w-full overflow-hidden rounded-lg"
      aria-label="Play {description}"
    >
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
        alt={description}
        class={`${shorts ? "aspect-9/16" : "aspect-video"} w-full rounded-lg object-cover hover:opacity-75`}
        loading="lazy"
      />
    </button>
  {:else}
    <iframe
      class={`${shorts ? "aspect-9/16" : "aspect-video"} w-full rounded-lg`}
      src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
      title={description}
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
  {/if}
</div>
