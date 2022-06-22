import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

import fs from 'fs';

const production = !process.env.ROLLUP_WATCH;

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
            !production && serve(),
            !production && livereload( './index.html' ),
            production && terser()
        ],
        watch: { clearScreen: true }
    }
}


function serve () {
    let server;

    function toExit () { if ( server ) server.kill( 0 ); }

    return {
        writeBundle () {
            if ( server ) return;
            server = require( 'child_process' )
                .spawn(
                    'node',
                    [ '.' ],
                    {
                        stdio: [ 'ignore', 'inherit', 'inherit' ],
                        shell: true
                    } );

            process.on( 'SIGTERM', toExit );
            process.on( 'exit', toExit );
        }
    };
}

const components = [ 'test' ];

export default components.map( getComponentConfig );
fs.writeFileSync( './components.json', JSON.stringify( components ) );