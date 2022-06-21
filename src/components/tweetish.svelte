<script>
    export let //
        data;

    import { processPost } from "$lib/feed";

    const { source, name, description, image, iframe, tag } = processPost(data);
</script>

<article class="shadow rx10 m10 p20 fade-right bgf">
    <about class="ƒ ∆-bw">
        <div>from {source.name}</div>
        <div class="tag rx5 p5">{tag}</div>
    </about>
    <header>
        <p>{description}</p>
    </header>
    <div>
        {#if iframe}
            <iframe
                class="w-100 hero rx5"
                src={iframe.url}
                frameborder="0"
                allowfullscreen
            />
        {:else}
            <img class="w-100 hero rx5" src={image} alt="" />
        {/if}
        <h1 class="p0 m0">{name}</h1>
    </div>
</article>

<style>
    article {
        margin-left: 0;
        max-width: 500px;
    }
    .hero {
        aspect-ratio: 16/9;
    }
    .tag {
        background: var(--theme-gradient);
        color: #fff;
        font-size: 0.8rem;
    }
</style>
