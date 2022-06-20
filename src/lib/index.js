export const getPosts = async ( { fetch } ) => {
    const posts = await fetch( "/api/posts.json" ).then( ( r ) => r.json() );

    return {
        props: { posts },
    };
};