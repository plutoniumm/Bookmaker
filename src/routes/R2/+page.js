import R2 from '../data/R2.csv';

export const load = async () => {
    return { books: [ ...R2 ] };
};

// EX: https://openlibrary.org/api/books?bibkeys=OLID:OL1429049M&format=json
// it is possible to chain OLID Keys