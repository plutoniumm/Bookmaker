import { parse } from 'html5parser';
import { walk } from "svelte/compiler";
import { replace, isScript, dedupe } from "./lib/svelte.js";

const scopes = [
    {
        value: "worker",
        transformer: ( txt ) => txt,
        insert: ( txt ) => `
        // IFC-WORKER-MOUNTED
        onMount(()=>{
            console.warn('Worker Mounted');
            workered().run(\`${ txt }\`).then(d=>(workerData=d));
        });`
    }
];

const getInsert = ( scope, body ) => {
    const actors = scopes.find( e => e.value === scope.value.value );

    const text = body[ 0 ].value;
    const transformed = actors.transformer( text );

    return actors.insert( transformed );
}; const inserts = [];

const Workinate = () => {
    return {
        markup ( { content } ) {
            if (
                content.includes( 'scope="worker"' ) &&
                !( content.includes( 'IFC-WORKER-MOUNTED' ) )
            ) {
                const ast = parse( content );

                let offset = 0;
                walk( ast, {
                    enter ( node ) {
                        if ( isScript( node ) ) {
                            const { attributes, body } = node;

                            const scope = attributes.find( e => e.name.value === 'scope' );
                            if ( scope ) {
                                inserts.push( getInsert( scope, body ) );
                                // Removing the node
                                ( { content, offset } = replace(
                                    content,
                                    offset,
                                    node.start,
                                    node.end + 1
                                ) );
                            }
                        }
                    },
                } );

                const runners = dedupe( inserts ).join( '\n' );

                content = content.replace( '</script>', `${ runners }\n</script>` );
            }
            return { code: content };
        }
    };
};

export default Workinate;