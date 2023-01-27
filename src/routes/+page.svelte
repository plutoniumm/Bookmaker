<script>
	export let data;
</script>

<section>
	<h3>Idk what to say, there's some reading stuff ok? Its upto you</h3>
	<br />
	<div class="ƒ">
		{#each [1, 2, 3] as round}
			<a class="rpm-10 bgf ƒ-col" href={"/R" + round}>
				<div class="p20 ƒ-col ∆-ct fw1 year">
					{2020 + round}
				</div>
				<div class="†c name p5">Round {round}</div>
			</a>
		{/each}
	</div>
	<!-- <a href="/R2">R2</a> -->
</section>

<style lang="scss">
	.year {
		color: #888;
		width: calc(100% - 40px);
		align-items: center;
		font-size: 4rem;
	}
	.name {
		height: calc(10px + 1em);
	}
	a {
		width: 300px;
		height: 150px;
		display: block;
		border: 1px solid transparent;
		transition: all 0.1s ease;
		&:hover {
			border: 1px solid var(--theme);
		}
	}
</style>
