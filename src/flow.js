const increaseYield = 'Increase Yield';
const decreaseYield = 'Decrease Yield';
const grindCoarser = 'Grind Coarser';
const grindFiner = 'Grind Finer';
const perfection = 'The Perfect Coffee';

export default [
  { handle: 'too-sour-acidic', current: 'Too Sour / Acidic', recommendations: [increaseYield] },
  { handle: 'watery-sour', current: 'Watery and Sour', recommendations: [grindFiner, increaseYield] },
  { handle: 'muddy-sour', current: 'Muddy and Sour', recommendations: [increaseYield, grindCoarser] },
  { handle: 'low-strength-watery', current: 'Low Strength / Watery', recommendations: [grindFiner] },
  { handle: 'perfection', current: 'Ahh Perfection', recommendations: [perfection] },
  { handle: 'high-strength-muddy', current: 'High Strength / Muddy', recommendations: [grindCoarser] },
  { handle: 'watery-bitter', current: 'Watery and Bitter', recommendations: [decreaseYield, grindFiner] },
  { handle: 'muddy-bitter', current: 'Muddy and Bitter', recommendations: [decreaseYield, grindCoarser] },
  { handle: 'bitter', current: 'Too Bitter', recommendations: [decreaseYield] }
];