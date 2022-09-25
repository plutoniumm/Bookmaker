<script>
	const SITE_URL = "books.nukes.in";
	const SITE_TITLE = "Books";
	const CFG = {
		private: false,
	};

	export let //
		title,
		description,
		image = "/placeholder-social.jpg";

	const mod_title = `${SITE_TITLE} | ${title}`;

	const privacyTags = [
		{
			name: "google",
			content: "nositelinkssearchbox",
		},
		{
			name: "google",
			content: "nopagereadaloud",
		},
		{
			name: "robots",
			content: "noindex",
		},
		{
			name: "twitter:dnt",
			content: "on",
		},
		{
			name: "rating",
			content: "adult",
		},
	];
</script>

<!-- Primary Meta Tags -->
<title>{mod_title}</title>
<meta name="title" content={mod_title} />
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={SITE_URL} />
<meta property="og:title" content={mod_title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(image, SITE_URL)} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={SITE_URL} />
<meta property="twitter:title" content={mod_title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={new URL(image, SITE_URL)} />

<!-- Privacy & Anti-SEO -->
{#if CFG.private}
	{#each privacyTags as item}
		<meta name={item.name} content={item.content} />
	{/each}
{/if}
