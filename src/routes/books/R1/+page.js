import R1 from './R1.csv';

export const load = async ( { fetch } ) => {
    return {
        books: [ ...R1 ],
    };
};

// EX: https://openlibrary.org/api/books?bibkeys=OLID:OL1429049M&format=json
// it is possible to chain bibkeys