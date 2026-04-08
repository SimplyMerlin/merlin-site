<script lang="ts">
  import { fade } from "svelte/transition";

  const skills = [
    {
      id: "replay",
      title: "Replay Mod",
      description:
        "I've spent countless hours mastering Minecraft Replay Mod. From cinematic camera movements to seamless transitions, I know every trick in the book to make your gameplay footage look like a Hollywood production. Whether it's dramatic fly-throughs or dynamic action shots, I bring your Minecraft moments to life.",
    },
    {
      id: "speed",
      title: "Speed",
      turnaround:
        "I pride myself on fast turnaround times without sacrificing quality. I can deliver a polished 10-minute video in as little as 2-3 days, depending on complexity. When you're working on trending topics or time-sensitive content, I'm the editor who can keep up with your pace.",
    },
    {
      id: "pacing",
      title: "Pacing & Timing",
      description:
        "Comedic timing is an art, and I've honed it to perfection. I understand exactly when to cut for maximum impact, how to build tension before a punchline, and the rhythm that keeps viewers engaged from start to finish. Your content won't just be edited—it'll be paced for maximum entertainment value.",
    },
    {
      id: "audio",
      title: "Audio",
      description:
        "Great video needs great audio. I handle everything from EQ and compression to noise reduction and audio leveling. My toolkit includes industry-standard VSTs for that crisp, professional sound. Whether it's balancing dialogue, enhancing SFX, or creating immersive soundscapes, your audio will be on point.",
    },
  ];

  let activeTab = $state(0);
</script>

<div class="my-24 flex flex-col items-center gap-8">
  <div class="flex flex-wrap justify-center gap-2">
    {#each skills as skill, i}
      <button
        onclick={() => (activeTab = i)}
        class="rounded-full px-6 py-2.5 text-lg transition-all duration-300 {activeTab ===
        i
          ? 'bg-stone-900 text-orange-50'
          : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}"
      >
        {skill.title}
      </button>
    {/each}
  </div>

  <div class="max-w-3xl text-center">
    {#key activeTab}
      <div
        in:fade={{ duration: 200 }}
        class="text-xl leading-relaxed text-stone-700"
      >
        <p>{skills[activeTab].description || skills[activeTab].turnaround}</p>
      </div>
    {/key}
  </div>
</div>
