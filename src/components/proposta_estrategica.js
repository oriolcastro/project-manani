import React from 'react'
import { Container, Header, Button } from 'semantic-ui-react'
import doc from '../images/document_base.pdf'
import DocVisualizer from './docvisualizer'

const PropostaEstrategica = props => (
  <Container text style={{ marginBottom: '48px' }}>
    <Header as="h2" marginBottom="28">
      Proposta Estratègica
    </Header>
    <DocVisualizer doc={doc} />
    <p>Pots descarregar-te el document.</p>
    <Button color="yellow" href={doc} download>
      Descarregat el document
    </Button>
  </Container>
)

export default PropostaEstrategica
