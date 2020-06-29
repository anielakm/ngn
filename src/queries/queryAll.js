'use strict'

module.exports = `
    {
        allWordpressPage {
            edges {
                node {
                    id
                    slug
                    status
                    template
                }
            }
        }



        allWordpressCategory {
            edges {
              node {
                slug
                name
                id
              }
            }
          }


          allWordpressTag {
            edges {
              node {
                id
                name
                slug
              }
            }
          }



        
        allWordpressPost {
            edges {
                node {
                    id  
                    slug
                    status
                    template
                    format
                    title
                    date
                    content
                    categories {
                        id
                        name
                      }
                      featured_media{
                        localFile{
                            childImageSharp{
                                fluid{
                                    srcSet
                                }
                            }
                        }
                    }
                    tags {
                        id
                        name
                        slug
                      }
                }
            }
        }
    }
`