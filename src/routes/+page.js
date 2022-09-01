export const load = async ( { fetch } ) => {
    const posts = await fetch( "/api" ).then( ( r ) => r.json() );

    return { posts };
};