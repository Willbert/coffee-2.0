<script>
  import Nav from '../components/Nav.svelte'
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
</script>

<Header />

<main>
  <Nav />
  <slot></slot>
</main>

<Footer />

<style lang="scss">
  :global(body) {
    font-family: theme(font, family, sans);
  }
</style>