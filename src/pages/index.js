import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Hero from '../components/hero'
import PropostaEstrategica from '../components/sections/proposta_estrategica'
import PropostaCandidats from '../components/sections/proposta_candidats'
import CandidatsForm from '../components/forms/candidatsform'
import PropostaMarca from '../components/sections/proposta_marca'
import MarcaForm from '../components/forms/marcaform'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    <PropostaEstrategica />
    <Img
      fluid={data.file.childImageSharp.fluid}
      style={{ marginBottom: '40px' }}
    />
    <PropostaCandidats />
    <CandidatsForm />
    <Img
      fluid={data.file.childImageSharp.fluid}
      style={{ marginBottom: '40px' }}
    />
    <PropostaMarca />
    <MarcaForm />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(name: { eq: "sectionSeparator" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
