/*
1. Insert all OpenLibrary IDs into ids array.
2. The run file with Bun. It will fetch all covers and insert them into a CSV with ; as delimiter
3. We can manually fill in the errors stored in errors.txt
4. merge R1.csv & R1Imgs.csv :: Sample Files are includes
5. Put R1 back into src/routes/books
*/



import { appendFileSync } from "fs";

const ids = Object.freeze( [
    "OL8898482M",
    "OL32091753M",
    "OL28370993M",
    "OL37047220M",
    "OL28331857M",
    "OL21594367M",
    "OL24391629M",
    "OL28130776M",
    "OL35678174M",
    "OL8971647M",
    "OL30125176M",
    "OL26554445M",
    "OL3024629M",
    "OL35693668M",
    "OL25082830M",
    "OL27322193M",
    "OL23077711M",
    "OL32760762M",
    "OL27193250M",
    "OL32445039M",
    "OL4554174M",
    "OL28307932M",
    "OL25440550M",
    "OL32289956M",
    "OL33419549M",
    "OL24243313W",
    "OL27404766M",
    "OL27366070M",
    "OL35354582M",
    "OL27206755M",
    "OL36270783M",
    "OL25538028M",
    "OL7590438M",
    "OL28198631M",
    "OL31438584M",
    "OL36583747M",
    "OL36618901M",
    "OL35038410M",
    "OL4569826W",
    "OL26374794M",
    "OL30677089M",
    "OL22661787W",
    "OL2040840M",
    "OL32835319M",
    "OL33055982M",
    "OL32196580M",
    "OL27449843M",
    "OL36665710M",
    "OL26327044M",
    "OL25648567M",
] );

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
    const cover = data.covers ? data.covers[ 0 ] : null;
    return {
        index: i,
        id: ids[ i ],
        title: data.title.split( "[" )[ 0 ].trim(),
        cover: cover > 100 ? cover : null,
        pubDate: +new Date( data.publish_date )
    };
};


appendFileSync( "./R2Imgs.csv", `OLID;title;coverId\n` );
ids.slice( 0, 101 ).forEach( async ( e, i ) => {
    const data = await gen.next();
    const c = map( i, data.value );
    console.log( c );

    if ( c.cover === null ) appendFileSync( "./errors.txt", c.id + '\n' );
    const logged = `${ c.id };${ c.title };${ c.cover }\n`;
    appendFileSync( "./R2Imgs.csv", logged );
} );