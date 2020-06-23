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
          families: ['Lato', 'Playfair Display']
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
        username: `https://www.instagram.com/ngnails.pl`,
        // access_token: "IGQVJYNmRrSkxlbWZAQYlRUU0FWMlJEeFR3TDJ0OHVIRUtUQk81MnNTRHdkaWR2TDJ6QmF0M2pmRmZAjY2NrRFBnUGhkTUh2UFV2ZAFpzN2MyZA3V1bFNKZAVhhYTVzR1dQbGRwZAkFpMmtHX0tYNEt5YjJMOQZDZD",
        // instagram_id: "243327832",
        // paginate: 1,
        // maxPosts: 10,
      },
    },

    `gatsby-plugin-smoothscroll`

  ],
}
