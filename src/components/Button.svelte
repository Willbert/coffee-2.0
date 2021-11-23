<script>
  export let modifiers = ['default']
  export let source
  export let ariaLabel

  const classes = modifiers.map(modifier => `button--${modifier}`).join(' ')

  const handleClick = src => {
    if(!src) return

    window.open(src)
  }
</script>

<button
  class="button {classes}"
  on:click={handleClick(source)}
  aria-label="{ariaLabel}"
>
  <slot />
</button>

<style lang="scss">
  .button {
    border-radius: theme(radius);
    min-width: 26ch;
    transition: all ease .25s;

    @include screens(font-size, (
      DEFAULT: theme(font, size, 3),
      md: theme(font, size, 5),
      lg: theme(font, size, 6)
    ));

    @include screens(padding, (
      DEFAULT: theme(spacing, 2) + theme(spacing, 1),
      lg: theme(spacing, 3)
    ));
  }

  .button--default {
    @include modes(background-color, (palette, accent, 5));

    &:hover {
      @include modes(background-color, (palette, accent, 4));
    }
  }

  .button--ghost {
    @include modes(color, (palette, primary, 5));

    @include modes(palette, accent, 5) using ($color) {
      box-shadow: 0 0 0 2px $color;
    };

    &:hover {
      @include modes(palette, accent, 3) using ($color) {
        box-shadow: 0 0 0 2px $color;
      };
    }
  }

  .button--full {
    width: 100%;
  }
</style>