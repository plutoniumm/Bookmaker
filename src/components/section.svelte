<script>
    import Post from "@components/tweetish.svelte";
    const pad = (num) => (num < 10 ? `00${num}` : num < 100 ? `0${num}` : num);

    export let //
        id = 0;

    const getter = fetch(`/feed/${pad(id)}.json`).then((res) => res.json());
</script>

<section>
    {#await getter then posts}
        {#each posts as post}
            <Post data={post} />
        {/each}
    {/await}
</section>
