<script>
    export let //
        type = "std",
        href = null;
</script>

{#if type === "link"}
    <a
        rel="external"
        {href}
        class="ƒ-col shadow cont rx5 fade-right"
        sveltekit:prefetch
    >
        <slot />
    </a>
{:else}
    <div class="ƒ-col shadow rx5 cont fade-right">
        <slot />
    </div>
{/if}

<style lang="scss">
    .cont {
        width: 320px;
        margin-top: 15px;
        max-height: 430px;
        content-visibility: auto;
        contain-intrinsic-size: 430px;
        background: var(--theme-gradient);
        color: #fff;
        overflow: hidden;
    }
</style>
