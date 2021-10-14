<script>
  export let name, label, hint, placeholder, modifier
</script>

<li class="field field--{modifier}">
  <label class="label" for="{name}">{label}</label>
  <div class="hint">{hint}</div>
  <input class="input" type="text" id="{name}" name="{name}" placeholder="{placeholder}">
</li>

<style lang="scss">
  .label {
    @include screens(font-size, (font, size, 4));
  }
  .hint {
    @include modes(color, (palette, primary, 8));
    @include screens(margin-bottom, (DEFAULT: theme(spacing, 2)));
  }
  .input {
    border-radius: theme(radius);
    width: 100%;
    
    @include modes(palette, primary, 7) using ($color) {
      box-shadow: 0 0 0 1px $color;
    }
    
    @include screens(padding, (DEFAULT: theme(spacing, 2) + theme(spacing, 1)))
  }
  .field {
    grid-column: span 12;
  }
  .field--third {
    grid-column: auto / span 4;
  }
</style>