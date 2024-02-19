import { readdirSync } from 'fs';
const dir = readdirSync('src/routes/data')
  .filter((f) => f.match(/R[0-9]*\.csv/))
  .sort()

export const load = async ({ params }) => {
  const file = params.slug;
  let books = await import(`../data/${file}.csv`);
  books = books.default;

  if (books) {
    return {
      books,
      meta: {
        index: params.slug.match(/\d/g).join(""), //Extract number
      }
    }
  } else {
    return {
      status: 404,
    };
  }
};

// EX: https://openlibrary.org/api/books?bibkeys=OLID:OL1429049M&format=json
// it is possible to chain bibkeys