const
    util     = require('../util.js'),
    prefix   = 'vann',
    context  = {
        'cc':     'http://web.resource.org/cc/',
        'dc':     'http://purl.org/dc/terms/',
        'dcterm': 'http://purl.org/dc/terms/',
        'foaf':   'http://xmlns.com/foaf/0.1/',
        'owl':    'http://www.w3.org/2002/07/owl#',
        'rdf':    'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'rdfs':   'http://www.w3.org/2000/01/rdf-schema#',
        'skos':   'http://www.w3.org/2004/02/skos/core#',
        'vann':   'http://purl.org/vocab/vann/'
    },
    override = false;

Promise.all([
    util.convertOntology(`data/${prefix}/${prefix}_fixed.xml`, 'application/rdf+xml', `data/${prefix}/${prefix}_generated.ttl`, 'text/turtle', context, override)
]).then(util.logDone).catch(util.logError);
