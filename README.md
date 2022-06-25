<div align="center">
<div>The ifactorial</div>
<img src="./static/icons/if.svg" alt="amos" width="200px" height="200px"/>
</div>
<br/>
The ifactorial - A borderline rant, definitely not a blog probably just a well over engineered notebook used on rare occasions.

<br/>

# API
```js
// All API is at the baseurl
baseURL = 'https://ifactorial.in'
```

You can use the rss feed at `/api/rss`. Moving on to the JSON API.
## `/posts`
```ts
interface Metadata {
    title: string
    description: string
    equation: string
    // Returned as valid Katex string
    date: string
    // Returned as DD/MM/YYYY
    area: string
};

interface Post {
    meta: Metadata
    path: string
};

const ifactorial: Post = await fetch('/api/posts').then(r=>r.json());
```

## `/feed`
Playing around with `edition` will not do you any good it will just return an error if it is not as XXX or a valid series ID. Similarly if `id` is not a valid positive integer it will try to give the absolute value of the rounded number otherwise it will just throw an error.
```ts
interface Item {
    name: String
    description: String
    date: number | string
    // Idk just do new Date(date) it will work
    tag: "math" | "art" | "joke";
    source: Object
    // exact format is in works for now
};

const ifactorial: Array<Item> = await fetch('/api/feed?edition=001').then(r=>r.json());
// returns all items in edition 001

const ifactorial: Item = await fetch('/api/feed?edition=001&id=0').then(r=>r.json());
// returns 0th item in edition 001
```


# Todo
- https://www.npmjs.com/package/svelte-infinite-scrolling

# Server
```bash
# Starts server @3001
$ npm run server
```
To develop svelte components just focus on `/src`. Getting the components, starting the server and displaying it at `localhost:3001` will all be done by engine.