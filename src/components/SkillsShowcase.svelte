<script lang="ts">
  import { fade } from "svelte/transition";

  const skills = [
    {
      id: "replay",
      title: "Replay Mod",
      subtitle: "Cinematic Minecraft",
      description:
        "From dramatic fly-throughs to dynamic action shots. I've mastered every angle and transition Replay Mod has to offer.",
      gradient: "from-green-500 to-emerald-700",
    },
    {
      id: "speed",
      title: "Turnaround Speed",
      subtitle: "Fast & Reliable",
      description:
        "10-minute videos in 2-3 days. When trends are fleeting, I'm the editor who delivers before the opportunity is gone.",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      id: "pacing",
      title: "Pacing & Timing",
      subtitle: "Comedic Precision",
      description:
        "I know exactly when to cut for maximum impact, how to build tension before the punchline, and the rhythm that hooks viewers.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: "audio",
      title: "Audio Engineering",
      subtitle: "VST & Leveling",
      description:
        "EQ, compression, noise reduction—your audio gets the same polish as your visuals. Crisp, balanced, professional.",
      gradient: "from-blue-500 to-cyan-600",
    },
  ];

  let activeIndex = $state(0);
</script>

<div class="my-24 flex flex-col items-center gap-10">
  <div class="flex flex-wrap justify-center gap-4">
    {#each skills as skill, i}
      <button
        onclick={() => (activeIndex = i)}
        class="relative overflow-hidden rounded-xl px-5 py-3 text-left transition-all duration-500 {activeIndex === i
          ? 'ring-2 ring-stone-900'
          : 'opacity-60 hover:opacity-100'}"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br {skill.gradient} opacity-20"
        ></div>
        <div class="relative">
          <p class="text-xs uppercase tracking-wider text-stone-500">
            {skill.subtitle}
          </p>
          <p class="font-serif text-xl tracking-tight">{skill.title}</p>
        </div>
      </button>
    {/each}
  </div>

  <div class="w-full max-w-4xl">
    {#key activeIndex}
      <div
        in:fade={{ duration: 300 }}
        class="rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200/50 p-8 text-center"
      >
        <p class="text-xl leading-relaxed text-stone-800">
          {skills[activeIndex].description}
        </p>
      </div>
    {/key}
  </div>

  <div class="flex gap-2">
    {#each skills as _, i}
      <button
        onclick={() => (activeIndex = i)}
        class="h-1.5 rounded-full transition-all duration-300 {i === activeIndex
          ? 'w-8 bg-stone-900'
          : 'w-1.5 bg-stone-400'}"
        aria-label="Go to skill {i + 1}"
      ></button>
    {/each}
  </div>
</div>
