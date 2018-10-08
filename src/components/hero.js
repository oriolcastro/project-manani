import React from 'react'
import {
  Container,
  Grid,
  Header,
  Button,
  ButtonContent,
} from 'semantic-ui-react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from './hero.module.scss'

const Hero = () => (
  <div className={styles.heroBackground}>
    <Container style={{ paddingTop: '16rem' }} text>
      <Grid centered>
        <Grid.Row>
          <Grid.Column textAlign="justified">
            <Header as="h1">
              Vilanova té un potencial ampli de transformació!
            </Header>
            <Header size="small">
              Milers de persones en aquesta ciutat aixequen l'alternativa cada
              dia des de molts fronts diferents: feminisme, ecologisme, dret a
              l'habitatge, programant cultura... Es per això que creiem que
              estem a punt.{' '}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <AnchorLink href="#formulari" offset="35">
              <Button animated="fade" color="black" size="large">
                <Button.Content visible>Digues la teva</Button.Content>
                <Button.Content hidden>Participa!</Button.Content>
              </Button>
            </AnchorLink>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default Hero
