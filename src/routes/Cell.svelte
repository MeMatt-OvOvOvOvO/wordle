<script>
    import {board} from "../store.js";

    export let x
    export let y
    $:letter = $board[y][x]
    board.update((prev)=>{
        const newBoard = prev
        return newBoard
    })
</script>

<div class="w-16 h-16 bg-gray-800 cursor-default text-white m-1 flex items-center justify-center rounded text-4xl">
    { letter }
</div>

<style>
    :global(body.light-mode) div {
		background-color: gray;
		color: white;
	}
</style>
