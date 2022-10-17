<script>
  import { Router, Link, Route } from "svelte-routing";
  import {wordToGuess} from "./store.js";
  export let url = "";
  import Wordle from './routes/Wordle.svelte';
    const changeTheme = () =>{
      window.document.body.classList.toggle('light-mode')
    }
    const change = () =>{
      let slowko = $wordToGuess
      console.log(slowko.slice(0, slowko.length / 2))
      return slowko.slice(0, slowko.length / 2)
    }
</script>

<main>
  <nav class="bg-gray-800 text-white text-lg text-center p-4">Worlde- Mateusz Janicki
    <div class="absolute right-0 top-0 mt-4 mr-4" on:click={changeTheme}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>     
    </div>
    <div class="absolute right-0 top-0 mt-4 mr-14" on:click={change}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    </div>
  </nav>
</main>

<Router url="{url}">
  <div>
    <Route path="/" component="{Wordle}" />
  </div>
</Router>

<style>
  :global(body) {
		background-color: #1F2937;
		color: white;
		transition: background-color 0.3s
	}
	:global(body.light-mode) {
		background-color: white;
		color: black;
	}
</style>
