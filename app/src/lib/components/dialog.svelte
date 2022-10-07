<script lang="ts">
	import IconButton from "./icon-button.svelte";

	export let dialog: HTMLDialogElement;
	export let title: string;

	function close() {
		dialog.close();
	}
</script>

<dialog bind:this={dialog}>
	<header>
		<h2>{title}</h2>
		<IconButton icon="close" onClick={close}>Close</IconButton>
	</header>
	<div class="content">
		<slot />
	</div>
</dialog>

<style lang="postcss">
	dialog {
		width: 550px;
		padding: 0;
		border: none;
		clip-path: var(--clip-notched);
		background-color: var(--surface-1);
		color: inherit;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;

		padding: var(--step--1);
		border-bottom: 1px solid var(--surface-3);
	}

	.content {
		padding: var(--step--1);
	}
</style>
