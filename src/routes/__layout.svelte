<script>
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
</script>

<Header />

<main class="main">
  <!-- <Nav /> -->
  <slot></slot>
</main>

<Footer />

<style lang="scss">
  :global {
    @import 'glidecss/reset';
  }
  :global(body) {
    height: 100vh;
    font-family: theme(font, family, sans);
  }
  .main {
    display: flex;
    justify-content: center;
    @include modes(background-color, (palette, primary, 6));
  }
</style>