<script>
    import Book from "./book.svelte";
    import Fuse from "fuse.js";

    export let data;

    const options = {
        isCaseSensitive: false,
        shouldSort: false,
        minMatchCharLength: 3,
        useExtendedSearch: false,
        keys: ["author", "name", "description", "tags"],
    };
    const fuse = new Fuse(data.books, options);

    let search = "";

    const round = data.meta.index;
</script>

<title>Round {round} | i!</title>
<meta name="title" content="Round {round}" />
<meta
    name="description"
    content={`List of readings in the year ${2020 + round}`}
/>

<a href="#top" class="rx10 m5 p-fix fw7"> &uarr; </a>
<h1 id="top" class="†c w-100">Round {round}</h1>
<input
    type="text"
    class="rpm-5 bgf"
    bind:value={search}
    placeholder="Search by Book/Auth..."
/>
<div class="section mx-a w-100 ƒ ƒ∑ ∆-ar">
    {#if !search.length}
        {#each data.books as book, index}
            <Book {book} {index} />
        {/each}
    {:else}
        {#key search}
            {#each fuse.search(search) as result}
                <Book book={result.item} index={result.item.index} />
            {/each}
        {/key}
    {/if}
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
