<script>
  import flow from "../flow.js"
  import { add } from '../store.js'

  function choose(choice) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    add({ ...params, handle: choice.handle })
  }
</script>

<ul>
  {#each flow as choice}
    <li class="choice">
      <a class="link link--{choice.handle}" on:click={() => choose(choice)} href="/history">{choice.current}</a>
    </li>
  {/each}
</ul>

<style lang="scss">
  .choice {
    display: block;
    @include screens(margin-bottom, (DEFAULT: theme(spacing, 4)));
  }
  .link {
    display: block;
    text-align: center;
    border-radius: theme(radius);
    min-width: 26ch;
    transition: all ease .25s;

    @include screens(font-size, (
      DEFAULT: theme(font, size, 3),
      md: theme(font, size, 5),
      lg: theme(font, size, 6)
    ));

    @include screens(padding, (
      DEFAULT: theme(spacing, 1) + theme(spacing, 2),
      lg: theme(spacing, 2)
    ));
    @include modes(color, (palette, primary, 6));
    @include modes(background-color, (palette, accent, 5));

    &:hover {
      @include modes(background-color, (palette, accent, 4));
    }
  }
  .link--too-sour-acidic { background-color: #c5803a};
  .link--watery-sour { background-color: #8a7d5b};
  .link--muddy-sour { background-color: #bf6c18;}
  .link--low-strength-watery { background-color: #896046;}
  .link--perfection {
    box-shadow: inset 0 0 0 2px theme(palette, accent, 8);
    background-color: theme(palette, primary, 5);
    color: theme(palette, accent, 8);
  }
  .link--high-strength-muddy { background-color: #8a420a;}
  .link--watery-bitter { background-color: #5f341b;}
  .link--muddy-bitter { background-color: #4d2010; }
  .link--bitter { background-color: #2f0f04; }


</style>