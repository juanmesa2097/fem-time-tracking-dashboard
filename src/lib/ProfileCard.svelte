<script>
  import { createEventDispatcher } from 'svelte'

  export const avatar = 'images/image-jeremy.png'

  const dispatch = createEventDispatcher()

  const periods = [
    { text: 'Daily', value: 'daily' },
    { text: 'Weekly', value: 'weekly' },
    { text: 'Monthly', value: 'monthly' }
  ]

  let selected = 'daily'

  $: dispatch('periodChanged', selected)
</script>

<div class="bg-blue-dark rounded-xl  row-span-2">
  <div class="bg-blue-primary p-6 pb-20 rounded-xl">
    <div class="w-16 h-16 rounded-full border-white border-2">
      <img src={avatar} alt="User profile" />
    </div>
    <span class="mt-8 block text-xs font-normal">Report for</span>
    <h2 class="text-4xl mt-2">Jeremy Robson</h2>
  </div>

  <div class="px-6 pb-6 pt-3 inline-flex flex-col">
    {#each periods as { value, text }}
      <label for={value} class="mt-3 checked:text-white cursor-pointer ">
        <input type="radio" id={value} {value} bind:group={selected} class="hidden" />
        <span class="text-blue-pale hover:text-white transition-colors ease-in-out duration-100">
          {text}
        </span>
      </label>
    {/each}
  </div>
</div>

<style>
  input:checked + span {
    @apply text-white;
  }
</style>
