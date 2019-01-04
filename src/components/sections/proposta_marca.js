import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const PropostaMarca = props => (
  <Container
    text
    style={{ marginBottom: '48px' }}
    textAlign="justified"
    id="propMarca"
  >
    <Header as="h1" marginBottom="28">
      Proposa noms per a la candidatura
    </Header>
    <p>
      Quin ha de ser el nom que complementi la candidatura de la CUP bla bla bla
      EXPLICACIÓ DE QUE ÉS
    </p>
  </Container>
)

export default PropostaMarca
