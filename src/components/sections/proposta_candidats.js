import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const PropostaCandidats = props => (
  <Container
    text
    style={{ marginBottom: '48px' }}
    textAlign="justified"
    id="propCandidats"
  >
    <Header as="h1" marginBottom="28">
      Proposa persones per a la llista electoral
    </Header>
    <p>
      Per a fer una proposta per a la llista electoral de la CUP has d'omplir el
      formulari que trobaràs a continuació amb les teves dades i les d'aquella
      persona que estàs proposant. La comissió de llistes de l'Assemblea de la
      CUP s'hi posarà en contacte abans del 26 de gener per a conèixer la seva
      disponibilitat.
    </p>
  </Container>
)

export default PropostaCandidats
