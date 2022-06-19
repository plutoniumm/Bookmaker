// posts.json.js
const dateSort = ( a, b ) => new Date( b.meta.date ) - new Date( a.meta.date );

export const get = async () => {
    const allPostFiles = import.meta.glob( '../posts/*.md' );
    const iterablePostFiles = Object.entries( allPostFiles );

    const allPosts = await Promise.all(
        iterablePostFiles.map( async ( [ path, resolver ] ) => {
            const { metadata } = await resolver();
            const postPath = path.slice( 2, -3 ); // slice removes the .. and the .md from beg and end

            return {
                meta: metadata,
                path: postPath,
            };
        } )
    );

    const sortedPosts = allPosts.sort( dateSort ); // newest first

    return {
        body: sortedPosts
    };
};
// /api/posts.json