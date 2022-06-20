const siteURL = 'https://ifactorial.in';
const siteTitle = 'More than just blogs';
const siteDescription = 'More than just blogs, but definitely less than ramblings';

const dateSort = ( a, b ) => new Date( b.meta.date ) - new Date( a.meta.date );
export const get = async () => {
    const posts = await Promise.all(
        Object.entries( import.meta.glob( './blog/*.md' ) ).map( async ( [ path, resolver ] ) => {
            const metadata = await resolver()
            const slug = path.slice( 2, -3 );

            return { ...metadata.meta, slug };
        } )
    ).then( posts => posts.sort( dateSort ) );

    const body = render( posts )
    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml',
    };

    return {
        body,
        headers
    }
};

const itemize = ( { post, slug, description, date } ) => `
<item>
<guid isPermaLink="true">${ siteURL }/posts/${ slug }</guid>
<title>${ post.title }</title>
<link>${ siteURL }/posts/${ slug }</link>
<description>${ description }</description>
<pubDate>${ new Date( date ).toUTCString() }</pubDate>
</item>`;

const render = ( posts ) =>
    `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${ siteTitle }</title>
<description>${ siteDescription }</description>
<link>${ siteURL }</link>
<atom:link href="${ siteURL }/rss" rel="self" type="application/rss+xml"/>
${ posts.map( itemize ).join( '' ) }
</channel>
</rss>`;