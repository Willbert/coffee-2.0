<header class="header">
  <span class="logo">Coffee 2.0</span>
</header>

<style lang="scss">
  .header {
    @include modes(background, (palette, primary, 10));
    @include screens(padding, (DEFAULT: theme(spacing, 4)));
  }
  
  .logo {
    font-weight: theme(font, weight, bold);
    @include modes(color, (palette, primary, 5));
    @include screens(font-size, (font, size, 6));
  }
</style>