<script>
  import { fade } from 'svelte/transition'
  export let modifier
</script>

<div class="box box--{modifier}" transition:fade>
  <slot/>
</div>

<style lang="scss">
  .box {
    border-radius: theme(radius);
    @include modes(background-color, (palette, primary, 5));
    @include screens(padding, (DEFAULT: theme(spacing, 5)));
  }
  .box--too-sour-acidic { box-shadow: 0px 1px 2px 2px #c5803a};
  .box--watery-sour { box-shadow: 0px 1px 2px 2px #8a7d5b};
  .box--muddy-sour { box-shadow: 0px 1px 2px 2px #bf6c18;}
  .box--low-strength-watery { box-shadow: 0px 1px 2px 2px #896046;}
  .box--perfection {box-shadow: 0 1px 3px 3px #55CDFC;}
  .box--high-strength-muddy { box-shadow: 0px 1px 2px 2px #8a420a;}
  .box--watery-bitter { box-shadow: 0px 1px 2px 2px #5f341b;}
  .box--muddy-bitter { box-shadow: 0px 1px 2px 2px #4d2010; }
  .box--bitter { box-shadow: 0px 1px 2px 2px #2f0f04; }
</style>