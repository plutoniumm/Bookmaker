// posts.json.js
const dateSort = ( a, b ) => new Date( b.meta.date ) - new Date( a.meta.date );
export const get = async () => {
    const allPostFiles = import.meta.glob( '../posts/*.md' );

    const allPosts = await Promise.all(
        Object.entries( allPostFiles ).map( async ( [ path, resolver ] ) => {
            const metadata = await resolver();

            return {
                meta: metadata.META,
                path: path.slice( 2, -3 ),// slice removes the .. and the .md from beg and end
            };
        } )
    );

    const sortedPosts = allPosts.sort( dateSort ); // newest first

    return { body: sortedPosts };
};
// /api/posts.json