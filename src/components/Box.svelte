<script>
  export let modifier
</script>

<div class="box box--{modifier}">
  <slot></slot>
</div>

<style lang="scss">
  .box {
    border-radius: theme(radius);
    @include modes(background-color, (palette, primary, 5));
    @include screens(padding, (DEFAULT: theme(spacing, 5)));
  }
</style>