module.exports = {
  siteMetadata: {
    title: 'Jake Kemsley - Creative Digital Developer',
    description: 'Customer focussed Digital All-Rounder, with a track record of successfully delivering awesome digital experiences.',
    keywords: 'Web design, web designer, project manager, web developer, frontend developer, html5 banners, websites, apps, display, edms, games, microsites, landing pages'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-54646831-1",
        head: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'c66kaa3uliew',
        accessToken: '71fb3137adbf1df4e638d369fab160091410b78d4b08f8bf940a847c09a48cc6'
      }
    }
  ]
}