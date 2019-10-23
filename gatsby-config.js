module.exports = {
  siteMetadata: {
    title: 'Jake Kemsley - Creative Digital Developer',
    description:
      'Customer focussed Digital All-Rounder, with a track record of successfully delivering awesome digital experiences.',
    keywords:
      'JAMStack, react, gatsby, gatsbyjs, Web design, web designer, project manager, web developer, frontend developer, html5 banners, websites, apps, display, edms, games, microsites, landing pages',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-54646831-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jake Kemsley Portfolio`,
        short_name: `JK Folio`,
        start_url: `/`,
        background_color: `#212c40`,
        theme_color: `#5f8fd8`,
        display: `standalone`,
        icon: `src/images/jk-logo.svg`,
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-offline`,
  ],
}
