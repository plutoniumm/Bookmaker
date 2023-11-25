import R1 from '../data/R1.csv?raw';
import R2 from '../data/R2.csv?raw';
import R3 from '../data/R3.csv?raw';

import { csvParse } from 'd3-dsv';
import { json, text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
  const maps = { R1, R2, R3 }

  // json, csv or default:json
  const isCsv = params.slug.endsWith('.csv');

  if (isCsv) {
    params.slug = params.slug.slice(0, -4);
    const book = maps[params.slug];
    if (book) {
      return text(book);
    } else {
      return text("Not found", { status: 404 });
    }
  } else {
    params.slug = params.slug.replace('.json', '');
    let books = maps[params.slug];

    if (books) {
      books = csvParse(books);
      return json(books);
    } else {
      return json({ error: "Not found" }, { status: 404 });
    }
  }
};