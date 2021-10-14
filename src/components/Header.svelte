<header class="header">
  <a href="/" class="logo">Coffee 2.0</a>
  <a class="history" href="/history">Brew History</a>
</header>

<style lang="scss">
  .history {
    font-weight: theme(font, weight, bold);
    @include modes(color, (palette, primary, 2));
    @include screens(font-size, (font, size, 2));
  }
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