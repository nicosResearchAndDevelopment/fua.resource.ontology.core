const
    util     = require('../util.js'),
    prefix   = 'cc',
    context  = {
        'rdf':  'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'cc':   'http://creativecommons.org/ns#',
        'owl':  'http://www.w3.org/2002/07/owl#',
        'rdfs': 'http://www.w3.org/2000/01/rdf-schema#'
    },
    override = false;

Promise.all([
    util.convertOntology(`data/${prefix}/${prefix}.xml`, 'application/rdf+xml', `data/${prefix}/${prefix}_generated.ttl`, 'text/turtle', context, override)
]).then(util.logDone).catch(util.logError);
