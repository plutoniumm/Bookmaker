<script>
    export async function load({ page, session }) {
        const { post } = page.params;
        if (response.status === 200) {
            return {
                props: {
                    id: post,
                },
            };
        } else {
            return { props: { id: [] } };
        }
    }
</script>
