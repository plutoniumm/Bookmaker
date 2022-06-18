<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                message: error.message,
                status, // same as status: status
            },
        };
    }
</script>

<script>
    export let message;
    export let status;
</script>

{#if status == 404}
    <div class="container">
        <h1 style="font-size: 4em;">110010100</h1>
        <h1 class="hover">That's 404 in binary</h1>

        <p><strong>Page not found :(</strong></p>
        <p>The requested page could not be found.</p>
    </div>
{:else}{/if}

<style>
    .container {
        margin: 10px auto;
        max-width: 600px;
        text-align: center;
    }

    h1 {
        margin-top: 30px;
    }
</style>
