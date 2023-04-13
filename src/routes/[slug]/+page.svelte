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
