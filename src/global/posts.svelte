<script>
    import Post from "@components/postbox.svelte";
    import Container from "@templates/postContainer.svelte";

    export let posts = [];
</script>

<div class="ƒ ƒ∑ ∆-bw">
    <Container>
        <div class="p10 †c" style="height:30%;">
            <div class="fw7 p20" style="font-size: 1.5rem;">
                From The Papyrus
            </div>
            <img
                width="100px"
                src="@icons:sys/archive.svg"
                alt="Infinity Symbol"
            />
        </div>
        <div class="p20 †c" style="height:70%;">
            <ul class="m0 p0" id="archive_links">
                {#each posts.slice(0, 3) as post, i}
                    <li class="p20 m0">
                        <a href="/{post.path}">{@html post.meta.title}</a>
                        {#if i !== 3}
                            <hr class="w-33" style="border: 1px solid #fff8" />
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
    </Container>

    {#each posts as post}<Post {post} /> {/each}
</div>

<style lang="scss">
    #archive_links {
        & li {
            list-style-type: none;
            font-size: 1.25rem;
            &:hover a {
                text-decoration: underline;
            }
        }
    }
</style>
