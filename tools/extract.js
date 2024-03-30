const args = process.argv.slice( 2 );
import EPUBToText from "./epub.js";
import fs from "fs";

let name = args[ 0 ];
if ( name )
    name = "data/" + name.replace( ".epub", "" )
else
    throw new Error( "Unknow what to run on" )

const extractText = ( name ) => {
    const dir = './text'; // Make sure CLEAN directory exists
    if ( fs.existsSync( dir ) )
        fs.rmSync( dir, { recursive: true, force: true } );
    fs.mkdirSync( dir, { recursive: true } );

    let epubToText = new EPUBToText;
    epubToText.extractTo( `${ name }.epub`, 'text', ( e ) => console.log( e ) );
    fs.unlinkSync( `${ name }.epub` );
};


const cleanText = () => {
    const files = fs
        .readdirSync( "./text" )
        .filter( e => e.includes( "txt" ) )
        .sort( ( a, b ) => (
            +a.split( '-' )[ 0 ] ) - ( +b.split( '-' )[ 0 ]
            ) );

    const texts = new Array( files.length ).fill( 0 );
    files.forEach( ( name, indx ) => {
        const text = fs.readFileSync( "./text/" + name, "utf-8" );
        texts[ indx ] = text // remove new lines
            .replace( /\n/g, " " ) // replace percent
            .replaceAll( "percent", "%" ) // remove image
            .replaceAll( " %", "%" )
            .replaceAll( ". .", ". " ) // replace thousand
            .replaceAll( " thousand", "K" )
            .replace( /\[.*image.*]/g, " " )
            .replace( /  +/g, ' ' )
            .trim()
        console.log( `ADDED@${ indx }: `, text.slice( 0, 100 ) );
    } );

    fs.writeFileSync( `./${ name }.txt`, texts.join( "\n\n" ) );
};

const files = fs.readdirSync( "." );
const tfiles = fs.readdirSync( "./text" );
if (
    tfiles.length === 0 ||
    files.includes( name + '.txt' )
) {
    extractText( name ); // Round 1
    console.log( "Extraction Complete" );
} else if ( tfiles.length > 0 ) {
    if ( tfiles[ 1 ].includes( name ) ) {
        cleanText(); // Round 2
        console.log( "Compilation Complete" );
    } else {
        fs.rmSync( "./text", { recursive: true, force: true } );
        extractText( name ); // Round 1
        console.log( "Extraction Complete" );
    }
};