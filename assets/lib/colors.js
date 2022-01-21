const rgbToHex = function ( rgb ) {
    let hex = [];
    for ( let i = 0;i < rgb.length - 1;i++ ) {
        hex[ i ] = rgb[ i ].toString( 16 );
        if ( hex[ i ].length < 2 )
            hex[ i ] = '0' + hex[ i ];
    }
    return '#' + hex.join( '' );
};

function hexToRgb ( hex ) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace( shorthandRegex, function ( m, r, g, b ) {
        return r + r + g + g + b + b;
    } );

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
    return result ? {
        r: parseInt( result[ 1 ], 16 ),
        g: parseInt( result[ 2 ], 16 ),
        b: parseInt( result[ 3 ], 16 )
    } : null;
};

function luminance ( rgb ) {
    const { r, g, b } = rgb;
    let a = [ r, g, b ].map( function ( v ) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow( ( v + 0.055 ) / 1.055, 2.4 );
    } );
    return a[ 0 ] * 0.2126 + a[ 1 ] * 0.7152 + a[ 2 ] * 0.0722;
};

const randomColor = () => '#' + Math.random().toString( 16 ).substr( 2, 6 );

function contrast ( hex1, hex2 ) {
    const [ rgb1, rgb2 ] = [ hex1, hex2 ].map( hexToRgb );
    console.log( hex1, hex2 );
    console.log( rgb1, rgb2 );
    let lum1 = luminance( rgb1 );
    let lum2 = luminance( rgb2 );
    let brightest = Math.max( lum1, lum2 );
    let darkest = Math.min( lum1, lum2 );
    return ( brightest + 0.05 )
        / ( darkest + 0.05 );
};

export const generateColorPair = () => {
    const [ bg, tc ] = [ randomColor(), randomColor() ];
    const contrastRatio = contrast( bg, tc );
    if ( contrastRatio < 4.5 ) {
        return generateColorPair();
    } else {
        if ( luminance( hexToRgb( bg ) ) > luminance( hexToRgb( tc ) ) )
            return { bg: bg, tc: tc };
        else return { bg: tc, tc: bg };
    };
};