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

<h3>Please choose number of letters in word: </h3>
<select class="select" name="letterNumb" id="letterNumb" on:change={selectChange}>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
</select><br><br>
<button class="butek" on:click={butekClick}>Graj</button>
