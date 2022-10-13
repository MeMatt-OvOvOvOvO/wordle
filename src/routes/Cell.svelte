<script>
    import {board,colors} from "../store.js";

    export let x
    export let y
    $:col = $colors[y][x]
    $:letter = $board[y][x]
    board.update((prev)=>{
        const newBoard = prev
        return newBoard
    })
</script>

    <div class={`cell ${col}`}>
        { letter }
    </div>

<style>
    :global(body.light-mode) div {
		background-color: gray;
		color: white;
	}

    .cell{
        width: 50px;
        height: 50px;
        background-color: #1F2937;
        cursor: default;
        color: white;
        margin: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: xx-large;
        border-radius: 0.25rem;
        transition: background-color .7s;
    }

    .correct{
        background-color: green;
    }
    .close{
        background-color: orange;
    }
    .incorrect{
        background-color: #686E70;
    }
</style>
