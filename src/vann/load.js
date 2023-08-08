module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@nrd/fua.resource.ontology.core/vann',
    'dct:requires':    [{
        'dct:identifier': '../../data/vann/vann_fixed.xml',
        'dct:format':     'application/rdf+xml'
    }]
};
