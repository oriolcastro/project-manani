import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import 'semantic-ui-css/semantic.min.css'
import Header from './header'
import Footer from './footer'
import SEO from './SEO'
import favicon from '../images/favicon.ico'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <html lang="ca" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <SEO />
        <Header />
        <div>{children}</div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
