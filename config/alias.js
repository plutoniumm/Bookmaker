import path from 'path';

const list = [
    
].map( ( [ from, to ] ) => [ from, path.resolve( to ) ] );

export default Object.fromEntries( new Map( list ) );