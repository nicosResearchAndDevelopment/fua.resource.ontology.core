const
    util     = require('../util.js'),
    prefix   = 'foaf',
    ontology = 'http://xmlns.com/foaf/0.1/',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'application/ld+json', `data/${prefix}/${prefix}.json`, override),
    util.downloadOntology(ontology, 'application/rdf+xml', `data/${prefix}/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
