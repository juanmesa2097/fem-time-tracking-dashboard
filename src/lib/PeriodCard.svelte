<script>
  import { onMount } from 'svelte'

  export let type = null

  let icon = ''

  onMount(() => {
    icon = {
      work: 'images/icon-work.svg',
      play: 'images/icon-play.svg',
      study: 'images/icon-study.svg',
      exercise: 'images/icon-exercise.svg',
      social: 'images/icon-social.svg',
      'self-care': 'images/icon-self-care.svg'
    }[type]
  })
</script>

<div class="relative">
  <div
    class="h-16 rounded-xl relative overflow-hidden"
    class:bg-orange={type === 'work'}
    class:bg-blue-soft={type === 'play'}
    class:bg-red={type === 'study'}
    class:bg-green={type === 'exercise'}
    class:bg-violet={type === 'social'}
    class:bg-yellow={type === 'self-care'}
  >
    <img src={icon} alt="Category" class="w-16 h-16 object-contain absolute right-4 -top-3" />
  </div>

  <div class="p-6 rounded-xl bg-blue-dark absolute z-10 bottom-0 inset-x-0">
    <span class="font-medium block">{type}</span>
    <h3 class="text-5xl mt-6 ">32hrs</h3>
    <span class="mt-3 block text-xs text-blue-pale">Last Week - 36hrs</span>
  </div>
</div>
