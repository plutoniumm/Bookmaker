<div align="center">
<div>The ifactorial</div>
<img src="./static/icons/if.svg" alt="amos" width="100px" height="100px"/>
</div>

# ifactorial
The ifactorial - No Longer a blog

idk what it is know, probably a social media feed

# API
## Post
```ts
interface Metadata {
    title: string;
    description: string;
    equation: string; // Returned as valid Katex string
    date: string; // Returned as DD/MM/YYYY
    area: string;
};

interface Post{
    meta: Metadata;
    path: string;
};

const ifactorial: Post = await fetch('https://ifactorial.in/api/posts').then(r=>r.json());
```

## Feed
Playing around with `edition` will not do you any good it will just return an error if it is not as XXX or a valid series ID. Similarly if `id` is not a valid positive integer it will try to give the absolute value of the rounded number otherwise it will just throw an error.
```ts
interface Item{
    name: String;
    description: String;
    tag: "math" | "art" | "joke";
    source: Object // exact format is in works for now
};

const ifactorial: Array<Item> = await fetch('https://ifactorial.in/api/feed?edition=001').then(r=>r.json());
// returns all items in edition 001

const ifactorial: Item = await fetch('https://ifactorial.in/api/feed?edition=001&id=0').then(r=>r.json());
// returns 0th item in edition 001
```


# Todo
- https://www.npmjs.com/package/svelte-infinite-scrolling