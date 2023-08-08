const
    util     = require('../util.js'),
    prefix   = 'owl',
    ontology = 'http://www.w3.org/2002/07/owl#',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'text/turtle', `data/${prefix}/${prefix}.ttl`, override),
    util.downloadOntology(ontology, 'application/ld+json', `data/${prefix}/${prefix}.json`, override),
    util.downloadOntology(ontology, 'application/rdf+xml', `data/${prefix}/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
