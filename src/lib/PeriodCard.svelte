<script>
  import { onMount } from 'svelte'

  export let type = null
  export let title = null
  export let timeframes = null

  let headerStyles = null

  onMount(() => {
    headerStyles = {
      work: {
        icon: 'images/icon-work.svg',
        color: 'bg-orange'
      },
      play: {
        icon: 'images/icon-play.svg',
        color: 'bg-blue-soft'
      },
      study: {
        icon: 'images/icon-study.svg',
        color: 'bg-red'
      },
      exercise: {
        icon: 'images/icon-exercise.svg',
        color: 'bg-green'
      },
      social: {
        icon: 'images/icon-social.svg',
        color: 'bg-violet'
      },
      'self-care': {
        icon: 'images/icon-self-care.svg',
        color: 'bg-yellow'
      }
    }[type]
  })
</script>

<div class="relative bg-blue-dark p-6 mt-14 rounded-xl hover:bg-opacity-95 cursor-pointer">
  <div
    class="h-full rounded-xl inset-x-0 overflow-hidden absolute -top-9 {headerStyles?.color}"
    style="z-index: -1;"
  >
    <img
      src={headerStyles?.icon}
      alt="Category"
      class="w-16 h-16 object-contain absolute right-4 -top-3"
    />
  </div>

  <div class="flex justify-between">
    <span class="font-medium block">{title}</span>
    <button
      class="text-blue-pale hover:text-white"
      on:click={() => alert(`${title} options clicked`)}
    >
      <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
          fill="currentColor"
          fill-rule="evenodd"
        />
      </svg>
    </button>
  </div>

  <div class="flex desktop:flex-col desktop:items-start items-center justify-between">
    <h3 class="text-4xl desktop:text-5xl mt-0 desktop:mt-6 ">{timeframes.current}hrs</h3>
    <span class="mt-0 desktop:mt-3 block text-xs text-blue-pale">
      Last Week - {timeframes.previous}hrs
    </span>
  </div>
</div>
