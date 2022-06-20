<script>
    import Tex from "./Katex.svelte";
    import Container from "@templates/postContainer.svelte";
    export let //
        post = {};

    const {
        title = "What is i!",
        equation = "i!",
        description = "A simple, yet powerful, math equation solver.",
        date = new Date(),
        area = "General",
    } = post.meta;

    const options = { year: "numeric", month: "long", day: "numeric" };
</script>

<Container type="link" href={post.path}>
    <div class="w-100" style="height: 200px;">
        <div id="hero_{title.replaceAll(' ', '-')}" class="ƒ ∆-ct w-100 h-100">
            <Tex eq={equation} />
        </div>
    </div>
    <div class="p20 body">
        <div class="title fw6">{@html title}</div>
        <p class="description fw3">{description.slice(0, 100)}</p>
        <div class="ƒ ∆-bw">
            <span class="date" style="font-size:0.9em;"
                >{new Date(date).toLocaleDateString("en-GB", options)}</span
            >
            <span class="area">{area}</span>
        </div>
    </div>
</Container>

<style lang="scss">
    [id^="hero"] {
        background: var(--theme-gradient);
        color: #fff;
        align-items: center;
        font-size: 2rem;
    }
    .body {
        background: #fff;
        color: #000;
        & .title {
            font-size: 1.33rem;
            padding: 5px 0;
            height: 2.25em;
        }
        & .description {
            height: 5rem;
            color: #444;
            font-family: Georgia, serif;
        }
        & .date {
            color: var(--theme);
        }
    }
</style>
