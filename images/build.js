import { csvParse, csvFormat } from "d3-dsv";
import sharp from "sharp";
import fs from "fs";

const url = ( cover ) => `https://covers.openlibrary.org/b/id/${ cover }-M.jpg`;

const file = "../src/routes/data/R1.csv";
let data = csvParse( fs.readFileSync( file, "utf-8" ) );
data = data.slice( 0, 5 );

for ( let i = 0;i < data.length;i++ ) {
  const d = data[ i ].cover;
  if ( !d ) continue;

  const res = await fetch( url( d ) );
  const resBuffer = await res.buffer();

  const image = sharp( resBuffer );

  // limit height to 100px
  const { width, height } = await image.metadata();
  const h = Math.min( 100, height );
  const w = Math.round( width * h / height );

  await image.resize( w, h ).toFile( `./${ d }.jpg` );
  data[ i ].cover = `${ d }.jpg`;
}