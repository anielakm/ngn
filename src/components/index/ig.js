import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Ig = () => {

	const data = useStaticQuery(graphql`
	{
		allInstaNode(limit: 4) {
		  edges {
			node {
			  localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid_noBase64
				  }
				}
			  }
			}
		  }
		}
	  }
	`)
	return (
		<section className="ig" id="ig">
			<div className="container rellax" data-rellax-speed="-1.5">
				<div className="col-1 " >

					<h2>instagram.</h2>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ipsum hic dolorum sapiente! Obcaecati illo, culpa, accusantium neque repudiandae quas unde soluta, sunt odio nam magnam eveniet consectetur maxime ab?</p>

				</div>
				<div className="col-2">

					{data.allInstaNode.edges.map((item, i) => (

						<Img fluid={item.node.localFile.childImageSharp.fluid} key={i} />
					))}


				</div>

			</div>
		</section>
	)
}

export default Ig;