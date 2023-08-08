const
    util     = require('../util.js'),
    prefix   = 'dc',
    ontology = 'http://purl.org/dc/elements/1.1/',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'text/turtle', `data/${prefix}/${prefix}.ttl`, override),
    util.downloadOntology(ontology, 'application/rdf+xml', `data/${prefix}/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
