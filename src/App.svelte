<script>
  import PeriodCard from './lib/PeriodCard.svelte'
  import ProfileCard from './lib/ProfileCard.svelte'

  const cards = ['work', 'play', 'study', 'exercise', 'social', 'self-care']

  const handlePeriodChange = ({ detail: period }) => {
    console.log(period)
  }
</script>

<main class="h-full">
  <section class="container grid place-items-center h-full">
    <div class="grid grid-cols-4 gap-6 grid-rows-2 max-w-5xl mx-auto">
      <ProfileCard on:periodChanged={handlePeriodChange} />

      {#each cards as card}
        <PeriodCard type={card} />
      {/each}
    </div>
  </section>
</main>

<style global type="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    html,
    body,
    #app {
      @apply h-full;
    }
    body {
      @apply bg-blue-very-dark text-white;
      @apply font-light;
    }
  }
</style>
