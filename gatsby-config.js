module.exports = {
  siteMetadata: {
    title: 'Clearbit Sales Operations Handbook',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `c5rxotc5huuu`,
        accessToken: `c45d96adf15d611d2bcdf5b8770cd5cc0c2debb40df2b35ad4bd31f60c8c8d84`,
      },
    },
  ]
};
