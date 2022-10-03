<script>
    let url_string = window.location;
    let url = new URL(url_string);
    let num = url.searchParams.get("num");
    console.log(num)

    async function fetchJSON() {
        const response = await fetch('https://random-word-api.herokuapp.com/word');
        const word = await response.json();
        return word;
    }

    fetchJSON().then(word => {
        word
        console.log(word)
    });











    let arr = []
    for(let i = 0; i < num; i++){
        arr.push(i)
    }

</script>
<tbody>
    <tr>
        {#each arr as cell}
            <td class="td">{cell}</td>
        {/each}
    </tr>
    <tr>
        {#each arr as cell}
            <td class="td">{cell}</td>
        {/each}
    </tr>
    <tr>
        {#each arr as cell}
            <td class="td">{cell}</td>
        {/each}
    </tr>
    <tr>
        {#each arr as cell}
            <td class="td">{cell}</td>
        {/each}
    </tr>
    <tr>
        {#each arr as cell}
            <td class="td">{cell}</td>
        {/each}
    </tr>
    <tr>
        {#each arr as cell}
            <td class="td">{cell}</td>
        {/each}
    </tr>
</tbody>


