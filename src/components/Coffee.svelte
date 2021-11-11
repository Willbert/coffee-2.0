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
        name="name"
        label="Coffee"
        hint="Name of coffee, blend or origin"
        placeholder="Shaka from Bad Hand"
        modifier="full"
      />
      <Field
        name="dose"
        label="Dose"
        hint="In grams"
        placeholder="18"
        modifier="third"
      />
      <Field
        name="yield"
        label="Yield"
        hint="In grams"
        placeholder="36"
        modifier="third"
      />
      <Field
        name="time"
        label="Time"
        hint="In seconds"
        placeholder="32"
        modifier="third"
      />
    </Fields>

    <Button modifiers={['default', 'full']} type="submit">Brew</Button>
  </form>
</section>

<style lang="scss">
  .coffee {
    @include screens(max-width, (DEFAULT: 72ch));
    padding: 4rem 1.8rem 4rem 1.8rem;
  }
</style>
