<script>
    import katex from "katex";
    export let data;

    const {
        incomplete = true,
        area = "Mathematics",
        description = "",
        equation = "e^{iπ} + 1 = 0",
        title = "",
    } = data.file;
</script>

<div class="w-100 area fw5"><i>{area}:</i> {@html title}</div>
<div class="hero ƒ ∆-ct rx5">
    {@html katex.renderToString(equation)}
</div>
{description}
<article>
    {@html data.content}
</article>

<style>
    .hero {
        margin: 10px 0;
        padding: 20px 0;
        font-size: 3rem;
        align-items: center;
        min-height: 120px;
        width: 100%;
        color: #fff;
        background: var(--theme-gradient);
    }
    .area {
        color: #444;
    }
</style>
