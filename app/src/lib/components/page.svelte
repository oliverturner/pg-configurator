<script lang="ts">
	import type { PageConfig, SlotConfig } from "src/app";

	import Input from "$lib/components/input.svelte";

	export let page: PageConfig;
	export let onPageChange: (event: Event) => void;
	export const slots: Record<string, SlotConfig> = {};

	let thresholds: Record<string, any>;

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

<form class="page" on:change={onPageChange}>
	<div>
		<h2>Page settings</h2>
		<fieldset>
			<div class="flex">
				<input
					id="requestMode"
					type="checkbox"
					name="requestMode"
					checked={page.requestMode === "sra"}
				/>
				<label class="label" for="requestMode">Enable SRA</label>
			</div>
		</fieldset>
	</div>

	<div>
		<!-- TODO: make this a legend instead -->
		<h3>Lazy loading</h3>
		<fieldset>
			<!-- <legend /> -->
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

	h2,
	h3 {
		padding: var(--step--1);
		border-top: 1px solid var(--surface-1);
		border-bottom: 1px solid var(--surface-1);
		color: var(--gray-5);
	}

	h3 {
		padding-left: var(--step-1);
	}

	fieldset {
		display: grid;
		gap: var(--step-0);

		padding: var(--step-0) var(--step-1);
	}
</style>
