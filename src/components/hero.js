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
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <AnchorLink href="#propCandidats" offset="180">
              <Button inverted size="large" style={{ marginBottom: '28px' }}>
                <Button.Content>Construïm la llista electoral</Button.Content>
              </Button>
            </AnchorLink>
            <AnchorLink href="#propMarca" offset="180">
              <Button
                color="black"
                size="large"
                style={{ marginBottom: '28px' }}
              >
                <Button.Content>
                  Propostes pel nom de la candidatura
                </Button.Content>
              </Button>
            </AnchorLink>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default Hero
