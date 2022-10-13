<script>
    import {wordToGuess, guess, gameI, colors, board, gameOver, createGrid} from "../store.js";

    const playAgain = async () => {
        const response = await fetch('https://random-word-api.herokuapp.com/word');
        const word = await response.json();
        console.log(word)
        wordToGuess.set(word[0])
        gameI.set({
            att: 0,
            char: 0
        })
        guess.set('')
        colors.set(createGrid(word[0].length))
        board.set(createGrid(word[0].length))
        gameOver.set(false)

    }
</script>

<div class="m-16 text-2xl items-center">
    <h3 class="flex items-center justify-center">Correct word was:&nbsp <b>{$wordToGuess.toUpperCase()}</b></h3>
    <h3 class="flex items-center justify-center mt-5">You guessed:&nbsp <b>{$guess}</b></h3>
    <h3 class="flex items-center justify-center mt-5">Attempts:&nbsp <b>{$gameI.att}</b></h3>
    <h3 on:click={playAgain} class="flex items-center justify-center mt-8 bg-fuchsia-800 h-20 ml-96 mr-96 cursor-pointer">Play again</h3>
</div>