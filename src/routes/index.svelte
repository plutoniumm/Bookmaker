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
	<h1>What's Happening?</h1>
	<Posts {posts} />
	<hr class="w-50 o-25" style="margin: 3rem auto;" />
	<h1>Feed</h1>
	<Feed />
</section>

<style>
</style>
