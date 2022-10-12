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
	<Page {page} {onPageChange} />
	<div class="slots">
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

		@media (min-width: 768px) {
			padding: 0 var(--spacing) var(--spacing) 0;
		}

		@media (min-width: 980px) {
			gap: var(--spacing);
			height: 100%;
			display: flex;
		}
	}

	.slots {
		flex: 1;

		display: grid;
		gap: var(--spacing);

		padding: var(--spacing);

		@media (min-width: 768px) {
			grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
			align-content: start;

			padding: 0;
		}

		@media (min-width: 980px) {
			overflow: hidden auto;
		}
	}
</style>
