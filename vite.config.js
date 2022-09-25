import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import dsv from '@rollup/plugin-dsv';
// Preproces
import autoProcess from "svelte-preprocess";
import AutoImport from "unplugin-auto-import/vite";

const config = {
	preprocess: [ autoProcess( { sourceMap: false } ) ],
	plugins: [
		AutoImport( {
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.svelte$/, // .svelte
			],
			imports: {
				"svelte": [
					"onMount",
				]
			},
			vueTemplate: false,
		} ),
		dsv(),
		sveltekit(),
	],
	resolve: {
		alias: {
			"@components": resolve( "/src/components" )
		}
	},
	server: { port: 3000 }
};

export default config;
