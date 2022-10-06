<script lang="ts">
	import type { PageConfig, SlotConfig } from "src/app";

	export let page: PageConfig;
	export const slots: Record<string, SlotConfig> = {};

	function onChange(event: Event) {
		const data = new FormData(event.currentTarget as HTMLFormElement);
		console.log("onChange", Object.fromEntries(data));
	}

	$: targeting = new Map(Object.entries(page?.targeting || {}));
	$: thresholds = new Map(Object.entries(page?.lazyLoad || {}));
</script>

<form class="page" on:change={onChange}>
	<div>
		<h2>Page</h2>
		<fieldset>
			<label for="requestMode">Request mode</label>
			<input id="requestMode" name="requestMode" value={page.requestMode} />
		</fieldset>
	</div>

	<div>
		<h2>Lazy loading</h2>
		<fieldset>
			{#each [...thresholds.keys()] as key}
				<label for={key}>{key}</label>
				<input id={key} name={key} value={thresholds.get(key)} type="number" />
			{/each}
		</fieldset>
	</div>

	<div>
		<h2>Targeting</h2>
		<fieldset>
			{#each [...targeting.keys()] as key}
				<label for={key}>{key}</label>
				<input id={key} name={key} value={targeting.get(key)} />
			{/each}
		</fieldset>
	</div>
</form>

<style lang="postcss">
	.page {
		display: grid;
		align-content: start;
		gap: 1rem;

		height: 100%;
		overflow: hidden auto;
		background-color: var(--surface-2);
		color: var(--gray-4);
	}

	h2 {
		padding: var(--step--1);
		border-top: 1px solid var(--surface-1);
		border-bottom: 1px solid var(--surface-1);
		color: var(--gray-5);
	}

	fieldset {
		padding: var(--step-0) var(--step-1);
	}
</style>
