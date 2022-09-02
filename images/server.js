/*
1. Insert all OpenLibrary IDs into ids array.
2. The run file with Bun. It will fetch all covers and insert them into a CSV with ; as delimiter
3. We can manually fill in the errors stored in errors.txt
4. merge R1.csv & R1Imgs.csv :: Sample Files are includes
5. Put R1 back into src/routes/books
*/



import { appendFileSync } from "fs";

const ids = [
    "OL27711220M",
    "OL17710047W",
    "OL19714233W",
    "OL19331960W",
    "OL4288870W",
    "OL27241047M",
    "OL37826840M",
    "OL26771429W",
    "OL28185034M",
    "OL24217656W",
    "OL24574391W",
    "OL16726829W",
    "OL31829191M",
    "OL37823270M",
    "OL17862181W",
    "OL17930368W",
    "OL21652283W",
    "OL17800180W",
    "OL37822607M",
    "OL76827W",
    "OL1168007W",
    "OL16820830W",
    "OL26203434W",
    "OL64468W",
    "OL28202924M",
    "OL35299305M",
    "OL15992072W",
    "OL24330288M",
    "OL27804088M",
    "OL19544745W",
    "OL20161579W",
    "OL21674578W",
    "OL28239356M",
    "OL5749847W",
    "OL24557376W",
    "OL20257238W",
    "OL20235436W",
    "OL465748W",
    "OL31013W",
    "OL1892624W",
    "OL272388W",
    "OL20678178W",
    "OL1892623W",
    "OL1183654W",
    "OL15399674W",
    "OL9071417M",
    "OL20892343W",
    "OL22235242W",
    "OL85351W",
    "OL20140592W",
    "OL23612724W",
    "OL15118324W",
    "OL15297392W",
    "OL26414386M",
    "OL17641518W",
    "OL7825951M",
    "OL514629W",
    "OL21204625W",
    "OL26838901W",
    "OL12926505W",
    "OL261056W",
    "OL25182137W",
    "OL33886062M",
    "OL7721091M",
    "OL17924037M",
    "OL25307289W",
    "OL24379192W",
    "OL30857038M",
    "OL27350689M",
    "OL38793393M",
    "OL18147659W",
    "OL20803380W",
    "OL23589857W",
    "OL477829W",
    "OL24314956W",
    "OL28010710W",
    "OL19780150W",
    "OL21162507W",
    "OL1954267W",
    "OL16540234W",
    "OL23527042W",
    "OL7358636M",
    "OL24625670W",
    "OL27386382M",
    "OL7285049M",
    "OL21097926W",
    "OL30627146M",
    "OL32681429M",
    "OL276798W",
    "OL15118324W",
    "OL23248426M",
    "OL8037411W",
    "OL24260522M",
    "OL29307673M",
    "OL17412520W",
    "OL27555977M",
    "OL28313034M",
    "OL1881615W",
    "OL20934761W",
    "OL23223452M",
    "OL11373174W"
];

const urls = [
    ( id ) => ( `https://openlibrary.org/works/${ id }.json` )
];

async function* getData () {
    let id = 0;
    while ( true ) {
        const url = urls[ 0 ]( ids[ id++ ] );
        const data = await fetch( url ).then( r => r.json() );

        yield data;
    }
}; const gen = getData();

const map = ( i, data ) => {
    const cover = data.covers ? data.covers[ 0 ] : null;
    const d = {
        index: i,
        id: ids[ i ],
        title: data.title.split( "[" )[ 0 ].trim(),
        cover: cover > 1000 ? cover : null,
        pubDate: +new Date( data.publish_date )
    };
    return d;
};


appendFileSync( "./images/images.txt", `id;title;coverId` );
ids.slice( 0, 101 ).forEach( async ( e, i ) => {
    const data = await gen.next();
    const c = map( i, data.value );
    console.log( c );

    if ( c.cover === null ) appendFileSync( "./images/errors.txt", c.id + '\n' );
    const logged = `${ c.id };${ c.title };${ c.cover }\n`;
    appendFileSync( "./images/images.txt", logged );
} );