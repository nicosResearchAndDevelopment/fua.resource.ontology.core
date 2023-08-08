const
    util     = require('../util.js'),
    prefix   = 'xsd',
    ontology = 'http://www.w3.org/2001/XMLSchema#',
    override = false;

Promise.all([
    util.downloadOntology('https://www.w3.org/2001/XMLSchema.xsd', 'application/xml', `data/${prefix}/1.0/XMLSchema.xsd`, override),
    util.downloadOntology('https://www.w3.org/2001/XMLSchema.dtd', 'application/xml-dtd', `data/${prefix}/1.0/XMLSchema.dtd`, override),
    util.downloadOntology('https://www.w3.org/2001/datatypes.dtd', 'application/xml-dtd', `data/${prefix}/1.0/datatypes.dtd`, override),
    util.downloadOntology('https://www.w3.org/2009/XMLSchema/XMLSchema.xsd', 'application/xml', `data/${prefix}/1.1/XMLSchema.xsd`, override),
    util.downloadOntology('https://www.w3.org/2009/XMLSchema/XMLSchema.dtd', 'application/xml-dtd', `data/${prefix}/1.1/XMLSchema.dtd`, override),
    util.downloadOntology('https://www.w3.org/2009/XMLSchema/datatypes.dtd', 'application/xml-dtd', `data/${prefix}/1.1/datatypes.dtd`, override)
]).then(util.logDone).catch(util.logError);
