<script>
    import Key from "./Key.svelte";
    import { writable } from 'svelte/store';
    import Modal from 'svelte-simple-modal';
    const modal = writable(null);
    import {board, colors, gameI, wordToGuess, guess, gameOver} from "../store.js";
    import Popup from "./Popup.svelte";

    const r1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const r2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const r3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']

    let mess = ''



    const pressDel = () => {
        if ($gameI.char === 0)return

        gameI.update((prev)=>{
            return{
                char: prev.char-1,
                att: prev.att
            }
        })

        board.update((prevB)=>{
            const newBoard = prevB
            newBoard[$gameI.att][$gameI.char] = ''
            return newBoard
        })
    }

    const pressEnter = () => {

        mess = 'za malo slow'

        let {att, char} = $gameI

        if (char !== $wordToGuess.length){
            modal.set(Popup)
            return
        }

        gameI.set({
            att: att + 1,
            char: 0
        })

        const prevAtt = $gameI.att - 1
        const newColorsB = $colors

        const duplicatedChars = new Set()

        for (let i = 0; i < $wordToGuess.length; i++){
            let char = $board[prevAtt][i].toUpperCase()
            guess.update((prevChars)=>prevChars+char)
            if ($wordToGuess[i].toUpperCase() === char){
                newColorsB[prevAtt][i] = 'correct'
            }else if($wordToGuess.toUpperCase().includes(char)){
                if(!duplicatedChars.has(char)){
                    newColorsB[prevAtt][i] = 'close'
                    duplicatedChars.add(char)
                }
            }else{
                newColorsB[prevAtt][i] = 'incorrect'
            }

        }

        colors.set(newColorsB)

        if ($guess == $wordToGuess.toUpperCase() || prevAtt == $wordToGuess.length){
            gameOver.set(true)
        }else{
            guess.set('')
        }
    }

    const keyPress = (key) =>{
        if (key == "DELETE"){
            console.log('delete')
            pressDel()
        }else if(key == "ENTER"){
            console.log('enter')
            pressEnter()
        }else{
            let {char, att} = $gameI
            console.log($wordToGuess.length-1)
            if(char > $wordToGuess.length-1) return

            board.update((prevB)=>{
                const newBoard = prevB
                newBoard[att][char++]= key
                return newBoard
            })

            gameI.set({char,att})
        }
    }
</script>

<Modal mess={mess} show={$modal} />

<div class="fixed bottom-10 left-1/2">
    <div class="h-10 w-10 text-white flex items-center justify-center">
        {#each r1 as char}
            <Key {char} {keyPress}/>
        {/each}
    </div>
    <div class="h-10 mt-4 w-10 text-white flex items-center justify-center">
        {#each r2 as char}
            <Key {char} {keyPress}/>
        {/each}
    </div>
    <div class="h-10 mt-4 w-10 text-white flex items-center justify-center">
        {#each r3 as char}
            <Key {char} {keyPress}/>
        {/each}
    </div>
</div>