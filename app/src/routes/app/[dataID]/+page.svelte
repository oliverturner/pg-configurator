<script type="ts">
	import type { PageData } from "./$types";

	import Page from "$lib/components/page.svelte";
	import Slot from "$lib/components/slot.svelte";

	// Result of the `load` function in `./+page.ts`
	export let data: PageData;

	function onPageChange(event: Event) {
		const data = new FormData(event.currentTarget as HTMLFormElement);
		console.log("onPageChange", Object.fromEntries(data));
	}

	$: page = data?.page;
	$: slots = data?.slots;
</script>

<div class="container">
	<Page {page} {onPageChange} />
	<div class="slots">
		{#each slots as slot}
			<Slot id={slot.id} {slot} />
		{:else}
			loading
		{/each}
	</div>
</div>

<style lang="postcss">
	.container {
		--spacing: var(--step-0);

		display: flex;
		gap: var(--spacing);

		height: 100%;
		padding: 0 var(--spacing) var(--spacing) 0;
	}

	.slots {
		flex: 1;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		align-content: start;
		gap: var(--spacing);

		overflow: hidden auto;
		padding-bottom: var(--spacing);
	}
</style>
