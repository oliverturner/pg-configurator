<script lang="ts">
  export let id: string;
  export let label: string;
  export let value: any;
  export let attrs: Record<string, any>;
</script>

<div>
  <label for={id}>{label}</label>
  <input {id} name={id} {value} {...attrs} />
</div>

<style lang="postcss">
  div {
    display: grid;
    gap: var(--step--2);
  }

  label {
    color: var(--text-3);
  }
</style>
