module.exports = {
  siteMetadata: {
    title: 'Estem a punt!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Estem a punt',
        short_name: 'CUP Vng',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
