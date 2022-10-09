<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import { Router, Link, Route } from "svelte-routing";
  export let url = "";
  import First from './routes/First.svelte';
  import Wordle from './routes/Wordle.svelte';
</script>

<main>
  <nav class="bg-gray-800 text-white text-lg text-center p-4">Worlde- Mateusz Janicki</nav>
</main>

<Router url="{url}">
  <div>
    <Route path="/" component="{First}" />
    <Route path="wordle" component="{Wordle}" />
  </div>
</Router>
