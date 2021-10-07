<script>

//   const increaseYield = 'Increase Yield';
//   const decreaseYield = 'Decrease Yield';
//   const grindCoarser = 'Grind Coarser';
//   const grindFiner = 'Grind Finer';
//   const perfection = 'The Perfect Coffee';

//   // const store = localStorage.getItem('cards');

//   // let cards = store ? JSON.parse(store) : [];

//   const flow  = [
//     { handle: 'too-sour-acidic', current: 'Too Sour / Acidic', recomendations: [increaseYield] },
//     { handle: 'muddy-sour', current: 'Muddy and Sour', recomendations: [increaseYield, grindCoarser] },
//     { handle: 'high-strength-muddy', current: 'High Strength / Muddy', recomendations: [grindCoarser] },
//     { handle: 'muddy-bitter', current: 'Muddy and Bitter', recomendations: [decreaseYield, grindCoarser] },
//     { handle: 'bitter', current: 'Too Bitter', recomendations: [decreaseYield] },
//     { handle: 'watery-bitter', current: 'Watery and Bitter', recomendations: [decreaseYield, grindFiner] },
//     { handle: 'low-strength-watery', current: 'Low Strength / Watery', recomendations: [grindFiner] },
//     { handle: 'watery-sour', current: 'Watery and Sour', recomendations: [grindFiner, increaseYield] },
//     { handle: 'perfection', current: 'Ahh Perfection', recomendations: [perfection] }
//  ];

//  function choose(choice) {
//     cards = [...cards, choice];

//     localStorage.setItem('cards', JSON.stringify(cards));
//  }
</script>

<h1>How is your coffee today?</h1>

<form>
  <ul>
    <li>
      <label for="coffee-name">Coffee:</label>
      <input type="text" id="coffee-name" name="coffee-name">
    </li>
    <li>
      <label for="coffee-dose">Dose (g):</label>
      <input type="number" id="coffee-dose" name="coffee-dose">
    </li>
    <li>
      <label for="coffee-time">Time (s):</label>
      <input type="number" id="coffee-time" name="coffee-time">
    </li>
    <li>
      <label for="coffee-yield">Yield (g):</label>
      <input type="number" id="coffee-yield" name="coffee-yield">
    </li>
  </ul>
  <button>Brew</button>
</form>

<!-- {#each cards as card}
  <Box modifier={card.handle}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
    <h1>Coffee</h1>
    <ul>
      <li>Current State: {card.current}</li>
      <li>Recommendation: {card.recomendations.join(' and ')}</li>
    </ul>
  </Box>
{/each} -->

<!-- <ul>
  {#each flow as choice}
  <button on:click={() => choose(choice)}>{choice.current}</button>
  {/each}
</ul> -->

<style>

</style>