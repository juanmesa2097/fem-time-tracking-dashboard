<script>
  import PeriodCard from './lib/PeriodCard.svelte'
  import ProfileCard from './lib/ProfileCard.svelte'
  import { times } from './stores'

  const username = 'Jeremy Robson'
  const userAvatar = 'images/image-jeremy.png'
  const userTimes = $times
  let period = 'daily'

  const handlePeriodChange = ({ detail: value }) => (period = value)
</script>

<main class="h-full">
  <section class="container grid place-items-center h-full">
    <div class="block desktop:grid grid-cols-4 gap-x-6 grid-rows-2 max-w-5xl mx-auto">
      <ProfileCard {username} avatar={userAvatar} on:periodChanged={handlePeriodChange} />

      {#if userTimes.length && period}
        {#each userTimes as { type, title, timeframes }}
          <PeriodCard {type} {title} timeframes={timeframes[period]} />
        {/each}
      {/if}
    </div>
  </section>
</main>

<style global type="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html,
  body,
  #app {
    @apply h-full;
  }
  body {
    @apply bg-blue-very-dark text-white;
    @apply font-light;
  }
</style>
