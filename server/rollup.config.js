import express from "express";
import fs from "fs";
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

const PORT = process.env.PORT || 3001;
const production = !process.env.ROLLUP_WATCH;

const components = fs
    .readdirSync( './src' ) // Read ./src
    .filter( e => e.includes( '.svelte' ) ) // Get all svelte files
    .map( e => e.replace( '.svelte', '' ) ); // remove extension

console.log( 'Compiling:', components );
const getComponentConfig = ( component ) => {
    return {
        input: `./src/${ component }.svelte`,
        output: {
            sourcemap: false,
            format: 'esm',
            name: component,
            file: `components/${ component }.js`
        },
        plugins: [
            svelte( { compilerOptions: { dev: !production } } ),
            css( { output: component + '.css' } ),
            resolve( { browser: true, dedupe: [ 'svelte' ] } ),
            commonjs(),
            !production && livereload( './index.html' ),
            production && terser()
        ],
        watch: { clearScreen: true }
    }
}

const app = express();

app.use( express.static( '.' ) );
app.get( '/cpts', ( req, res ) => {
    res.send( components );
} );

export default components.map( getComponentConfig );
app.listen( PORT, () => console.log( "Running at " + PORT ) );