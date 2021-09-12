<script>
  import { createEventDispatcher } from 'svelte'
  import { periods } from './../stores.js'
  import Avatar from './Avatar.svelte'

  export let username = null
  export let avatar = null

  const dispatch = createEventDispatcher()

  const options = $periods

  let selected = 'daily'

  $: dispatch('periodChanged', selected)
</script>

<div class="bg-blue-dark rounded-xl row-span-1 desktop:row-span-2 mt-5">
  <div
    class="bg-blue-primary p-6 desktop:pb-20 rounded-xl flex items-center desktop:items-start  desktop:flex-col"
  >
    <Avatar src={avatar} />
    <div class="ml-4 desktop:ml-0 desktop:mt-8">
      <span class="block text-xs font-normal text-blue-pale">Report for</span>
      <h2 class="text-2xl desktop:text-4xl mt-2">{username}</h2>
    </div>
  </div>

  <div
    class="px-6 pb-6 pt-3 desktop:inline-flex flex desktop:flex-col justify-between desktop:justify-start"
  >
    {#each options as { value, text }}
      <label for={value} class="mt-3 checked:text-white cursor-pointer font-normal">
        <input type="radio" id={value} {value} bind:group={selected} class="hidden" />
        <span
          class="text-blue-desaturated hover:text-white transition-colors ease-in-out duration-100"
        >
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
