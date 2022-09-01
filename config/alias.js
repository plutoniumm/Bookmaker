import path from 'path';

const list = [
    [ "@global", "/src/global" ],
    [ "@data", "/src/data" ],
    [ "@components", "/src/components" ],
    [ "@templates", "/src/template" ]
].map( ( [ from, to ] ) => [ from, path.resolve( to ) ] );

export default Object.fromEntries( new Map( list ) );