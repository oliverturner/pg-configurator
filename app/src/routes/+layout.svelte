<script lang="ts">
  import type { LayoutData } from "./$types";

  import "../app.css";

  // Result of the `load` function in `./+layout.ts`
  export let data: LayoutData = {};

  // Enforce SPA mode
  export const ssr = false;
</script>

<div class="app">
  <header class="app__header">
    <h1><a href="/">Ad Configurator</a></h1>
  </header>
  <nav class="app__nav">
    <ul>
      {#each Object.values(data) as app}
        <li>
          <a href="/app/{app.dataID}">{app.label}</a>
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

    padding: var(--step-1) var(--step-2);
  }

  .app__nav {
    grid-area: nav;

    padding: 0 var(--step-2);
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
