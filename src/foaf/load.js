module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@nrd/fua.resource.ontology.core/foaf',
    'dct:requires':    [{
        'dct:identifier': '../../data/foaf/foaf.xml',
        'dct:format':     'application/rdf+xml'
    }]
};
