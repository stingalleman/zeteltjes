<script>
  import { zetels } from '../data/zetels.json';
</script>

<div class="grid gap-5 grid-cols-3">
  {#each zetels as { color, fractie, zetels, coalitie }}
    <div class="bg-white rounded-xl flex">
      <p style="color: #{color}" class="text-xl font-medium text-black">{fractie}&nbsp;</p>
      <p class="text-sm text-gray-500">({zetels})</p>
    </div>
  {/each}
</div>
