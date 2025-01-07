module.exports = {
  '@context': 'fua.load.rdf',
  'dct:identifier': __filename,
  'dct:format': 'application/fua.load+js',
  'dct:title': 'load',
  'dct:alternative': '@fua/resource.ontology.core/rdfs',
  'dct:requires': [{
    'dct:identifier': '../../data/rdfs/rdfs.ttl',
    'dct:format': 'text/turtle'
  }]
};
