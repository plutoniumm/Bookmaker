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
		--theme-gradient: linear-gradient(155deg, #2af, #6ef);
	}
	:global(.katex-html) {
		display: none;
	}
	main {
		-webkit-font-smoothing: antialiased;
		color: rgb(29, 29, 31);
		font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue",
			Helvetica, Arial, sans-serif;
		font-style: normal;
		font-synthesis: none;
		font-weight: 400;
		letter-spacing: 0.23px;
		max-width: 1040px;
		margin: 3rem auto;
	}
</style>
