<script>
    console.log(2);
</script>

<article>
    <slot />
</article>

<style lang="scss">
    article {
        font-size: 19px;
        color: #3c484e;
        line-height: 1.75;
        & h1,
        & h2,
        & h3,
        & h4,
        & h5,
        & h6 {
            font-family: "Helvetica", sans-serif;
        }
    }
</style>
