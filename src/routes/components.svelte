<script>
    $: workerData = "test";

    onMount(() => {
        console.log(1);
    });
</script>

<script scope="worker">
    console.log(222);

    return 4456;
</script>

<section>
    {JSON.stringify(workerData)}
</section>
