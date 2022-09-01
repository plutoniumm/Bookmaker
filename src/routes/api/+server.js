// posts.json.js
import { json } from '@sveltejs/kit';
const dateSort = ( a, b ) => new Date( b.meta.date ) - new Date( a.meta.date );

export const GET = async () => {
    const allPostFiles = import.meta.glob( '../posts/*.mdx' );

    const allPosts = await Promise.all(
        Object.entries( allPostFiles ).map( async ( [ path, resolver ] ) => {
            const metadata = await resolver();

            return {
                meta: metadata,
                path: path.slice( 2, -4 ).replace( "/posts", "" ),
                // slice removes the .. and the .mdx from beg and end
            };
        } )
    );

    const sortedPosts = allPosts.sort( dateSort ); // newest first

    return json( sortedPosts );
};
// /api