import React, { Component } from 'react'
import { Container, Form, Message } from 'semantic-ui-react'
import axios from 'axios'

import styles from './ideasform.module.scss'

class EsmenesForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      pageNumber: {},
      lineNumber: {},
      originalText: '',
      newText: '',
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
      .post('.netlify/functions/send_esmena_mail', {
        name: data.name,
        email: data.email,
        pageNumber: data.pageNumber,
        lineNumber: data.lineNumber,
        originalText: data.originalText,
        newText: data.newText,
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
      pageNumber: {},
      lineNumber: {},
      originalText: '',
      newText: '',
      subscribeCampaignInfo: false,
      subscribeGeneralInfo: false,
      formSuccess: true,
    })
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
          <Form
            success={this.state.formSuccess}
            onSubmit={this.handleSubmit}
            style={{ marginBottom: '40px' }}
          >
            <Message
              success
              header="Proposta enviada"
              content="Gracies per la teva participació. Rebràs un correu electronic confirmant que hem rebut l'esmena"
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
            <Form.Group widths="equal">
              <Form.Input
                label="Número de pàgina"
                name="pageNumber"
                type="number"
                value={this.state.pageNumber}
                onChange={this.handleChange}
                required
                fluid
              />
              <Form.Input
                label="Número de línia"
                name="lineNumber"
                type="number"
                value={this.state.lineNumber}
                onChange={this.handleChange}
                required
                fluid
              />
            </Form.Group>
            <Form.TextArea
              label="Text original a esmenar"
              name="originalText"
              placeholder="El text del document que vols esmenear"
              value={this.state.originalText}
              onChange={this.handleChange}
              required
              autoHeight
            />
            <Form.TextArea
              label="Proposta de nou text"
              name="newText"
              placeholder="La teva proposta de nou text"
              value={this.state.newText}
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

export default EsmenesForm
