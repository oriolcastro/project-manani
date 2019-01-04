import React from 'react'
import { Container, Header, Button, Icon } from 'semantic-ui-react'
import doc from '../../images/document_final.pdf'
import DocVisualizer from '../docvisualizer'

const PropostaEstrategica = props => (
  <Container
    text
    style={{ marginBottom: '48px' }}
    textAlign="justified"
    id="propEstrategica"
  >
    <Header as="h1" marginBottom="28">
      Proposta Estratègica
    </Header>
    <p>
      Aquí teniu el document aprovat en Assemblea el dissabte 15 de desembre
      després del debat i votació de les esmenes
    </p>

    <DocVisualizer doc={doc} />
    <Button icon labelPosition="right" color="yellow" href={doc} download>
      <Icon name="file pdf" />
      Descarregat el document
    </Button>
    {/* <Header as="h2">Com fer una esmena?</Header>
    <p>
      Per a fer una esmena al document has d'omplir el formulari indicant la
      pàgina i número de línia a esmenar. A continuació hauràs d'escriure el
      text que vols modificar, eliminar o afegir, i finalment caldrà que
      especifiquis el nou text que proposes.
    </p> */}
  </Container>
)

export default PropostaEstrategica
