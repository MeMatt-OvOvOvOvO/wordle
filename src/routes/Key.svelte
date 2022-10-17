<script>
    import {arrWithChars, arrWithGoodChars} from "../store.js";

    export let char
    export let keyPress
    // console.log(arrWithGoodChars,arrWithChars)
</script>
<div on:click={() => keyPress(char)} class="bg-gray-500 hover:bg-fuchsia-800 m-1 p-3 rounded cursor-pointer">
    { char }
</div>


<style>
    :global(body.light-mode) div {
		background-color: black;
		color: white;
	}
    :global(body.light-mode) div:hover {
        background-color: plum;
    }
</style>
