import React from 'react'

import Layout from '../components/layout'
import IdeasForm from '../components/ideasform'
import Hero from '../components/hero'
import IdeasExample from '../components/ideasexamples'
const IndexPage = () => (
  <Layout>
    <Hero />
    <IdeasExample />
    <IdeasForm />
  </Layout>
)

export default IndexPage
