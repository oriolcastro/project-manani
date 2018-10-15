import React from 'react'
import { Grid, Header, List, Image, Icon } from 'semantic-ui-react'
import LogoCUP from '../images/logoCUP.jpg'

const trobades = [
  {
    id: '01',
    subject: 'Ciutat Feminista',
    time: "20 d'octubre a les 18 h",
    place: 'Ateneu',
  },
  {
    id: '02',
    subject: 'Urbanisme',
    time: '10 de novembre a les 18 h',
    place: 'Centre Cívic de Sant Joan',
  },
  {
    id: '03',
    subject: 'Cultura',
    time: '24 de novembre a les 18 h',
    place: 'Centre Cívic La Sardana',
  },
  {
    id: '04',
    subject: 'Aprofundiment democràtic',
    time: '1 de desembre a les 18 h',
    place: 'Centre Cívic Baix-a-Mar',
  },
  {
    id: '05',
    subject: 'Drets Socials',
    time: '15 de desembre a les 18 h',
    place: 'Centre Cívic del Tacó',
  },
  {
    id: '06',
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
          <a
            href="http://www.cupvilanova.cat"
            title="Pàgina web de la CUP"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            www.cupvilanova.cat
          </a>
          {'\n'}
          <a href="mailto:vilanova@cup.cat">vilanova@cup.cat</a>
        </p>
        <a
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
        </a>
        <a
          href="https://twitter.com/cupdevilanova"
          rel="nofollow noopener noreferrer"
          target="_blank"
          title="COmpte de Twitter de la CUP"
          style={{ marginBottom: '0.5rem' }}
        >
          <Icon name="twitter" size="large" circular inverted />
        </a>
        <a
          href="https://www.instagram.com/cupdevilanova/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          title="Compte d'Instagram de la CUP"
          style={{ marginBottom: '0.5rem' }}
        >
          <Icon name="instagram" size="large" circular inverted />
        </a>
        <a
          href="http://t.me/cupdevilanova"
          rel="nofollow noopener noreferrer"
          target="_blank"
          title="Canal de Telegram de la CUP"
          style={{ marginBottom: '0.5rem' }}
        >
          <Icon name="telegram plane" size="large" circular inverted />
        </a>
        <a
          href="https://www.youtube.com/user/cupdevilanova"
          rel="nofollow noopener noreferrer"
          target="_blank"
          title="Canal al Youtube de la CUP"
          style={{ marginBottom: '0.5rem' }}
        >
          <Icon name="youtube" size="large" circular inverted />
        </a>
      </Grid.Column>
    </Grid>
  </div>
)

export default Footer
