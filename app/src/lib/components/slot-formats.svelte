<script lang="ts">
  import type { IABFormat } from "src/app";

  export let formats: IABFormat[] = [];
</script>

<div>
  {#each formats as format}
    <span class:hidden={format === "hidden"}>{format}</span>
  {:else}
    <!-- couldn't map the size to a known format  -->
    <span class="unknown">unknown</span>
  {/each}
</div>

<style lang="postcss">
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  span {
    padding: 0.125rem 0.25rem;
    border: 1px solid currentColor;
    border-radius: 0.2rem;
    font-size: 0.9rem;
    font-family: "Courier New", Courier, monospace;
    color: var(--orange-4);

    &.hidden {
      color: var(--text-2);
      border-style: dotted;
    }

    &.unknown {
      color: var(--red-5);
    }
  }
</style>
