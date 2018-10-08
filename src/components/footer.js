import React from 'react'
import { Grid, Header, List, Image, Icon } from 'semantic-ui-react'
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
            <List.Icon
              name="calendar alternate outline"
              size="big"
              verticalAlign="middle"
            />
            <List.Content inverted>
              <List.Header color="#fff">Dia - 19.00 h</List.Header>
              <List.Description>Lloc de la trobada</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon
              name="calendar alternate outline"
              size="big"
              verticalAlign="middle"
            />
            <List.Content>
              <List.Header>Dia - 19.00 h</List.Header>
              <List.Description>Lloc de la trobada</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon
              name="calendar alternate outline"
              size="big"
              verticalAlign="middle"
            />
            <List.Content>
              <List.Header>Dia - 19.00 h</List.Header>
              <List.Description>Lloc de la trobada</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon
              name="calendar alternate outline"
              size="big"
              verticalAlign="middle"
            />
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
        <a
          href="https://www.facebook.com/cupdevilanova"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <Icon
            name="facebook"
            size="large"
            circular
            inverted
            style={{ marginBottom: '0.5rem' }}
          />
        </a>
        <a
          href="https://twitter.com/cupdevilanova"
          rel="nofollow noopener noreferrer"
          target="_blank"
          style={{ marginBottom: '0.5rem' }}
        >
          <Icon name="twitter" size="large" circular inverted />
        </a>
        <a
          href="https://www.instagram.com/cupdevilanova/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          style={{ marginBottom: '0.5rem' }}
        >
          <Icon name="instagram" size="large" circular inverted />
        </a>
        <a
          href="http://t.me/cupdevilanova"
          rel="nofollow noopener noreferrer"
          target="_blank"
          style={{ marginBottom: '0.5rem' }}
        >
          <Icon name="telegram plane" size="large" circular inverted />
        </a>
        <a
          href="https://www.youtube.com/user/cupdevilanova"
          rel="nofollow noopener noreferrer"
          target="_blank"
          style={{ marginBottom: '0.5rem' }}
        >
          <Icon name="youtube" size="large" circular inverted />
        </a>
      </Grid.Column>
    </Grid>
  </div>
)

export default Footer
