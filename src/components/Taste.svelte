<script>
  const increaseYield = 'Increase Yield';
  const decreaseYield = 'Decrease Yield';
  const grindCoarser = 'Grind Coarser';
  const grindFiner = 'Grind Finer';
  const perfection = 'The Perfect Coffee';

  const flow  = [
    { handle: 'too-sour-acidic', current: 'Too Sour / Acidic', recomendations: [increaseYield] },
    { handle: 'muddy-sour', current: 'Muddy and Sour', recomendations: [increaseYield, grindCoarser] },
    { handle: 'high-strength-muddy', current: 'High Strength / Muddy', recomendations: [grindCoarser] },
    { handle: 'muddy-bitter', current: 'Muddy and Bitter', recomendations: [decreaseYield, grindCoarser] },
    { handle: 'bitter', current: 'Too Bitter', recomendations: [decreaseYield] },
    { handle: 'watery-bitter', current: 'Watery and Bitter', recomendations: [decreaseYield, grindFiner] },
    { handle: 'low-strength-watery', current: 'Low Strength / Watery', recomendations: [grindFiner] },
    { handle: 'watery-sour', current: 'Watery and Sour', recomendations: [grindFiner, increaseYield] },
    { handle: 'perfection', current: 'Ahh Perfection', recomendations: [perfection] }
  ];

  function choose(choice) {
    cards = [...cards, choice];

    window.localStorage.setItem('cards', JSON.stringify(cards));
  }
</script>

<ul>
  {#each flow as choice}
  <button on:click={() => choose(choice)}>{choice.current}</button>
  {/each}
</ul>