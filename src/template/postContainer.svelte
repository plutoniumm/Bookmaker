<script>
    export let //
        type = "std",
        href = null;
</script>

{#if type === "link"}
    <a
        rel="external"
        {href}
        class="ƒ-col cont rx5 fade-right"
        sveltekit:prefetch
    >
        <slot />
    </a>
{:else}
    <div class="ƒ-col rx5 cont fade-right">
        <slot />
    </div>
{/if}

<style lang="scss">
    .cont {
        width: 320px;
        max-height: 430px;
        content-visibility: auto;
        contain-intrinsic-size: 430px;
        background: var(--theme-gradient);
        color: #fff;
        overflow: hidden;
        box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07),
            1px 6px 12px rgba(39, 44, 49, 0.04);
    }
</style>
