<script>
  export let modifier
</script>

<div class="box box--{modifier}">
  <slot></slot>
</div>

<style>
  .box {
    width: 300px;
    border: 1px solid #aaa;
    border-radius: 2px;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
    padding: 1em;
    margin: 0 0 1em 0;
  }
  .box--too-sour-acidic { background-color: hsl(10, 60%, 40%) }
  .box--muddy-sour { background-color: hsl(15, 60%, 40%) }
  .box--high-strength-muddy { background-color: hsl(20, 60%, 40%)  }
  .box--muddy-bitter { background-color: hsl(25, 60%, 40%) }
  .box--bitter { background-color: hsl(30, 60%, 40%) }
  .box--watery-bitter { background-color: hsl(35, 60%, 40%) }
  .box--low-strength-watery { background-color: hsl(40, 60%, 40%) }
  .box--watery-sour { background-color: hsl(45, 60%, 40%) }
  .box--perfection { background-color: hsl(50, 60%, 40%) }
</style>