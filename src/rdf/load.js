module.exports = {
  '@context': 'fua.load.rdf',
  'dct:identifier': __filename,
  'dct:format': 'application/fua.load+js',
  'dct:title': 'load',
  'dct:alternative': '@fua/resource.ontology.core/rdf',
  'dct:requires': [{
    'dct:identifier': '../../data/rdf/rdf.ttl',
    'dct:format': 'text/turtle'
  }]
};
