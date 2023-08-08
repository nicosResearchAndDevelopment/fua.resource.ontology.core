const
    util     = require('../util.js'),
    prefix   = 'foaf',
    context  = {
        'rdf':  'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
        'owl':  'http://www.w3.org/2002/07/owl#',
        'vs':   'http://www.w3.org/2003/06/sw-vocab-status/ns#',
        'foaf': 'http://xmlns.com/foaf/0.1/',
        'wot':  'http://xmlns.com/wot/0.1/',
        'dc':   'http://purl.org/dc/elements/1.1/'
    },
    override = false;

Promise.all([
    util.convertOntology(`data/${prefix}/${prefix}.xml`, 'application/rdf+xml', `data/${prefix}/${prefix}_generated.ttl`, 'text/turtle', context, override)
]).then(util.logDone).catch(util.logError);
