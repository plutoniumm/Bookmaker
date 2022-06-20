<script context="module">
	export const load = async ({ fetch }) => {
		const posts = await fetch("/api/posts").then((r) => r.json());
		return { props: { posts } };
	};
</script>

<script>
	import Feed from "@global/feed.svelte";
	import Posts from "@global/posts.svelte";
	export let posts = [];
</script>

<title />

<section>
	<Posts {posts} />
	<Feed />
</section>

<style>
</style>
