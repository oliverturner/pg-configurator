<script type="ts">
	import type { PageData } from "./$types";

	import Page from "$lib/components/page.svelte";
	import Slot from "$lib/components/slot.svelte";
	import { pageChangeHandler } from "$lib/actions/app";

	// Result of the `load` function in `./+page.ts`
	export let data: PageData;

	$: page = data?.appConfig.page;
	$: slots = data?.appConfig.slots;
	$: onPageChange = pageChangeHandler(data);
</script>

<div class="container">
	<div class="container__page">
		<Page {page} {onPageChange} />
	</div>
	<div class="container__slots">
		{#each slots as slot}
			<Slot {slot} />
		{:else}
			loading
		{/each}
	</div>
</div>

<style lang="postcss">
	.container {
		--spacing: var(--step-0);

		@media (min-width: 980px) {
			display: flex;

			height: 100%;
		}
	}

	.container__page {
		@media (min-width: 980px) {
			flex: 0 0 200px;
		}
	}

	.container__slots {
		display: grid;
		gap: var(--spacing);

		padding: var(--spacing);

		@media (min-width: 768px) {
			grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
			align-content: start;
		}

		@media (min-width: 980px) {
			flex: 1;

			overflow: hidden auto;
		}
	}
</style>
