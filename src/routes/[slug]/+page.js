import R1 from '../data/R1.csv';
import R2 from '../data/R2.csv';

export const load = async ( { params } ) => {
  const maps = {
    R1, R2
  }
  console.log( params.slug );
  return {
    books: [ ...maps[ params.slug ] ],
    meta: {
      index: params.slug.match( /\d/g ).join( "" ), //Extract number
    }
  };
};

// EX: https://openlibrary.org/api/books?bibkeys=OLID:OL1429049M&format=json
// it is possible to chain bibkeys