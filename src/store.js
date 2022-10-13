import { writable } from "svelte/store";


async function fetchJSON() {
    const response = await fetch('https://random-word-api.herokuapp.com/word');
    const word = await response.json();
    return word;
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
console.log(wordd)

export const gameI = writable({
    char: 0,
    att: 0
})
export const gameOver = writable(false)
export const wordToGuess = writable(wordd[0])
export const guess = writable('')
export const colors = writable(createGrid(wordd[0].length))
export const board = writable(createGrid(wordd[0].length))