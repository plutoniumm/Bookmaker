import R1 from '../data/R1.csv';
import R2 from '../data/R2.csv';
import R3 from '../data/R3.csv';

export const load = async ( { params } ) => {
  const maps = { R1, R2, R3 }
  return {
    books: maps[ params.slug ],
    meta: {
      index: params.slug.match( /\d/g ).join( "" ), //Extract number
    }
  };
};

// EX: https://openlibrary.org/api/books?bibkeys=OLID:OL1429049M&format=json
// it is possible to chain bibkeys