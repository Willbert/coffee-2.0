<script>
  import Button from './Button.svelte'
</script>

<footer class="footer">
  <p class="sponsor">
    <Button modifiers={['ghost']}>Buy us a coffee?</Button>
  </p>
  <p class="copyright">
    <a href="/history">@ 2021 Emma, Flávio, Jamie & William</a>
  </p>
</footer>

<style lang="scss">
  .footer {
    text-align: center;
    @include modes(color, (palette, primary, 8));
    @include modes(background, (palette, primary, 9));
    @include screens(padding, (DEFAULT: theme(spacing, 4)));
  }
  
  .sponsor {
    @include screens(padding, (DEFAULT: theme(spacing, 4)));
  }
  
  .copyright {
    @include screens(padding, (DEFAULT: theme(spacing, 4)));
  }
</style>