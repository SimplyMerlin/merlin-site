<script lang="ts">
  const skills = [
    {
      title: "Replay Mod",
      description:
        "Mastered Minecraft Replay Mod for cinematic gameplay footage. Dramatic camera movements, seamless transitions, and dynamic action shots that bring your Minecraft moments to life.",
      icon: "🎮",
    },
    {
      title: "Speed",
      description:
        "Fast turnaround times without sacrificing quality. Deliver polished 10-minute videos in 2-3 days. Keep up with trending topics and time-sensitive content.",
      icon: "⚡",
    },
    {
      title: "Pacing & Timing",
      description:
        "Comedic timing perfection. I know when to cut for impact, how to build tension before punchlines, and the rhythm that keeps viewers engaged from start to finish.",
      icon: "🎬",
    },
    {
      title: "Audio",
      description:
        "Professional audio engineering with EQ, compression, noise reduction, and leveling. VSTs for crisp, balanced sound. Dialogue, SFX, and immersive soundscapes handled.",
      icon: "🎧",
    },
  ];
</script>

<div class="my-24 grid grid-cols-1 gap-6 md:grid-cols-2">
  {#each skills as skill}
    <div
      class="group flex flex-col gap-3 rounded-2xl bg-orange-100 p-6 transition-all duration-300 hover:bg-orange-200"
    >
      <div class="flex items-center gap-3">
        <span class="text-3xl">{skill.icon}</span>
        <h3 class="font-serif text-2xl tracking-tight">{skill.title}</h3>
      </div>
      <p class="text-lg leading-relaxed text-stone-700">{skill.description}</p>
    </div>
  {/each}
</div>
