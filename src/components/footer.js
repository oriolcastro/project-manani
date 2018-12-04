import React from 'react'
import { Grid, Header, List, Image, Icon } from 'semantic-ui-react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import LogoCUP from '../images/logoCUP.jpg'

const trobades = [
  {
    id: '01',
    subject: 'Drets Socials',
    time: '14 de desembre a les 18 h',
    place: 'Centre Cívic del Tacó',
  },
  {
    id: '02',
    subject: 'Proposta Estratègica 2019',
    time: '15 de desembre a les 18 h',
    place: 'Gran Penya',
  },
  {
    id: '03',
    subject: 'Model Econòmic',
    time: '22 de desembre a les 18 h',
    place: 'Centre Cívic La Geltrú',
  },
]

const Trobada = props => (
  <List.Item>
    <List.Icon
      name="calendar alternate outline"
      size="big"
      verticalAlign="middle"
    />
    <List.Content inverted>
      <List.Header color="#fff">{props.subject}</List.Header>
      <List.Description style={{ whiteSpace: 'pre-wrap' }}>
        {props.time}
        {'\n'}
        {props.place}
      </List.Description>
    </List.Content>
  </List.Item>
)

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
          {trobades.map(i => (
            <Trobada
              time={i.time}
              place={i.place}
              subject={i.subject}
              key={i.id}
            />
          ))}
        </List>
      </Grid.Column>
      <Grid.Column>
        <Image
          src={LogoCUP}
          size="tiny"
          style={{ marginBottom: '24px' }}
          alt=""
        />
        <p style={{ whiteSpace: 'pre-wrap' }}>
          Ateneu Vilanoví (Plaça Llarga, 19 baixos) {'\n'}
          <OutboundLink
            href="http://www.cupvilanova.cat"
            title="Pàgina web de la CUP"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            www.cupvilanova.cat
          </OutboundLink>
          {'\n'}
          <a href="mailto:vilanova@cup.cat">vilanova@cup.cat</a>
        </p>
        <OutboundLink
          href="https://www.facebook.com/cupdevilanova"
          rel="nofollow noopener noreferrer"
          target="_blank"
          title="Pàgina de Facebook de la CUP"
        >
          <Icon
            name="facebook"
            size="large"
            circular
            inverted
            style={{ marginBottom: '0.5rem' }}
          />
        </OutboundLink>
        <OutboundLink
          href="https://twitter.com/cupdevilanova"
          rel="nofollow noopener noreferrer"
          target="_blank"
          title="COmpte de Twitter de la CUP"
          style={{ marginBottom: '0.5rem' }}
        >
          <Icon name="twitter" size="large" circular inverted />
        </OutboundLink>
        <OutboundLink
          href="https://www.instagram.com/cupdevilanova/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          title="Compte d'Instagram de la CUP"
          style={{ marginBottom: '0.5rem' }}
        >
          <Icon name="instagram" size="large" circular inverted />
        </OutboundLink>
        <OutboundLink
          href="http://t.me/cupdevilanova"
          rel="nofollow noopener noreferrer"
          target="_blank"
          title="Canal de Telegram de la CUP"
          style={{ marginBottom: '0.5rem' }}
        >
          <Icon name="telegram plane" size="large" circular inverted />
        </OutboundLink>
        <OutboundLink
          href="https://www.youtube.com/user/cupdevilanova"
          rel="nofollow noopener noreferrer"
          target="_blank"
          title="Canal al Youtube de la CUP"
          style={{ marginBottom: '0.5rem' }}
        >
          <Icon name="youtube" size="large" circular inverted />
        </OutboundLink>
      </Grid.Column>
    </Grid>
  </div>
)

export default Footer
