import React from 'react'
import { Container, Header, Button, Icon } from 'semantic-ui-react'
import doc from '../images/document_base.pdf'
import DocVisualizer from './docvisualizer'

const PropostaEstrategica = props => (
  <Container text style={{ marginBottom: '48px' }} textAlign="justified">
    <Header as="h2" marginBottom="28">
      Proposta Estratègica
    </Header>
    <DocVisualizer doc={doc} />
    <Button color="yellow" href={doc} download>
      <Icon name="file pdf" />
      Descarregat el document
    </Button>
    <Header as="h2">Com fer una esmena?</Header>
    <p>
      Per a fer una esmena al document has d'omplir el formulari indicant la
      pàgina i número de línia a esmenar. A continuació hauràs d'escriure el
      text que vols modificar, eliminar o afegir, i finalment caldrà que
      especifiquis el nou text que proposes.
    </p>
  </Container>
)

export default PropostaEstrategica
