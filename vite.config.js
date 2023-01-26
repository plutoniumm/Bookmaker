import { sveltekit } from '@sveltejs/kit/vite';
import dsv from '@rollup/plugin-dsv';
import autoProcess from "svelte-preprocess";

const config = {
	preprocess: [ autoProcess( { sourceMap: false } ) ],
	plugins: [
		dsv(),
		sveltekit(),
	],
	server: { port: 3000 }
};

export default config;
