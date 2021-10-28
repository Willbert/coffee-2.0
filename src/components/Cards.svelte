<script>
  import { read, remove } from "../store"
  import flow from '../flow'
  import Box from "./Box.svelte"
  import { onMount } from 'svelte'

  let cards = []

  onMount(() => {
    cards = read()
  })

  function removeCard(card) {
    remove(card)
    cards = read()
  }

  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    hour12: false,
    timeZone: 'Europe/Dublin'
  };

</script>

<div class="card-heaven">
  {#each cards as card }
    <Box modifier={card.handle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" on:click={() => removeCard(card)}>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      <h1 class="name">{card.name}</h1>
      <span class="date">{new Intl.DateTimeFormat('en-GB', options).format(new Date(card.date))}</span>
      <ul class="list">
        <li class="state">Current State: {flow.find(object => object.handle === card.handle).current}</li>
        <li class="recommendation">Recommendation: {flow.find(object => object.handle === card.handle).recommendations.join(' and ')}</li>
      </ul>
    </Box>
  {/each}
</div>

<style lang="scss">
  .card-heaven {
    @include screens(margin-top, (DEFAULT: theme(spacing, 4)));
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 3fr);
    }
  }
  .name {
    font-weight: theme(font, weight, bold);
    @include screens(font-size, (font, size, 5));
    text-align: center;
  }
  .date {
    display: block;
    font-weight: theme(font, weight, bold);
    @include screens(font-size, (font, size, 2));
    @include screens(margin-bottom, (DEFAULT: theme(spacing, 4)));
    text-align: center;
  }
  .state {
    @include screens(font-size, (font, size, 2));
    text-align: center;
  }
  .recommendation {
    @include screens(font-size, (font, size, 2));
    text-align: center;
  }

</style>

