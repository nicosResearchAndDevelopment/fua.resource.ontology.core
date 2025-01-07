module.exports = {
  '@context': 'fua.load.rdf',
  'dct:identifier': __filename,
  'dct:format': 'application/fua.load+js',
  'dct:title': 'load',
  'dct:alternative': '@fua/resource.ontology.core/cc',
  'dct:requires': [{
    'dct:identifier': '../../data/cc/cc.xml',
    'dct:format': 'application/rdf+xml'
  }]
};
