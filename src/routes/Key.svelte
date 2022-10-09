<script>
    export let char
    export let keyPress
</script>
<div on:click={() => keyPress(char)} class="bg-gray-600 hover:bg-fuchsia-800 m-1 p-3 rounded cursor-pointer">
    { char }
</div>