import { writable } from "svelte/store";
export let cosss = 'zwykla'
let files = []
async function fetchJSON() {
    const response = await fetch('https://random-word-api.herokuapp.com/word');
    let word = await response.json();

    let res1 = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word[0])

    while(res1.ok === false){
        const response1 = await fetch('https://random-word-api.herokuapp.com/word');
        word = await response1.json();
        res1 = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word[0])
    }

    return word;
}

async function wczytaj(){
    const text = await files[0].text()
    let json = JSON.parse(text)
    console.log(json)
    return json
}

export const createGrid = (selNumber) =>{
    const grid = []
    for(let i = 0; i < selNumber+1; i++){
        grid.push([])
        for (let x = 0; x < selNumber; x++){
            grid[i][x] = ''
        }
    }
    return grid
}

let wordd = await fetchJSON()

export const gameI = writable({
    char: 0,
    att: 0
})

export const gameOver = writable(false)
export const wordToGuess = writable(wordd[0])
export const guess = writable('')
export const colors = writable(createGrid(wordd[0].length))
export const board = writable(createGrid(wordd[0].length))
export let arrWithGoodChars = []
export let arrWithChars = []
export let arrWithChars1 = []