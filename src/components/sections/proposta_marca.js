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
      La CUP de Vilanova i la Geltrú concorrerà a les properes eleccions
      municipals amb l’objectiu de governar la ciutat. Per reflectir aquesta
      fita, i també representar adequadament la pluralitat de gent i moviments
      populars que són part del seu projecte, proposem que les sigles CUP es
      complementin amb una altra denominació.
    </p>
    <p>
      Per això, obrim aquest formulari per recollir les propostes de “marca” o
      denominació que creguis que poden sumar atractiu, confiança i inclusivitat
      a les sigles de la CUP (Candidatura d’Unitat Popular) de cara als propers
      comicis. Idealment, les propostes haurien de contenir les sigles CUP,
      precedides o seguides per una altra paraula o grup de paraules, seguint
      les fórmules XXXXX-CUP o CUP-XXXXX.
    </p>
    <p>
      Escriu la teva proposta, i vine a l’<b>assemblea del 26 de gener</b> a
      debatre i votar el nom amb què la CUP de Vilanova es presentarà a les
      properes eleccions.
    </p>
  </Container>
)

export default PropostaMarca
