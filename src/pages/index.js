import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import IdeasForm from '../components/ideasform'
import Hero from '../components/hero'
import IdeasExample from '../components/ideasexamples'
import PropostaEstrategica from '../components/proposta_estrategica'

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
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(name: { eq: "section_two" }) {
      childImageSharp {
        fluid(maxHeight: 300, maxWidth: 1024, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
