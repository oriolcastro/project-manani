import React from 'react'
import { Container, Form, Checkbox, Message, Header } from 'semantic-ui-react'

const IdeasForm = () => (
  <div id="formulari" style={{ marginBottom: '40px' }}>
    <Container text>
      <Header as="h2">Digues la teva</Header>
      <Form success>
        <Message
          success
          header="Proposta enviada"
          content="Gracies per la teva participació. Rebràs un correu electronic confirmant que hem rebut la proposta"
        />
        <Form.Group widths="equal">
          <Form.Input
            label="Nom"
            placeholder="Carpa Juanita"
            type="name"
            required
            fluid
          />
          <Form.Input
            label="Correu electrònic"
            placeholder="juani@curiositats.mar"
            type="email"
            required
            fluid
          />
        </Form.Group>
        <Form.TextArea
          label="Fes la teva proposta"
          placeholder="Jo crec que Vilanova necessita..."
          required
          autoHeight
        />
        <Form.Field>
          <Checkbox label="Estic d'acord amb les condicions de privacitat" />
        </Form.Field>
        <Form.Button type="submit" color="black">
          Envia
        </Form.Button>
      </Form>
    </Container>
  </div>
)

export default IdeasForm
