import React from 'react'
import {
  Container,
  Grid,
  Header,
  Button,
  ButtonContent,
} from 'semantic-ui-react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => (
  <>
    <div
      style={{
        background:
          'linear-gradient(rgba(252, 237, 0, 0.5),rgba(252, 237, 0, 0.5)), url(../images/fons.jpg)',
        backgroundBlendMode: 'normal',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        marginTop: '-128px',
        marginBottom: '40px',
      }}
    >
      <Container style={{ paddingTop: '12rem' }} text>
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
  </>
)

export default Hero
