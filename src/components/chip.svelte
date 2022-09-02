<script>
    export let //
        color = "green",
        text = null;

    // COlor Scheme: https://www.material-tailwind.com/docs/html/chip
    let style = "";
    if (color === "red") style += `--bg:#ffcdd2;--col:#f44336;`;
    if (color === "blue") style += `--bg:#bbdefb;--col:#2196f3;`;
    if (color === "green") style += `--bg:#c8e6c9;--col:#4caf50;`;
    if (color === "yellow") style += `--bg:#ffe0b2;--col:#ff9800;`;
</script>

<div class="chip rx10 m5 fw5" {style}>
    {#if text}
        {text}
    {:else}
        <slot />
    {/if}
</div>

<style>
    .chip {
        display: inline;
        background: var(--bg);
        color: var(--col);

        font-size: 0.75em;
        padding: 3px 10px;
    }
</style>
