<script>
  import { read } from "../store"
  import Logo from "./Logo.svelte"
  import HistoryLogo from "./History-logo.svelte"
  import { onMount } from 'svelte'

  let cards = []

  onMount(() => {
    cards = read()
  })

</script>

<header class="header">
    <Logo />
    {#if cards.length}
      <HistoryLogo />
    {/if}
</header>

<style lang="scss">
  .header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    @include modes(background, (palette, primary, 10));
    @include screens(padding, (DEFAULT: theme(spacing, 4)));
  }

</style>