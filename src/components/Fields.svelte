<ul class="fields">
  <slot />
</ul>

<style lang="scss">
  .fields {
    display: grid;
    grid-template-columns: repeat(minmax(max-content, 1fr), 12);
    @include screens(margin-bottom, (DEFAULT: theme(spacing, 7)));
    @include screens(gap, (DEFAULT: theme(spacing, 5)));
  } 
</style>