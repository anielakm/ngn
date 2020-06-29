module.exports = {
  siteMetadata: {
    title: "page-name",
    titleTemplate: "page-name template",
    author: 'Aniela Katana-Matłok',
    siteUrl: 'https://ngnails.pl',
    description: "page-name",
    url: "https://anielakm.pl", // No trailing slash allowed!
    image: "/images/logo.png", // Path to your image you placed in the 'static' folder
    // twitterUsername: "@occlumency",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-sitemap`,


    {
      resolve: "gatsby-source-wordpress",
      options: {
        // your WordPress source
        baseUrl: `ngnails.pl/`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true


      }

    },

    `gatsby-plugin-styled-components`,

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Playfair Display', 'Lato']
        }
      }
    },

    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCguUVgW3EHhh-Mqc7QQqeYw'],
        apiKey: 'AIzaSyDbF6u7NDpsNEBy0ZCH63QotVEn_WUWa-E',
        maxVideos: 50 // Defaults to 50
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `ngnails.pl`,
        access_token: "EAA5nAaPZCJ1YBAI1FSlO2gk7UnvlFfT4WUUmBnX5yUJlUAzZAB6jvyYhlA9uu5W1DM5y7QUmssTnPodpK3JZB630dTrbFWL80nUoDX1IAM5GrmsbMu7KZCccEU1Y5XnxAgWdUv96HYOLHnJUoI0aJ3AXZCYQzhC2M153eMMIJtQZDZD",
        instagram_id: "17841401914963801",
        paginate: 100,
        maxPosts: 10,
      },
    },


    `gatsby-plugin-smoothscroll`

  ],
}
