import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<ul style={{ listStyle: "none" }}>
			{data.allWordpressPost.edges.map(post => (
				<li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }} key={post.node.id}>
					<Link
						to={`/post/${post.node.slug}`}
						style={{ display: "flex", color: "black", textDecoration: "none" }}
					>
						<Img
							fluid={post.node.featured_media.localFile.childImageSharp.fluid}
							style={{ width: "200px" }}

						/>
						<div style={{ width: "75%" }}>
							<h3
								dangerouslySetInnerHTML={{ __html: post.node.title }}
								style={{ marginBottom: 0 }}
							/>
							<p style={{ margin: 0, color: "grey" }}>
								Written by {post.node.author.name} on {post.node.date}
							</p>
							<div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
						</div>
					</Link>
				</li>
			))}
		</ul>
	</Layout>
)

export default Blog

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
		  slug
		  id
          author {
            name
          }
          date(formatString: "MMMM DD, YYYY")
		  featured_media {
			localFile {
			  childImageSharp {
				fluid{
					...GatsbyImageSharpFluid_noBase64
				}
			  }
			}
		  }
        }
      }
    }
  }
`
