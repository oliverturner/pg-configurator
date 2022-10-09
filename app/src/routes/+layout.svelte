<script lang="ts">
  import type { LayoutData } from "./$types";

  import { fly } from "svelte/transition";
  import "../app.css";

  // Enforce SPA mode
  export const ssr = false;

  // Result of the `load` function in `./+layout.ts`
  export let data: LayoutData;

  const duration = 500;
  const flyProps = {
    in: { duration, delay: duration * 2 },
    out: { duration },
  };
</script>

<div class="app">
  <header class="app__header">
    <h1><a href="/">Ad Configurator</a></h1>
  </header>
  <nav class="app__nav">
    <ul class="app__nav__apps">
      {#each data.apps as app}
        <li>
          <a
            href="/app/{app.dataID}"
            class="app__nav__link"
            class:app__nav__link--active={data.currentAppId === app.dataID}
            >{app.label}</a
          >
        </li>
      {:else}
        loading
      {/each}
    </ul>
  </nav>
  {#key data.currentPath}
    <main class="app__content" in:fly={flyProps.in} out:fly={flyProps.out}>
      <slot />
    </main>
  {/key}
</div>

<style lang="postcss">
  .app {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "header header"
      "nav content";

    height: 100vh;
    overflow: hidden;

    opacity: 0;
    animation: fade-in 0.5s ease-in-out forwards;
  }

  .app__header {
    grid-area: header;

    padding: var(--step-1) var(--step-0);
    color: var(--text-1);
  }

  .app__nav {
    grid-area: nav;

    padding-right: 1px;
    color: var(--text-4);
  }

  .app__nav__link {
    display: block;
    padding: var(--step--1);

    &:hover,
    &.app__nav__link--active {
      background-color: var(--surface-2);
      color: var(--text-1);
    }
  }

  .app__content {
    grid-area: content;

    overflow: hidden;
  }

  h1 {
    max-width: initial;
    font-size: var(--step-1);
    letter-spacing: 4px;
  }
</style>
