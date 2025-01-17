<script>
	import { START_YR } from "./data/conf";

	export let data = [];

	const files = data.files.map((e) => e.replace(".csv", "").replace("R", ""));
</script>

<section class="f fw j-ar">
	<h3 class="w-100 tc">Reading List by Year</h3>

	{#each files as round, index}
		<a class="rpm-10 f-col" href={"/R" + round} style="background: #fff;">
			<div class="p20 f-col j-ct fw1 year">
				{START_YR + index}
			</div>
			<div class="tc name fw4 p5">Round {index + 1}</div>
		</a>
	{/each}
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
	li {
		line-height: 1.15em;
		padding: 7px;
		font-size: 1.12em;
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
