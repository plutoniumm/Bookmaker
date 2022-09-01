import { sveltekit } from '@sveltejs/kit/vite';
import mdx from '@mdx-js/rollup';
// Preproces
import autoProcess from "svelte-preprocess";
import AutoImport from "unplugin-auto-import/vite";
// CONFIG FILES
import ALIASES from "./config/alias.js";
import AUTO_IMPORTS from "./config/auto-import.json" assert { type: "json" };

import rehypeKatex from 'rehype-katex';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkMath from 'remark-math';
const options = {
	remarkPlugins: [ remarkMath, remarkMdxFrontmatter ],
	rehypePlugins: [ rehypeKatex ],
};

const config = {
	extensions: [ ".svelte", ".svelte.md", ".mdx", ".svx" ],
	preprocess: [ autoProcess( { sourceMap: false } ) ],
	plugins: [
		AutoImport( {
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.svelte$/, // .svelte
			],
			imports: AUTO_IMPORTS,
			vueTemplate: false,
		} ),
		mdx( options ),
		sveltekit(),
	],
	resolve: { alias: ALIASES },
	server: { port: 3000 }
};

export default config;
