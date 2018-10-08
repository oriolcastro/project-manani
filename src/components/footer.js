import React from 'react'
import { Container, Grid, Header, List, Image, Icon } from 'semantic-ui-react'
import LogoCUP from '../images/logoCUP.jpg'

const Footer = () => (
  <div
    style={{ backgroundColor: '#000000', color: '#fff', paddingBottom: '24px' }}
  >
    <Grid columns="3" container stackable relaxed>
      <Grid.Column textAlign="justified">
        <Header size="medium" color="yellow">
          Qui som?
        </Header>
        <p>
          La Candidatura d’Unitat Popular és una projecte municipalista que ja
          fa més de 12 anys que treballa assembleàriament per una altra Vilanova
          i la Geltrú possible. Les persones que formem part de la CUP entenem
          que la representació política és un compromís temporal i no un modus
          vivendi o mitjà d’enriquiment personal.
        </p>
      </Grid.Column>
      <Grid.Column>
        <Header size="medium" color="yellow">
          Trobades obertes
        </Header>
        <List divided relaxed="very" verticalAlign="middle" inverted>
          <List.Item>
            <List.Icon name="calendar" size="big" verticalAlign="middle" />
            <List.Content inverted>
              <List.Header color="#fff">Dia - 19.00 h</List.Header>
              <List.Description>Lloc de la trobada</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="calendar" size="big" verticalAlign="middle" />
            <List.Content>
              <List.Header>Dia - 19.00 h</List.Header>
              <List.Description>Lloc de la trobada</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="calendar" size="big" verticalAlign="middle" />
            <List.Content>
              <List.Header>Dia - 19.00 h</List.Header>
              <List.Description>Lloc de la trobada</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="calendar" size="big" verticalAlign="middle" />
            <List.Content>
              <List.Header>Dia - 19.00 h</List.Header>
              <List.Description>Lloc de la trobada</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column>
      <Grid.Column>
        <Image src={LogoCUP} size="tiny" style={{ marginBottom: '24px' }} />
        <p style={{ whiteSpace: 'pre-wrap' }}>
          Ateneu Vilanoví (Plaça Llarga, 19 baixos) {'\n'}
          <a href="http://www.cupvilanova.cat">www.cupvilanova.cat</a>
          {'\n'}
          <a href="mailto:vilanova@cup.cat">vilanova@cup.cat</a>
        </p>
        <a href="http://www.google.es">
          <Icon name="facebook" size="large" circular inverted />
        </a>
        <a href="http://www.google.es">
          <Icon name="twitter" size="large" circular inverted />
        </a>
        <a href="http://www.google.es">
          <Icon name="instagram" size="large" circular inverted />
        </a>
        <a href="http://www.google.es">
          <Icon name="telegram" size="large" circular inverted />
        </a>
        <a href="http://www.google.es">
          <Icon name="youtube" size="large" circular inverted />
        </a>
      </Grid.Column>
    </Grid>
  </div>
)

export default Footer
