<script>
    import Book from "./book.svelte";
    function chunk(array, sz) {
        let R = [];
        for (let i = 0; i < array.length; i += sz)
            R.push(array.slice(i, i + sz));

        return R;
    }
    const anyIncludes = (strings, text) =>
        strings.some((string) =>
            string?.toLowerCase()?.includes(text.toLowerCase())
        );

    export let data;

    let search = "";
</script>

<title>Round {data.meta.index} | i!</title>
<meta name="title" content="Round 1" />
<meta name="description" content="The First 100: A lockdown Saga" />

<a href="#" class="rx10 m5 p-fix fw7"> &uarr; </a>
<h1 class="†c w-100">Round {data.meta.index}</h1>
<input
    type="text"
    class="rpm-5 bgf"
    bind:value={search}
    placeholder="Search by Book/Auth..."
/>
<div class="section mx-a w-100 ƒ ƒ∑ ∆-ar">
    {#each data.books.filter( (e) => anyIncludes(Object.values(e), search) ) as book, index}
        <Book {book} {index} />
    {/each}
</div>

<style lang="scss">
    a {
        bottom: 1rem;
        right: 1rem;
        background: var(--theme);
        color: #fff;
        font-size: 2em;
        padding: 0 15px 7px 15px;
        z-index: 33;
    }
    input {
        font-size: 1.25rem;
        width: calc(100% - 20px);
    }
</style>
