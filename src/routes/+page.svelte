<section>
	<h3>Reading List by Year</h3>
	<br />
	<div class="f">
		{#each [1, 2, 3] as round}
			<a class="rpm-10 bgf f-col" href={"/R" + round}>
				<div class="p20 f-col j-ct fw1 year">
					{2020 + round}
				</div>
				<div class="tc name p5">Round {round}</div>
			</a>
		{/each}
	</div>
	<ul>
		<li>
			I am considering making a global search by author or something like that.
		</li>
	</ul>
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
