import React, { Component } from 'react'
import { Container, Form, Message, Header, Divider } from 'semantic-ui-react'
import axios from 'axios'

import styles from './ideasform.module.scss'

class MarcaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      marca: '',
      subscribeCampaignInfo: false,
      subscribeGeneralInfo: false,
      formSuccess: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    const data = this.state
    console.log(data)
    axios
      .post('.netlify/functions/send_marca_mail', {
        name: data.name,
        email: data.email,
        marca: data.marca,
        subscribeCampaignInfo: data.subscribeCampaignInfo,
        subscribeGeneralInfo: data.subscribeGeneralInfo,
      })
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
    this.setState({
      name: '',
      email: '',
      marca: '',
      subscribeCampaignInfo: false,
      subscribeGeneralInfo: false,
      formSuccess: true,
    })
  }

  handleChange(event, data) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : data.value
    console.log(value)
    const name = target.type === 'checkbox' ? target.name : data.name

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div id="formulari" style={{ marginBottom: '40px' }}>
        <Container text>
          <Form
            success={this.state.formSuccess}
            onSubmit={this.handleSubmit}
            style={{ marginBottom: '40px' }}
          >
            <Message
              success
              header="Proposta enviada"
              content="Gracies per la teva participació. Rebràs un correu electronic confirmant que hem rebut la proposta de nom per a la candidatura."
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
              label="Propostes de nom per a la candidatura"
              name="marca"
              placeholder="Les teves propostes"
              type="text"
              value={this.state.marca}
              onChange={this.handleChange}
              required
              autoHeight
            />

            <Form.Field
              label="Vull rebre informació sobre l'elaboració del programa electoral i la campanya de la CUP per a les eleccions municipals 2019 al meu correu electrònic"
              type="checkbox"
              control="input"
              name="subscribeCampaignInfo"
              value={this.state.subscribeCampaignInfo}
              onChange={this.handleChange}
              className={styles.myCheckbox}
            />
            <Form.Field
              label="Vull rebre informació general sobre l'activitat de la CUP de Vilanova al meu correu electrònic"
              type="checkbox"
              control="input"
              name="subscribeGeneralInfo"
              value={this.state.susbcribeGeneralInfo}
              onChange={this.handleChange}
              className={styles.myCheckbox}
            />

            <Form.Button type="submit" color="black">
              Envia
            </Form.Button>
          </Form>
          <p style={{ marginBottom: '8px' }}>Política de privacitat</p>
          <p style={{ fontSize: '0.85rem', whiteSpace: 'pre-wrap' }}>
            <b>Responsable: </b> La Candidatura d'Unitat Popular (CUP) de
            Vilanova i la Geltrú és la responsable del tractament d'aquestes
            dades. {'\n'}
            <b>Finalitat: </b> Les dades seran utilitzades per enviar informació
            sobre les activitats i accions de la CUP en cas de consentiment
            exprés. {'\n'}
            <b>Destinataris: </b> Les dades no seran cedides a tercers en cap
            cas. {'\n'}
            <b>Legitimació: </b> L'usuari expressa el seu consentiment en marcar
            les caselles del formulari. {'\n'}
            <b>Drets: </b> Podeu exercir els vostres drets d'accés,
            rectificació, limitació o supressió de les dades a vilanova@cup.cat.{' '}
            {'\n'}
          </p>
        </Container>
      </div>
    )
  }
}

export default MarcaForm
