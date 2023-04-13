<nav class="fade-down">
	<section class="ƒ ∆-ct mx-a">
		<div class="ƒ fw4 p5" style="font-size:1.5em;color:#888;">
			<a href="/">
				<img height="24px" class="p-rel" src="/icons/if.svg" alt="Logo" />
				iFactorial: The Bookmaker
			</a>
		</div>
	</section>
	<hr class="w-50 o-33" />
</nav>

<main class="">
	<slot />
</main>

<!-- KEEP IT SIMPLE NO FOOTER -->
<style>
	a img {
		top: 4px;
		aspect-ratio: 1;
	}
	section {
		max-width: calc(1040px + 40px);
	}
	nav {
		align-items: center;
		width: calc(100% - 2rem);
		padding: 0.5rem 1rem;
	}
	main {
		max-width: 1040px;
		margin: 3rem auto;
	}
</style>
