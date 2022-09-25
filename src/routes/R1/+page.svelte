<script>
    import Head from "@components/head.svelte";
    import Chip from "@components/chip.svelte";
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

<Head title="Round 1" description="The First 100: A lockdown Saga" />
<a href="#" class="rx10 m5 p-fix fw7"> &uarr; </a>
<h1 class="†c w-100">Round 1: The 100</h1>
<input
    type="text"
    class="rpm-5 bgf"
    bind:value={search}
    placeholder="Search by Book/Auth..."
/>
{#each chunk(data.books, 20).slice(0, 6) as part, series}
    <div class="section mx-a w-100 ƒ ƒ∑ ∆-ar">
        {#each part.filter( (e) => anyIncludes([e.name, e.author, e.description], search) ) as book, index}
            {@const { OLID, again, author, name, description, tags, cover } =
                book}
            <div id={OLID} class="book bgf ƒ rpm-5 p-rel">
                {#if cover != 0}
                    <img
                        id={`R01${series * 20 + index}`}
                        class="rx5"
                        src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`}
                        alt={name}
                    />
                {:else}
                    <img class="rx5" src="/icons/if.svg" alt={name} />
                {/if}
                <div class="w-100 ƒ-col ∆-bw">
                    <div>
                        <span class="fw6">{name} - <i>{author}</i></span> <br />
                        <p>
                            {description}
                        </p>
                    </div>
                    <div class="tags ƒ" style="justify-content:end">
                        {#if tags === "®"}
                            <Chip color="green" text="Recommended" />
                        {:else if tags.includes("MORE")}
                            <Chip color="blue">
                                <a href={tags.split("::")[1].trim()}>See More</a
                                >
                            </Chip>
                        {:else if tags != 0}
                            {tags}
                        {/if}

                        {#if again.toLowerCase() === "yes"}
                            <Chip color="yellow" text="Very Dense" />
                        {:else if again.toLowerCase() === "maybe"}
                            <Chip color="yellow" text="Dense" />
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
{/each}

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
    img {
        height: auto;
        max-height: 200px;
        aspect-ratio: 1 !important;
        margin-right: 10px;
        object-fit: cover;
    }
    .book {
        z-index: 1;
        width: calc(50% - 20px);
    }

    @media (max-width: 768px) {
        .book {
            width: calc(100% - 20px);
            margin: 5px 10px;
        }
        img {
            max-width: 120px;
            aspect-ratio: 3/4 !important;
        }
    }
</style>
