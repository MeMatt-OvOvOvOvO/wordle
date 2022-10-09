<script>
    import Key from "./Key.svelte";
    import {board, gameI, num} from "../store.js";

    const r1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const r2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const r3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']

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
        let { att, char} = $gameI

        if (char !== num) return

        gameI.set({
            att: att + 1,
            char: 0
        })

    }

    const keyPress = (key) =>{
        if (key == "DELETE"){
            pressDel()
        }else if(key == "ENTER"){
            pressEnter()
        }else{
            let {att, char} = $gameI
            if(char > num-1) return

            board.update((prevB)=>{
                const newBoard = prevB
                newBoard[att][char++]= key
                return newBoard
            })

            gameI.set({att,char})
        }
    }
</script>

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