<script>
  import Button from './Button.svelte'
  const url = 'https://www.buymeacoffee.com/TeamAlbionLL'
</script>

<footer class="footer">
  <p class="sponsor">
    <Button modifiers={['ghost']} source={url} ariaLabel='Buy us a coffee'>Buy us a coffee?</Button>
  </p>
  <p class="copyright">
    <a target="_blank" rel="noreferrer" href={url}>@ 2021 Emma, Flávio, Jamie & William</a>
  </p>
</footer>

<style lang="scss">
  .footer {
    text-align: center;
    @include modes(color, (palette, primary, 7));
    @include modes(background, (palette, primary, 9));
    @include screens(padding, (
      DEFAULT: theme(spacing, 4),
      md: theme(spacing, 5),
      lg: theme(spacing, 6)
    ));
  }

  .sponsor {
    @include screens(padding, (DEFAULT: theme(spacing, 4)));
  }

  .copyright {
    @include screens(padding, (DEFAULT: theme(spacing, 4)));
  }
</style>