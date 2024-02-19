import { readdirSync } from 'fs';
const dir = readdirSync('src/routes/data')
  .filter((f) => f.match(/R[0-9]*\.csv/))
  .sort()

export const load = async ({ params }) => {
  return {
    files: dir
  }
};

// EX: https://openlibrary.org/api/books?bibkeys=OLID:OL1429049M&format=json
// it is possible to chain bibkeys