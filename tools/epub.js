'use strict';

import { writeFileSync } from 'fs';
import EPub from 'epub';
import { fromString } from 'html-to-text';
import { basename } from 'path';
import { parse } from 'node-html-parser';

class EPUBToText {
  /**
   * EpubToText#extract()
   *
   * Opens the EPUB in sourceFile, extracts all chapters
   * and calls a callback function with the chapter content.
   * Callback parameters are (err, chapterText, sequenceNumber).
   *
   * An optional callback function can also be called initially,
   * at the beginning of the extraction.
   * Callback parameters are (err, numberOfChapters)
   **/
  extract ( sourceFile, callback, initialCallback ) {
    let epub = new EPub( sourceFile );
    let klass = this;

    // callback fired for each chapter (or they are written to disk)
    epub.on( 'end', function () {
      epub.flow.forEach( function ( chapter, sequence ) {
        epub.getChapter( chapter.id, function ( err, html ) {
          let txt = '';
          if ( html ) {
            txt = fromString( html.toString(), { ignoreHref: true } );
          };
          let meta = {};
          meta.id = chapter.id;
          meta.excerpt = txt.trim().slice( 0, 250 );
          meta.size = txt.length
          meta.sequence_number = sequence
          if ( chapter.title ) {
            meta.title = chapter.title
          } else {
            meta.title = klass.getTitleFromHtml( html );
          }
          callback( err, txt, sequence, meta );
        } );
      } );
    } );

    // callback as soon as file is ready to give info on how many chapters will be processed
    epub.on( 'end', function () {
      if ( initialCallback ) {
        initialCallback( null, epub.flow.length );
      };
    } );

    epub.parse();
  }

  /**
   * EpubToText#extractTo()
   *
   * Opens the EPUB in sourceFile and saves all chapters
   * in destFolder. Chapters will be name according to the
   * original file name, prefixed by a 5-digit sequence number
   * Call a callback function when done.
   * Callback parameters are (err)
   **/
  extractTo ( sourceFile, destFolder, callback ) {
    let totalCount;
    let processedCount = 0;

    this.extract( sourceFile, ( err, txt, sequence ) => {
      let destFile = destFolder + '/' + sequence + '-' + basename( sourceFile ) + '.txt'
      writeFileSync( destFile, txt );
      processedCount += 1;
      if ( processedCount >= totalCount ) {
        callback( null );
      }
    }, ( err, numberOfChapters ) => {
      totalCount = numberOfChapters
    } );
  }

  /**
   * EpubToText#getTitleFromHtml()
   *
   * Best efforts to find a title in the HTML tags (title, H1, etc.)
   **/
  getTitleFromHtml ( html ) {
    const root = parse( html );
    let title = root.querySelector( 'h1' );
    if ( title == null ) {
      title = root.querySelector( 'title' );
      if ( title == null ) {
        return '';
      };
    };
    return title.structuredText.replace( "\n", " " );
  }
}

export default EPUBToText;
