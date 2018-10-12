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
              VILANOVA TÉ UN POTENCIAL AMPLI DE TRANSFORMACIÓ!
            </Header>
            <Header
              size="medium"
              inverted
              style={{ whiteSpace: 'pre-wrap', width: '90%', margin: 'auto' }}
            >
              Milers de persones en aquesta ciutat aixequen l'alternativa cada
              dia des de molts fronts diferents: feminisme, ecologisme, dret a
              l'habitatge, programant cultura...
              {'\n'}
              {'\n'}
              Es per això que creiem que estem a punt.{' '}
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
