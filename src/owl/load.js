module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@nrd/fua.resource.ontology.core/owl',
    'dct:requires':    [{
        'dct:identifier': '../../data/owl/owl.ttl',
        'dct:format':     'text/turtle'
    }]
};
