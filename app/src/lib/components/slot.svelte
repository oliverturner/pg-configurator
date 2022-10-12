<script lang="ts">
	import type { SlotConfig } from "src/app";

	import SlotFormats from "./slot-formats.svelte";
	import SlotEditor from "./slot-editor.svelte";
	import Dialog from "./dialog.svelte";
	import IconButton from "./icon-button.svelte";

	export let slot: SlotConfig | undefined;

	let dialog: HTMLDialogElement;

	function removeTarget(target: string) {
		console.log("removeTarget", target);
	}

	function edit() {
		dialog.showModal();
	}

	function onSave() {
		dialog.close();
	}

	// TODO: Add control to hide slot
	$: id = slot?.id;
	$: formats = new Map(Object.entries(slot?.formats || {}));
	$: targeting = new Map(Object.entries(slot?.targeting || {}));
</script>

<article>
	<header>
		<h2>{id}</h2>
		<IconButton icon="edit" onClick={edit}>Edit</IconButton>
	</header>
	<div class="content">
		<section class="content__formats">
			<h3>Formats</h3>
			<dl>
				{#each [...formats.keys()] as formatKey}
					<dt>{formatKey}</dt>
					<dd><SlotFormats formats={formats.get(formatKey)} /></dd>
				{/each}
			</dl>
		</section>
		<section class="content__targeting">
			<h3>Targeting</h3>
			<dl>
				{#each [...targeting.keys()] as targetKey}
					<dt>
						<IconButton icon="remove" onClick={() => removeTarget(targetKey)}>
							Remove
						</IconButton>
						<span>{targetKey}</span>
					</dt>
					<dd>
						<span>{targeting.get(targetKey)}</span>
					</dd>
				{/each}
			</dl>
		</section>
	</div>
</article>

<Dialog title={id} bind:dialog>
	<SlotEditor config={slot} {onSave} />
</Dialog>

<style lang="postcss">
	article {
		clip-path: var(--clip-notched);
		background-color: var(--surface-2);
		color: var(--gray-4);
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: var(--step--1);
		border-bottom: 1px solid var(--surface-1);
		color: var(--gray-5);
	}

	h2 {
		color: inherit;
	}

	h3 {
		color: var(--gray-6);
	}

	.content {
		display: grid;
		gap: 1rem;
		align-content: start;

		padding: var(--step-1);
	}

	.content__formats dt {
		align-items: initial;
	}

	section {
		display: grid;
		gap: 0.5rem;
	}
</style>
