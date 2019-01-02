import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const PropostaCandidats = props => (
  <Container
    text
    style={{ marginBottom: '48px' }}
    textAlign="justified"
    id="propCandidats"
  >
    <Header as="h2" marginBottom="28">
      Proposa persones per a la llista electoral
    </Header>
    <p>Construim la llista plegades bla bla bla</p>
    <Header as="h3">Com proposar una candidata?</Header>
    <p>
      Per a proposar una persona per a la llista electoral de la CUP has
      d'omplir el formulari. Pots autoproposar-te tu mateixa o dir-nos una
      tercera persona que creus podria assumir aquesta responsabilitat. En el
      cas de candidatures de tercers la comissió de llistes de l'Assemblea de la
      CUP es posarà en contacte amb aquesta persona.
    </p>
  </Container>
)

export default PropostaCandidats
