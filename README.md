# @nrd/fua.resource.ontology.core

| Name                                                                       | Prefix          | Model                                                                                              | IRI                                         |
|----------------------------------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------|---------------------------------------------|
| [Creative Commons Rights Expression Language](data/cc/README.md)           | `cc`            | [`.ttl`](data/cc/cc_generated.ttl) [`.xml`](data/cc/cc.xml)                                        | http://creativecommons.org/ns#              |
| [Dublin Core](data/dc/README.md)                                           | `dc`            | [`.ttl`](data/dc/dc.ttl) [`.xml`](data/dc/dc.xml)                                                  | http://purl.org/dc/elements/1.1/            |
| [DC Terms](data/dct/README.md)                                             | `dct` `dcterms` | [`.ttl`](data/dct/dct.ttl) [`.xml`](data/dct/dct.xml)                                              | http://purl.org/dc/terms/                   |
| [Friend of a Friend](data/foaf/README.md)                                  | `foaf`          | [`.ttl`](data/foaf/foaf_generated.ttl) [`.json`](data/foaf/foaf.json) [`.xml`](data/foaf/foaf.xml) | http://xmlns.com/foaf/0.1/                  |
| [Web Ontology Language](data/owl/README.md)                                | `owl`           | [`.ttl`](data/owl/owl.ttl) [`.json`](data/owl/owl.json) [`.xml`](data/owl/owl.xml)                 | http://www.w3.org/2002/07/owl#              |
| [Resource Description Framework](data/rdf/README.md)                       | `rdf`           | [`.ttl`](data/rdf/rdf.ttl) [`.json`](data/rdf/rdf.json) [`.xml`](data/rdf/rdf.xml)                 | http://www.w3.org/1999/02/22-rdf-syntax-ns# |
| [RDF Schema](data/rdfs/README.md)                                          | `rdfs`          | [`.ttl`](data/rdfs/rdfs.ttl) [`.json`](data/rdfs/rdfs.json) [`.xml`](data/rdfs/rdfs.xml)           | http://www.w3.org/2000/01/rdf-schema#       |
| [Simple Knowledge Organization System](data/skos/README.md)                | `skos`          | [`.ttl`](data/skos/skos_generated.ttl) [`.xml`](data/skos/skos.xml)                                | http://www.w3.org/2004/02/skos/core#        |
| [A vocabulary for annotating vocabulary descriptions](data/vann/README.md) | `vann`          | [`.ttl`](data/vann/vann_generated.ttl) [`.xml`](data/vann/vann.xml)                                | http://purl.org/vocab/vann/                 |
| [XML Schema Definition](data/xsd/README.md)                                | `xsd` `xs`      |                                                                                                    | http://www.w3.org/2001/XMLSchema#           |

## Vocabularies

- `rdf` <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
- `rdfs` <http://www.w3.org/2000/01/rdf-schema#>
- `owl` <http://www.w3.org/2002/07/owl#>
- `dc` <http://purl.org/dc/elements/1.1/>
- `dcam` <http://purl.org/dc/dcam/>
- `dct` <http://purl.org/dc/terms/>
- `skos` <http://www.w3.org/2004/02/skos/core#>
- `xsd` <http://www.w3.org/2001/XMLSchema#>
- `xml` <http://www.w3.org/XML/1998/namespace>
- `grddl` <http://www.w3.org/2003/g/data-view#>
- `hfp` <http://www.w3.org/2001/XMLSchema-hasFacetAndProperty>
- `xhtml` <http://www.w3.org/1999/xhtml>
- `xlink` <http://www.w3.org/1999/xlink>
- `xsi` <http://www.w3.org/2001/XMLSchema-instance>
- `rddl` <http://www.rddl.org/>
- `purposes` <http://www.rddl.org/purposes#>
- `admin` <http://webns.net/mvcb/>
- `foaf` <http://xmlns.com/foaf/0.1/>
- `doap` <http://usefulinc.com/ns/doap#>
- `vs` <http://www.w3.org/2003/06/sw-vocab-status/ns#>
- `wot` <http://xmlns.com/wot/0.1/>
- `vann` <http://purl.org/vocab/vann/>
- `wn` <http://xmlns.com/wordnet/1.6/>
- `cc` <http://web.resource.org/cc/>
- `bio` <http://purl.org/vocab/bio/0.1/>
- `ov` <http://open.vocab.org/terms/>
- `label` <http://purl.org/net/vocab/2004/03/label#>

## Dependencies

- `rdf`
    - rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - owl <http://www.w3.org/2002/07/owl#>
    - dc <http://purl.org/dc/elements/1.1/>
- `rdfs`
    - rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - owl <http://www.w3.org/2002/07/owl#>
    - dc <http://purl.org/dc/elements/1.1/>
- `owl`
    - owl <http://www.w3.org/2002/07/owl#>
    - rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - dc <http://purl.org/dc/elements/1.1/>
    - grddl <http://www.w3.org/2003/g/data-view#>
    - xml <http://www.w3.org/XML/1998/namespace>
    - xsd <http://www.w3.org/2001/XMLSchema#>
- `dc`
    - dc <http://purl.org/dc/elements/1.1/>
    - rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - owl <http://www.w3.org/2002/07/owl#>
    - skos <http://www.w3.org/2004/02/skos/core#>
    - dcam <http://purl.org/dc/dcam/>
    - dcterms <http://purl.org/dc/terms/>
- `dcam`
    - dcam <http://purl.org/dc/dcam/>
    - rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - owl <http://www.w3.org/2002/07/owl#>
    - dcterms <http://purl.org/dc/terms/>
    - skos <http://www.w3.org/2004/02/skos/core#>
- `dcterms` `dct`
    - dcterms <http://purl.org/dc/terms/>
    - rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - owl <http://www.w3.org/2002/07/owl#>
    - dcam <http://purl.org/dc/dcam/>
    - skos <http://www.w3.org/2004/02/skos/core#>
- `skos`
    - xmlns:skos <http://www.w3.org/2004/02/skos/core#>
    - xmlns:rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - xmlns:rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - xmlns:owl <http://www.w3.org/2002/07/owl#>
    - xmlns:dct <http://purl.org/dc/terms/>
- `xsd` `xs`
    - xmlns:xs <http://www.w3.org/2001/XMLSchema#>
    - xmlns:hfp <http://www.w3.org/2001/XMLSchema-hasFacetAndProperty>
- `xml`
    - xmlns <http://www.w3.org/1999/xhtml>
    - xmlns:xs <http://www.w3.org/2001/XMLSchema>
- `hfp`
    - xmlns <http://www.w3.org/2001/XMLSchema>
    - xmlns:hfp <http://www.w3.org/2001/XMLSchema-hasFacetAndProperty>
    - xmlns:xhtml <http://www.w3.org/1999/xhtml>
    - xmlns:xsi <http://www.w3.org/2001/XMLSchema-instance>
    - xsi:schemaLocation <http://www.w3.org/1999/xhtml>
- `xhtml`
    - xmlns <http://www.w3.org/2001/XMLSchema>
    - xmlns:data-view <http://www.w3.org/2003/g/data-view#>
    - data-view:transformation <http://www.w3.org/2003/g/embeddedRDF.xsl>
- `xsi`
    - xmlns <http://www.w3.org/1999/xhtml>
    - xmlns:xs <http://www.w3.org/2001/XMLSchema>
    - xmlns:rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
- `grddl` `data-view`
    - xmlns <http://www.rddl.org/purposes#>
    - xmlns:admin <http://webns.net/mvcb/>
    - xmlns:default73 <http://www.w3.org/2002/07/owl#>
    - xmlns:default87 <http://www.w3.org/2000/01/rdf-schema#>
    - xmlns:default90 <http://xmlns.com/foaf/0.1/>
    - xmlns:default91 <http://usefulinc.com/ns/doap#>
    - xmlns:default95 <http://purl.org/dc/elements/1.1/>
    - xmlns:rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
- `rddl-purposes` `purposes`
    - xmlns <http://www.w3.org/1999/xhtml>
    - xmlns:xlink <http://www.w3.org/1999/xlink>
    - xmlns:rddl <http://www.rddl.org/>
- `rddl`
    - xmlns <http://www.w3.org/1999/xhtml>
    - xmlns:xlink <http://www.w3.org/1999/xlink>
    - xmlns:rddl <http://www.rddl.org/>
- `xlink`
    - xmlns:xs <http://www.w3.org/2001/XMLSchema>
    - xmlns:xlink <http://www.w3.org/1999/xlink>
- `admin`
    - xmlns <http://www.w3.org/1999/xhtml>
    - xmlns:xlink <http://www.w3.org/1999/xlink>
    - xmlns:rddl <http://www.rddl.org/>
    - xmlns <http://purl.org/rss/1.0/>
    - xmlns:rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - xmlns:admin <http://webns.net/mvcb/>
- `foaf`
    - xmlns:foaf <http://xmlns.com/foaf/0.1/>
    - xmlns:rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - xmlns:rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - xmlns:owl <http://www.w3.org/2002/07/owl#>
    - xmlns:dc <http://purl.org/dc/elements/1.1/>
    - xmlns:vs <http://www.w3.org/2003/06/sw-vocab-status/ns#>
    - xmlns:wot <http://xmlns.com/wot/0.1/>
- `doap`
    - xmlns:doap <http://usefulinc.com/ns/doap#>
    - xmlns:rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - xmlns:rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - xmlns:owl <http://www.w3.org/2002/07/owl#>
    - xmlns:dc <http://purl.org/dc/elements/1.1/>
    - xmlns:vs <http://www.w3.org/2003/06/sw-vocab-status/ns#>
    - xmlns:foaf <http://xmlns.com/foaf/0.1/>
- `vs` `st`
    - xmlns <http://www.w3.org/2003/06/sw-vocab-status/ns#>
    - xmlns:vs <http://www.w3.org/2003/06/sw-vocab-status/ns#>
    - xmlns:rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - xmlns:rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - xmlns:owl <http://www.w3.org/2002/07/owl#>
    - xmlns:dc <http://purl.org/dc/elements/1.1/>
    - xmlns:foaf <http://xmlns.com/foaf/0.1/>
    - xmlns:vann <http://purl.org/vocab/vann/>
- `wot`
    - xmlns <http://www.w3.org/1999/xhtml>
    - xmlns:wot <http://xmlns.com/wot/0.1/>
    - xmlns:rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - xmlns:rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - xmlns:dc <http://purl.org/dc/elements/1.1/>
    - xmlns:foaf <http://xmlns.com/foaf/0.1/>
    - xmlns:wn <http://xmlns.com/wordnet/1.6/>
- `vann`
    - xmlns <http://www.w3.org/1999/xhtml>
    - xmlns:vann <http://purl.org/vocab/vann/>
    - xmlns:rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - xmlns:rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - xmlns:owl <http://www.w3.org/2002/07/owl#>
    - xmlns:dc <http://purl.org/dc/terms/>
    - xmlns:dcterm <http://purl.org/dc/terms/>
    - xmlns:foaf <http://xmlns.com/foaf/0.1/>
    - xmlns:cc <http://web.resource.org/cc/>
    - xmlns:bio <http://purl.org/vocab/bio/0.1/>
- `wn` `wordnet`
    - xmlns:rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - xmlns:rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - xmlns:owl <http://www.w3.org/2002/07/owl#>
    - xmlns:xsd <http://www.w3.org/2001/XMLSchema#>
    - xmlns:wn20schema <http://www.w3.org/2006/03/wn/wn20/schema/>
    - xmlns:wn20instances <http://www.w3.org/2006/03/wn/wn20/instances/>
- `cc`
    - xmlns <http://web.resource.org/cc/>
    - xmlns:rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - xmlns:rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - xmlns:dc <http://purl.org/dc/elements/1.1/>
- `bio`
    - xmlns:bio <http://purl.org/vocab/bio/0.1/>
    - xmlns:rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - xmlns:rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - xmlns:owl <http://www.w3.org/2002/07/owl#>
    - xmlns:dc <http://purl.org/dc/terms/>
    - xmlns:dct <http://purl.org/dc/terms/>
    - xmlns:skos <http://www.w3.org/2004/02/skos/core#>
    - xmlns:foaf <http://xmlns.com/foaf/0.1/>
    - xmlns:vann <http://purl.org/vocab/vann/>
    - xmlns:cc <http://web.resource.org/cc/>
    - xmlns:st <http://www.w3.org/2003/06/sw-vocab-status/ns#>
    - xmlns:ov <http://open.vocab.org/terms/>
    - xmlns:label <http://purl.org/net/vocab/2004/03/label#>
- `ov`
    - xmlns:rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - xmlns:dc <http://purl.org/dc/elements/1.1/>
- `label`
    - label <http://purl.org/net/vocab/2004/03/label#>
    - rdf <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    - rdfs <http://www.w3.org/2000/01/rdf-schema#>
    - owl <http://www.w3.org/2002/07/owl#>
    - dc <http://purl.org/dc/elements/1.1/>
    - dcterms <http://purl.org/dc/terms/>
    - xml <http://www.w3.org/XML/1998/namespace>
    - xsd <http://www.w3.org/2001/XMLSchema#>
    - foaf <http://xmlns.com/foaf/0.1/>
    - vann <http://purl.org/vocab/vann/>
    - cc <http://web.resource.org/cc/>
