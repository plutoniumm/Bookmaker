/*
1. Insert all OpenLibrary IDs into ids array.
2. The run file with Bun. It will fetch all covers and insert them into a CSV with ; as delimiter
3. We can manually fill in the errors stored in errors.txt
4. merge R1.csv & R1Imgs.csv :: Sample Files are includes
5. Put R1 back into src/routes/books
*/

import { appendFileSync, readFileSync } from "fs";
import { csvParse } from "d3-dsv";

const file = "./R4.csv";
let ids = csvParse( readFileSync( file, "utf-8" ) );
ids = Object.freeze( ids.map( e => e.OLID ) );

const openlib = ( id ) => ( `https://openlibrary.org/works/${ id }.json` )

async function* getData () {
    let id = 0;
    while ( true ) {
        const url = openlib( ids[ id++ ] );
        const data = await fetch( url ).then( r => r.json() );

        yield data;
    }
}; const gen = getData();

const map = ( i, data ) => {
    if ( !data ) {
        return ( { index: i, id: ids[ i ], title: null, cover: null } )
    };

    const cover = data.covers ? data.covers[ 0 ] : null;
    return {
        index: i,
        id: ids[ i ],
        title: data?.title?.split( "[" )[ 0 ].trim(),
        cover: cover > 100 ? cover : null
    };
};


const file2 = file.replace( ".csv", "Imgs.csv" );
appendFileSync( file2, `OLID;title;coverId\n` );
ids.slice( 0, 101 ).forEach( async ( e, i ) => {
    const data = await gen.next();
    const c = map( i, data.value );
    console.log( c );

    if ( c.cover === null ) appendFileSync( "./errors.txt", c.id + '\n' );
    const logged = `${ c.id };${ c.title };${ c.cover }\n`;
    appendFileSync( file2, logged );
} );