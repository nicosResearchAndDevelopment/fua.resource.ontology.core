module.exports = {
  '@context': 'fua.load.rdf',
  'dct:identifier': __filename,
  'dct:format': 'application/fua.load+js',
  'dct:title': 'load',
  'dct:alternative': '@fua/resource.ontology.core/dct',
  'dct:requires': [{
    'dct:identifier': '../../data/dct/dct.ttl',
    'dct:format': 'text/turtle'
  }]
};
