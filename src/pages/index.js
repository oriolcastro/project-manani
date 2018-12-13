import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Segment, Header } from 'semantic-ui-react'

import Layout from '../components/layout'
import IdeasForm from '../components/ideasform'
import Hero from '../components/hero'
import IdeasExample from '../components/ideasexamples'
import PropostaEstrategica from '../components/proposta_estrategica'
import EsmenesForm from '../components/esmenesform'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    <IdeasExample />
    <IdeasForm />
    <Img
      fluid={data.file.childImageSharp.fluid}
      style={{ marginBottom: '40px' }}
    />
    <PropostaEstrategica />
    <Segment color="yellow" inverted>
      <Header size="large">
        EL termini per enviar esmenes ha finalitzat. Ens veiem dissabte a
        l'Assemblea!
      </Header>
    </Segment>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(name: { eq: "section_two" }) {
      childImageSharp {
        fluid(maxHeight: 400, maxWidth: 1024, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
