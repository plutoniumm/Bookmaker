<script>
	import Nav from "@global/nav.svelte";
</script>

<Nav />
<main class="">
	<slot />
</main>

<!-- KEEP IT SIMPLE NO FOOTER -->
<style>
	:global(:root) {
		--theme-u: #4cf;
		--theme: #2af;
		--theme-d: #08f;
	}
	:global(.katex-html) {
		display: none;
	}
	main {
		max-width: 1040px;
		margin: 3rem auto;
	}
</style>
