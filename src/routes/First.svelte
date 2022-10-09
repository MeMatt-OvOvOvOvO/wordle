<script>
    let numberLetters = 4
    const selectChange = (e) =>{
        numberLetters = e.target.value
    }
    const butekClick = (e) =>{
        console.log(numberLetters)
        window.location.href="wordle?num="+numberLetters;
    }

</script>
<div class="m-8 flex items-center justify-center">
    <h1 class="w-80 h-12 text-center flex flex-col h-screen justify-center items-center bg-gray-800 text-white rounded">Please choose number of letters in word: </h1>
    <select class="w-16 h-12 p-2 m-8 bg-gray-800 text-white rounded" name="letterNumb" id="letterNumb" on:change={selectChange}>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
    </select>
    <button class="w-16 h-12 bg-gray-800 text-white rounded" on:click={butekClick}>Start</button>
</div>

