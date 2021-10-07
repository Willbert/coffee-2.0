
<script>
  import Nav from '../components/nav.svelte'
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
</script>

<Header />

<div>
  <Nav />
  <slot></slot>
</div>

<Footer />

