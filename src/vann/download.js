const
    util     = require('../util.js'),
    prefix   = 'vann',
    ontology = 'http://purl.org/vocab/vann/',
    override = false;

Promise.all([
    util.downloadOntology('https://vocab.org/vann/vann-vocab-20100607.rdf', 'application/rdf+xml', `data/${prefix}/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
