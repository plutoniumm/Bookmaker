<div align="center">
<div>The ifactorial</div>
<img src="./static/icons/if.svg" alt="amos" width="100px" height="100px"/>
</div>

# ifactorial
The ifactorial - No Longer a blog

idk what it is know, probably a social media feed

# API
```ts
interface Metadata {
    title: string;
    description: string;
    equation: string; // Returned as valid Katex string
    date: string; // Returned as DD/MM/YYYY
    area: string;
}

interface Post{
    meta: Metadata;
    path: string;
}

const ifactorial: Post = await fetch('https://ifactorial.in/api/posts').then(r=>r.json());
```
<!-- const { response, json } = await api.get(session.API_ENDPOINT, url); -->

# Todo
- https://www.npmjs.com/package/svelte-infinite-scrolling


## Maintainance
For all issues related to @snlab/sveltex-unified refer to [@spatialnetworkslab/sveltex-unified](https://github.com/spatialnetworkslab/sveltex-unified/blob/master/src/index.js)
