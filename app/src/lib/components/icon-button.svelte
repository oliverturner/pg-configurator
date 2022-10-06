<script lang="ts">
	export let icon: string;
	export let onClick: () => void;
</script>

<button on:click={onClick}>
	<svg>
		<use xlink:href="/icons.svg#icon-{icon}" />
	</svg>
	<span>
		<slot />
	</span>
</button>

<style>
	button {
		--wh: 24px;

		width: var(--wh);
		aspect-ratio: 1;
		overflow: hidden;
		background: transparent;
	}

	svg {
		width: var(--wh);
		height: var(--wh);
		fill: currentColor;
	}

	span {
		display: none;
	}
</style>
