import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import dsv from '@rollup/plugin-dsv';
// Preproces
import autoProcess from "svelte-preprocess";

const config = {
	preprocess: [ autoProcess( { sourceMap: false } ) ],
	plugins: [
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
