import React from 'react'
import { Container, Grid, Header, Button } from 'semantic-ui-react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from './hero.module.scss'

const Hero = () => (
  <div className={styles.heroBackground}>
    <Container style={{ paddingTop: '25vh' }} text>
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <Header
              as="h1"
              textAlign="center"
              style={{ fontWeight: '400' }}
              inverted
            >
              ESTEM A PUNT!
            </Header>
            <Header
              size="tiny"
              inverted
              textAlign="justified"
              style={{
                whiteSpace: 'pre-wrap',
                width: '90%',
                margin: 'auto',
                textAlignLast: 'left',
              }}
            >
              Les eleccions de 2019 són una oportunitat única per començar a
              construir una altra Vilanova i la Geltrú possible, una ciutat que
              aprofiti tot el potencial de transformació que la ciutadania
              demostra dia rere dia des de mil fronts diferents.
              {'\n'}
              {'\n'}
              Aquest és un espai per rebre propostes i confeccionar
              horitzontalment el millor programa polític possible i aixecar una
              ciutat integradora, feminista, socialment justa, urbanísticament
              responsable i on la ciutadania sempre tingui l’última paraula.
              {'\n'}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <AnchorLink href="#formulari" offset="270">
              <Button color="black" size="large">
                <Button.Content>Digues la teva</Button.Content>
              </Button>
            </AnchorLink>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default Hero
