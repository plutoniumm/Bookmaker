<script>
	const SITE_URL = "books.nukes.in";
	const SITE_TITLE = "Books";
	const CFG = {
		private: false,
	};

	export let //
		title,
		description,
		image = "/icons/if.svg";

	const mod_title = `${SITE_TITLE} | ${title}`;
</script>

<head>
	<!-- Primary Meta Tags -->
	<title>{mod_title}</title>
	<meta name="title" content={mod_title} />
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={mod_title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={new URL(image, SITE_URL)} />

	<!-- Privacy & Anti-SEO -->
	{#if CFG.private}
		<meta name="google" content="nositelinkssearchbox" />
		<meta name="google" content="nopagereadaloud" />
		<meta name="robots" content="noindex" />
		<meta name="rating" content="adult" />
		<meta name="twitter:dnt" content="twitter:dnt" />
	{/if}
</head>
