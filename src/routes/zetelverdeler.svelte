<script>
  import { zetels } from '../data/zetels.json';
  import Container from '../components/Container.svelte';

  let stemCounter = 0;
  $: fractiesVoor = [];

  function toggleFractie(fractie, zetels) {
    if (fractiesVoor.includes(fractie)) {
      const index = fractiesVoor.indexOf(fractie);
      fractiesVoor.splice(index, 1);
      stemCounter -= zetels;
    } else {
      fractiesVoor.push(fractie);
      stemCounter += zetels;
    }

    fractiesVoor = fractiesVoor;
  }

  function reset() {
    fractiesVoor = [];
    stemCounter = 0;
  }
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-green-600">
  <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">
        <span class="flex p-2 rounded-lg bg-green-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <p class="ml-3 font-medium text-white truncate">
          <span class="hidden md:inline">
            <div class="text-white">
              {#if stemCounter > 75}
                <p>{stemCounter} / 150 meerderheid</p>
              {:else}
                <p>{stemCounter} / 150</p>
              {/if}
              <p>{fractiesVoor.join(' - ')}</p>
            </div></span
          >
        </p>
      </div>
      <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <button
          class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-green-50"
        >
          2/3e meerderheid
        </button>
      </div>
      <div class="order-3 mt-2 ml-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <button
          class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-green-50"
          on:click={reset}
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</div>

<Container>
  <div class="grid grid-cols-3 gap-4">
    {#each zetels as { color, fractie, zetels, coalitie }}
      <button
        on:click={() => {
          toggleFractie(fractie, zetels);
        }}
      >
        <div class="bg-white max-h-24 m-auto text-center align-text-top rounded-xl">
          <p style="color: #{color}" class="text-xl font-medium text-black">
            {fractie}
          </p>
          <p class="text-sm text-gray-500">
            ({zetels})
          </p>
        </div>
      </button>
    {/each}
  </div>
</Container>
