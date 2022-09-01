const tags = [
    {
        name: "ArtMath",
        id: "math"
    },
    {
        name: "MathArt",
        id: "art"
    },
    {
        name: "Humour",
        id: "joke"
    }
];

export const getTag = ( name ) => {
    const config = tags.find( t => t.id === name );
    return config.name;
};

export const processPost = ( data ) => {
    let {
        source = {},
        name = "",
        href = "#",
        description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, explicabo. Voluptas dignissimos obcaecati necessitatibus ipsa? Doloribus error sint maiores culpa?",
        image = "",
        tag = "math",
        date = new Date(),
    } = data;

    let //
        iframe = null;

    if ( source.type.toLowerCase().includes( 'youtube' ) ) {
        image = `http://img.youtube.com/vi/${ source.id }/maxresdefault.jpg`;
        href = `https://www.youtube-nocookie.com/embed/${ source.id }`
    }

    return {
        source,
        name,
        iframe,
        description,
        image,
        href,
        tag: getTag( tag ),
        date
    };
}