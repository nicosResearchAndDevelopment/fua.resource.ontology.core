const
    util     = require('../util.js'),
    prefix   = 'rdfs',
    ontology = 'http://www.w3.org/2000/01/rdf-schema#',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'text/turtle', `data/${prefix}/${prefix}.ttl`, override),
    util.downloadOntology(ontology, 'application/ld+json', `data/${prefix}/${prefix}.json`, override),
    util.downloadOntology(ontology, 'application/rdf+xml', `data/${prefix}/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
