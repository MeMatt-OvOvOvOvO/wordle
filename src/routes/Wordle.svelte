<script>
    import {board, gameOver} from "../store.js";
    import Cell from "./Cell.svelte";
    import Keyboard from "./Keyboard.svelte";
    import GameOver from "./GameOver.svelte";
    import {fade} from "svelte/transition"
</script>
{#if $gameOver == true}
    <GameOver/>
{:else}
    <div in:fade={{duration: 800}}>
        <div class="m-8">
            {#each $board as col, y}
                <div class="flex justify-center items-center">
                    {#each col as row, x}
                        <Cell {y} {x}/>
                    {/each}
                </div>
            {/each}
        </div>
        <Keyboard />
    </div>
{/if}
