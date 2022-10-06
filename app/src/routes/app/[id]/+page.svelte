<script type="ts">
  import type { PageData } from "./$types";

  import Page from "$lib/components/page.svelte";
  import Slot from "$lib/components/slot.svelte";

  // Result of the `load` function in `./+page.ts`
  export let data: PageData = {};

  $: page = data.page;
  $: slots = data.slots;
</script>

<div class="container">
  <Page {page} />
  <div class="slots">
    {#each [...slots.keys()] as id}
      <Slot {id} config={slots.get(id)} />
    {:else}
      loading
    {/each}
  </div>
</div>

<style lang="postcss">
  .container {
    display: flex;
    gap: 1rem;

    height: 100%;
    padding: 0 1rem 1rem 0;
  }

  .slots {
    flex: 1;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    align-content: start;
    gap: 1rem;

    overflow: auto;
  }
</style>
