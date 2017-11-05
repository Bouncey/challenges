module.exports = {
  siteMetadata: {
    title: 'freeCodeCamp Challenges',
    siteUrl: 'challenge.freecodecamp.org'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'challenges',
        path: `${__dirname}/src/challenges`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-smartypants',
          'gatsby-remark-prismjs'
        ]
      }
    },
    'fcc-transform-challenge-frontmatter'
  ]
};
