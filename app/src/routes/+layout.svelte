<script lang="ts">
  import type { LayoutData } from "./$types";

  import { page } from "$app/stores";
  import "../app.css";

  // Result of the `load` function in `./+layout.ts`
  export let data: LayoutData = { apps: [] };

  // Enforce SPA mode
  export const ssr = false;
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
            class:app__nav__link--active={$page.data.dataID === app.dataID}
            >{app.label}</a
          >
        </li>
      {:else}
        loading
      {/each}
    </ul>
  </nav>
  <main class="app__content">
    <slot />
  </main>
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
