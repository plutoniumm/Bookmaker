import katex from "katex";
const replacements = [ /\$\$[^\$]*\$\$/g, /\$[^\$]*\$/g ];

export function Katexer () {
    return {
        markup ( { content, filename } ) {
            if ( filename.includes( '.md' ) )
                for ( let item in replacements )
                    content = content.replace( replacements[ item ], replacer );

            return { code: content };
        }
    };
};

function replacer ( expr ) {
    if ( expr.length < 3 ) return expr;
    if ( expr[ 0 ] === '$' && expr[ expr.length - 1 ] === '$' ) {
        let displayStyle = false;
        expr = expr.substr( 1, expr.length - 2 );
        if ( expr[ 0 ] === '$' && expr[ expr.length - 1 ] === '$' ) {
            displayStyle = true;
            expr = expr.substr( 1, expr.length - 2 );
        };

        let html = null;
        try {
            html = katex.renderToString( expr );
        } catch ( e ) {
            console.log( 100, expr );
            console.log( 404, e.name.slice( 0, 300 ) );
        }
        if ( displayStyle && html )
            html = html.replace( /class="katex"/g, 'class="katex katex-block" style="display: block;"' );

        // If {} are not escaped they are treated as svelte interpolators
        return html.replaceAll( '{', '&lcub;' ).replaceAll( '}', '&rcub;' );
    } else return expr;
}