<script>
    import katex from "katex";
    export let //
        lg = false,
        eq = "i!";

    const options = {
        displayMode: lg,
        throwOnError: false,
    };

    $: katexString = katex.renderToString(eq, options);
</script>

{@html katexString}
