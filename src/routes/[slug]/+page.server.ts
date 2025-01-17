import Metadata from "../data/meta.json";

console.log(Metadata);

export const load = async ({ params }) => {
  const file = params.slug;
  const meta = Metadata[file];
  let books = await import(`../data/${file}.csv`);
  let images = await import(`../../../static/cache/${file}.json`);
  books = books.default;
  images = images.default;

  for (let i = 0; i < books.length; i++) {
    const id = books[i].cover;
    const olid = books[i].OLID;

    if (images[id]) {
      books[i].image = images[id];
    } else {
      books[i].image = "None";
    };

    books[i].flags = { tops: false };
    if (meta.tops.includes(olid)) {
      books[i].flags.tops = true
    }
  };

  if (books) {
    return {
      books,
      meta: {
        index: params.slug.match(/\d/g).join(""), //Extract number
        notes: meta.notes,
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