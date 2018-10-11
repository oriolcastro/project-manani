import React, { Component } from 'react'
import { Container, Form, Message, Header } from 'semantic-ui-react'
import axios from 'axios'
import querystring from 'querystring'
import styles from './ideasform.module.scss'

class IdeasForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      hasConfirmedPrivacy: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    const data = this.state
    console.log(data)
    axios
      .post('/.netlify/functions/send_idea', {
        name: data.name,
        email: data.email,
        message: data.message,
        hasConfirmedPrivacy: data.hasConfirmedPrivacy,
      })
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
    //Al final fer setState a blanc
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div id="formulari" style={{ marginBottom: '40px' }}>
        <Container text>
          <Header as="h2">Digues la teva</Header>
          <Form success onSubmit={this.handleSubmit}>
            <Message
              success
              header="Proposta enviada"
              content="Gracies per la teva participació. Rebràs un correu electronic confirmant que hem rebut la proposta"
            />
            <Form.Group widths="equal">
              <Form.Input
                label="Nom"
                name="name"
                placeholder="Carpa Juanita"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                required
                fluid
              />
              <Form.Input
                label="Correu electrònic"
                name="email"
                placeholder="juani@curiositats.mar"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
                fluid
              />
            </Form.Group>
            <Form.TextArea
              label="Fes la teva proposta"
              name="message"
              placeholder="Jo crec que Vilanova necessita..."
              value={this.state.message}
              onChange={this.handleChange}
              required
              autoHeight
            />
            <Form.Field
              label="bla bla bla"
              type="checkbox"
              control="input"
              name="hasConfirmedPrivacy"
              value={this.state.hasConfirmedPrivacy}
              onChange={this.handleChange}
              className={styles.myCheckbox}
            />

            <Form.Button type="submit" color="black">
              Envia
            </Form.Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default IdeasForm
