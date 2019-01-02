import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import PropostaEstrategica from '../components/proposta_estrategica'
import PropostaCandidats from '../components/proposta_candidats'
import CandidatsForm from '../components/candidatsform'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    {/* <Img
      fluid={data.file.childImageSharp.fluid}
      style={{ marginBottom: '40px' }}
    /> */}
    <PropostaEstrategica />
    <PropostaCandidats />
    <CandidatsForm />
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
