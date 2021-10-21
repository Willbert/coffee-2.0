<script>
  import Heading from './Heading.svelte';
  import Fields from './Fields.svelte';
  import Field from './Field.svelte';
  import Button from './Button.svelte';

</script>

<section class="coffee">
  <Heading>How is your coffee today?</Heading>

  <form action="/taste">
    <Fields>
      <Field
        name="coffee-name"
        label="Coffee"
        hint="Name of coffee, blend or origin"
        placeholder="Shaka from Bad Hand"
        modifier="full"
      />
      <Field
        name="coffee-dose"
        label="Dose"
        hint="In grams"
        placeholder="18"
        modifier="third"
      />
      <Field
        name="coffee-yield"
        label="Yield"
        hint="In grams"
        placeholder="36"
        modifier="third"
      />
      <Field
        name="coffee-time"
        label="Time"
        hint="In seconds"
        placeholder="32"
        modifier="third"
      />
    </Fields>

    <Button modifiers={['default', 'full']} type="submit">Brew</Button>
  </form>
  <a href="/history">skip to history —></a>
</section>

<style lang="scss">
  .coffee {
    @include screens(max-width, (DEFAULT: 72ch));

    @include screens(padding, (
      DEFAULT: theme(spacing, 8),
      md: theme(spacing, 9),
      lg: theme(spacing, 10)
    ));
  }
</style>