<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import { Router, Link, Route } from "svelte-routing";
  export let url = "";
  import First from './routes/First.svelte';
  import Wordle from './routes/Wordle.svelte';
</script>

<Router url="{url}">
  <div>
    <Route path="/" component="{First}" />
    <Route path="wordle" component="{Wordle}" />
  </div>
</Router>
