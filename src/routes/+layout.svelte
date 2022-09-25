<script>
	import Nav from "@components/nav.svelte";
</script>

<Nav />
<main class="">
	<slot />
</main>

<!-- KEEP IT SIMPLE NO FOOTER -->
<style>
	main {
		max-width: 1040px;
		margin: 3rem auto;
	}
</style>
