<script>
  export let modifiers = ['default'];
  
  const classes = modifiers.map(modifier => `button--${modifier}`).join(' ')
</script>

<button class="button {classes}">
  <slot />
</button>

<style lang="scss">
  .button {
    border-radius: theme(radius);
    min-width: 26ch;
    @include screens(font-size, (font, size, 3));
    @include screens(padding, (DEFAULT: theme(spacing, 2) + theme(spacing, 1)));
  }
  
  .button--default {
    @include modes(background-color, (palette, accent, 5));
  }
  
  .button--ghost {
    @include modes(color, (palette, primary, 5));
    
    @include modes(palette, accent, 5) using ($color) {
      box-shadow: 0 0 0 2px $color;
    };
  }
  
  .button--full {
    width: 100%;
  }
</style>