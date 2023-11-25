import R1 from '../data/R1.csv';
import R2 from '../data/R2.csv';
import R3 from '../data/R3.csv';

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
  const maps = { R1, R2, R3 }

  params.slug = params.slug.replace('.json', '');
  const books = maps[params.slug];

  if (books) {
    return json(books);
  } else {
    return json({ error: "Not found" }, 404);
  }
};

// EX: https://openlibrary.org/api/books?bibkeys=OLID:OL1429049M&format=json
// it is possible to chain bibkeys