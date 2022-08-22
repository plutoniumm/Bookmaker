export function replace ( content, offset, start, end, repl = "" ) {
    content =
        content.slice( 0, start + offset ) + repl + content.slice( end + offset );
    offset += repl.length - ( end - start );
    return { content, offset };
};

export const isScript = node => node.type === "Tag" && node.name === 'script';

export function dedupe ( arr ) {
    let s = new Set( arr );
    let it = s.values();
    return Array.from( it );
}