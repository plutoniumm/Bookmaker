import { renderToString } from 'react-dom/server'

/** @type {import('./$types').PageLoad} */
export async function load ( { params } ) {
    const { slug } = params;
    const file = await import( `../posts/${ slug }.mdx` );

    return {
        slug,
        file,
        title: 'Hello world!',
        content: renderToString( file.default() )
    };
}