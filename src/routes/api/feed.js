export async function get ( { url } ) {

    const baseUrl = 'https://ifactorial.in';
    const { edition, id } = Object.fromEntries( ( new URL( url ) ).searchParams );

    const series = await fetch( `${ baseUrl }/feed/${ edition }.json` ).then( r => r.json() );

    let content = series;
    if ( id ) content = series[ Math.abs( Math.round( +id ) ) ];

    return { body: content };
}