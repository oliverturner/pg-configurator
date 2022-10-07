<script lang="ts">
  import type { PageConfig, SlotConfig } from "src/app";

  import Input from "$lib/components/input.svelte";

  export let page: PageConfig;
  export const slots: Record<string, SlotConfig> = {};

  let thresholds: Record<string, any>;

  function onChange(event: Event) {
    const data = new FormData(event.currentTarget as HTMLFormElement);
    console.log("onChange", Object.fromEntries(data));
  }

  $: lazyLoad = page.lazyLoad;
  $: thresholds = {
    fetchMarginPercent: {
      value: lazyLoad?.fetchMarginPercent,
      label: "Fetch margin (%)",
      attrs: {
        type: "number",
        step: 10,
      },
    },
    renderMarginPercent: {
      value: lazyLoad?.renderMarginPercent,
      label: "Render margin (%)",
      attrs: {
        type: "number",
        step: 10,
      },
    },
    mobileScaling: {
      value: lazyLoad?.mobileScaling,
      label: "Mobile scaling",
      attrs: {
        type: "number",
        step: 0.1,
      },
    },
  };
</script>

<form class="page" on:change={onChange}>
  <div>
    <h2>Page</h2>
    <fieldset>
      <div class="flex">
        <input
          id="requestMode"
          type="checkbox"
          name="requestMode"
          checked={page.requestMode === "sra"}
        />
        <label for="requestMode">Enable SRA</label>
      </div>
    </fieldset>
  </div>

  <div>
    <h2>Lazy loading</h2>
    <fieldset>
      {#each Object.keys(thresholds) as id}
        <Input {id} {...thresholds[id]} />
      {/each}
    </fieldset>
  </div>
</form>

<style lang="postcss">
  .page {
    display: grid;
    align-content: start;
    gap: var(--step-1);

    height: 100%;
    overflow: hidden auto;
    background-color: var(--surface-2);
    color: var(--gray-4);
  }

	.flex {
		display: flex;
		align-items: center;
		gap: var(--step-0);
	}

  h2 {
    padding: var(--step--1);
    border-top: 1px solid var(--surface-1);
    border-bottom: 1px solid var(--surface-1);
    color: var(--gray-5);
  }

  fieldset {
    display: grid;
    gap: var(--step-0);

    padding: var(--step-0) var(--step-1);
  }
</style>
