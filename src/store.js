import { writable } from "svelte/store";

const createGrid = (selNumber) =>{
    const grid = []
    for(let i = 0; i < selNumber+1; i++){
        grid.push([])
        for (let x = 0; x < selNumber; x++){
            grid[i][x] = ''
        }
    }
    return grid
}

let url_string = window.location
let url = new URL(url_string)
export let num = parseInt(url.searchParams.get("num"))

export const gameI = writable({
    char: 0,
    att: 0
})
export const board = writable(createGrid(num))