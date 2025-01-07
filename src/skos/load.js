module.exports = {
  '@context': 'fua.load.rdf',
  'dct:identifier': __filename,
  'dct:format': 'application/fua.load+js',
  'dct:title': 'load',
  'dct:alternative': '@fua/resource.ontology.core/skos',
  'dct:requires': [{
    'dct:identifier': '../../data/skos/skos.xml',
    'dct:format': 'application/rdf+xml'
  }]
};
