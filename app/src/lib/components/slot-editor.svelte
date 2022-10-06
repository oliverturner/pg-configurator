<script lang="ts">
	import type { SlotConfig } from "src/app";
	import SlotFormats from "./slot-formats.svelte";

	export let config: SlotConfig | undefined;
	export let onSave: () => void;

	function onSubmit(e: Event) {
		e.preventDefault();
		onSave();
	}

	$: formats = new Map(Object.entries(config?.formats || {}));
	$: targeting = new Map(Object.entries(config?.targeting || {}));
</script>

<form action="#" on:submit={onSubmit}>
	<h3>Formats</h3>
	<dl>
		{#each [...formats.keys()] as formatKey}
			<dt>{formatKey}</dt>
			<dd><SlotFormats formats={formats.get(formatKey)} /></dd>
		{/each}
	</dl>

	<h3>Targeting</h3>
	<dl>
		{#each [...targeting.keys()] as targetKey}
			<dt>{targetKey}</dt>
			<dd>{targeting.get(targetKey)}</dd>
		{/each}
	</dl>

	<button>Save</button>
</form>
