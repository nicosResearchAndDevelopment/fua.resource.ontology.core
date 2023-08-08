module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load.ontology',
    'dct:alternative': '@nrd/fua.resource.ontology',
    'dct:requires':    [
        {
            'dct:identifier': './cc/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './dc/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './dct/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './foaf/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './owl/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './rdf/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './rdfs/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './skos/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './xsd/load.js',
            'dct:format':     'application/fua.load+js'
        }
    ]
};
