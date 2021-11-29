<script>
  import { zetels } from '../data/zetels.json';
  import Container from '../components/Container.svelte';
  import Banner from '../components/Banner.svelte';
  import CrossCircle from '../components/Icons/CrossCircle.svelte';
  import CheckCircle from '../components/Icons/CheckCircle.svelte';

  let stemCounter = 0;
  let minVotes = 75;
  $: fractiesVoor = [];

  let coalitiePartijen = [];
  let coalitieStemmen = 0;
  for (const fracties of zetels) {
    if (fracties.coalitie) {
      coalitiePartijen.push(fracties.fractie);
      coalitieStemmen += fracties.zetels;
    }
  }

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

  function toggleAllCoalitie() {
    // check if all coalitie partijen are voor
    if (coalitiePartijen.every((v) => fractiesVoor.includes(v))) {
    }
  }

  function toggleMeerderheidMode() {
    if (minVotes === 75) {
      minVotes = 100;
    } else {
      minVotes = 75;
    }
  }

  function reset() {
    fractiesVoor = [];
    stemCounter = 0;
  }
</script>

{#if stemCounter > minVotes}
  <Banner button1Function={reset} button2Function={toggleMeerderheidMode} color="green">
    <span slot="icon">
      <CheckCircle className="w-6 h-6 text-white" />
    </span>

    <span slot="text">
      <p>
        Meerderheid! ({stemCounter}/{minVotes})
      </p>
    </span>

    <span slot="button1Text">
      <p>Reset</p>
    </span>

    <span slot="button2Text">
      {#if minVotes === 75}
        <p>2/3e meerderheid</p>
      {:else}
        <p>1/2e meerderheid</p>
      {/if}
    </span>
  </Banner>
{:else}
  <Banner button1Function={reset} button2Function={toggleMeerderheidMode} color="red">
    <span slot="icon">
      <CrossCircle className="w-6 h-6 text-white" />
    </span>

    <span slot="text">
      <p>
        Geen meerderheid... ({stemCounter}/{minVotes})
      </p>
    </span>

    <span slot="button1Text">
      <p>Reset</p>
    </span>

    <span slot="button2Text">
      {#if minVotes === 75}
        <p>2/3e meerderheid</p>
      {:else}
        <p>1/2e meerderheid</p>
      {/if}
    </span>
  </Banner>
{/if}

<Container>
  <div class="grid grid-cols-4 gap-4">
    {#if coalitiePartijen.every((v) => fractiesVoor.includes(v))}
      <button on:click={toggleAllCoalitie}>
        <div
          class="bg-white flex h-16 m-auto justify-center items-center rounded-xl border-green-500 border-4"
        >
          <p class="text-xl font-medium text-black">Alle coalitie partijen</p>
          <br />
          <p class="text-sm text-gray-500">({coalitieStemmen})</p>
        </div>
      </button>
    {:else}
      <button
        on:click={() => {
          for (const fractie of zetels) {
            if (fractie.coalitie) {
              toggleFractie(fractie.fractie, fractie.zetels);
            }
          }
        }}
      >
        <div class="bg-white flex h-16 m-auto justify-center items-center rounded-xl">
          <p class="text-xl font-medium text-black">Alle coalitie partijen</p>
          <br />
          <p class="text-sm text-gray-500">({coalitieStemmen})</p>
        </div>
      </button>
    {/if}

    {#each zetels as { color, fractie, zetels, coalitie }}
      {#if fractiesVoor.includes(fractie)}
        <button
          on:click={() => {
            toggleFractie(fractie, zetels);
          }}
        >
          <div
            class="bg-white flex h-16 m-auto justify-center items-center rounded-xl border-green-500 border-4"
          >
            <p style="color: #{color}" class="text-xl font-medium text-black">
              {fractie}
            </p>
            <br />
            <p class="text-sm text-gray-500">
              ({zetels})
            </p>
          </div>
        </button>
      {:else}
        <button
          on:click={() => {
            toggleFractie(fractie, zetels);
          }}
        >
          <div class="bg-white flex h-16 m-auto justify-center items-center rounded-xl">
            <p style="color: #{color}" class="text-xl font-medium text-black">
              {fractie}
            </p>
            <br />
            <p class="text-sm text-gray-500">
              ({zetels})
            </p>
          </div>
        </button>
      {/if}
    {/each}
  </div>
</Container>
