<script>
    import { board } from "../store.js";
    import Cell from "./Cell.svelte";
    import Keyboard from "./Keyboard.svelte";

    let url_string = window.location
    let url = new URL(url_string)
    let num = parseInt(url.searchParams.get("num"))
    console.log(num+1)

    async function fetchJSON() {
        const response = await fetch('https://random-word-api.herokuapp.com/word');
        const word = await response.json();
        return word;
    }

    fetchJSON().then(word => {
        word
        console.log(word)
    });



</script>
<div class="m-16">
    {#each $board as col, y}
        <div class="flex justify-center items-center">
            {#each col as row, x}
                <Cell {y} {x}/>
            {/each}
        </div>
    {/each}
</div>

<Keyboard />
