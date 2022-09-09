---
	// Import the global.css file here so that it is included on
	// all pages through the use of the <BaseHead /> component.
	import { SITE_TITLE, SITE_URL, CFG } from '@';

	export interface Props {
		title: string;
		description: string;
		image?: string;
		private?: boolean;
	}

	const { title, description, image = '/placeholder-social.jpg' } = Astro.props;
	const mod_title = `${SITE_TITLE} | ${title}`;

	const privacyTags = [
		{
			name: "google",
			content: "nositelinkssearchbox"
		},
		{
			name: "google",
			content: "nopagereadaloud"
		},
		{
			name: "robots",
			content: "noindex"
		},
		{
			name: "twitter:dnt",
			content: "on"
		},
		{
			name: "rating",
			content: "adult"
		},
	]
---

<!-- Preconnects -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin comment="for IBM Plex">
<link rel="preconnect" href="https://fonts.googleapis.com" comment="for IBM Plex">
<link rel="preconnect" href="https://api.nukes.in/frontier/">

<!-- StyleSheets -->
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,300;0,400;0,700;1,400&display=swap"
	rel="stylesheet">
<link rel='stylesheet' href='https://api.nukes.in/cms/css?name=keyframes.css'>
<link rel='stylesheet' href='https://api.nukes.in/cms/css?name=global.css'>
<link rel="stylesheet" href="/assets/global.css">

<script defer src="/assets/global.js"></script>

<!-- Global Metadata -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="icon" type="image/svg+xml" href="/astro.svg" />
<meta name="generator" content={Astro.generator} />

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
{CFG.private && privacyTags.map((item) =>
<meta name={item.name} content={item.content} />
)}