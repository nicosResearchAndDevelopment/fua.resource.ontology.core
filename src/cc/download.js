const
    util     = require('../util.js'),
    prefix   = 'cc',
    ontology = 'http://creativecommons.org/ns#',
    override = false;

Promise.all([
    util.downloadOntology('https://creativecommons.org/schema.rdf', null, `data/${prefix}/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
