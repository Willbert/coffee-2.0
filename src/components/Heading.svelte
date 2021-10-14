<h1 class="heading"><slot /></h1>

<style lang="scss">
  .heading {
    font-weight: theme(font, weight, bold);
    line-height: theme(font, leading, tight);
    @include screens(font-size, (font, size, 8));
    @include screens(margin-bottom, (DEFAULT: theme(spacing, 6)));
  }
</style>