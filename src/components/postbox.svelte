<script>
    export let //
        title = "i!",
        url = "#",
        equation = "i!",
        description = "A simple, yet powerful, math equation solver.",
        date = new Date(),
        area = "General";
</script>

<a
    rel="external"
    class="ƒ-col m10 rx5 fade-right"
    href={url}
    sveltekit:prefetch
>
    <div class="w-100" style="height: 200px;">
        <!-- <div id="hero_{{id}}" class="ƒ ∆-ct w-100 h-100" style="align-items: center;background: #f5f5f7;"> -->
        <div id="hero_{title.replaceAll(' ', '-')}" class="ƒ ∆-ct w-100 h-100">
            {equation}
        </div>
    </div>
    <div class="p20">
        <div class="title fw6">{title}</div>
        <p class="description fw3">{description.slice(0, 100)}</p>
        <div class="ƒ ∆-bw">
            <span class="date" style="font-size:0.9em;">{date}</span>
            <span class="area">{area}</span>
        </div>
    </div>
</a>

<style lang="scss">
    [id^="hero"] {
        background: linear-gradient(155deg, #2af, #6ef);
        color: #fff;
        align-items: center;
    }
    a {
        width: 320px;
        background: #fff;
        overflow: hidden;
        box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07),
            1px 6px 12px rgba(39, 44, 49, 0.04);
        & .title {
            font-size: 1.33rem;
            padding: 5px 0;
            height: 2.25em;
        }
        & img {
            background: #fefefa;
            width: 320px;
            height: 200px;
            object-fit: cover;
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
