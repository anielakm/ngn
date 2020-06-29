import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { theme } from '../../utilis/theme'

const IgContainer = styled.section`
margin: 0 0 50px;

@media (min-width: 768px) and (orientation: portrait){
	margin: 150px 0;
}

@media(max-width: 820px) and (orientation:landscape){
	margin: 100px 0 0;
}
@media(min-width: 920px){
	margin: 80px 0 200px;
}
.container {
	
	position: relative;
	display: flex;
	align-items: center;
	
	@media(max-width: 767px){
		flex-direction: column;


	}

	@media (min-width: 768px) and (orientation: portrait){
		background: white;
		padding: 120px 0;
	}

	@media(max-width: 820px) and (orientation:landscape){
		padding: 20px 0;
		background: white;
	
	}
	@media(min-width: 920px){
		background: white;
		padding: 150px 0;
	}

	

	&:before {
		content: '';
		display: block;
		width: 50%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		margin-left: -50%;
		background: white;
		z-index: -1;

		@media(max-width: 767px){
			margin-left: -25%;
		}
		
	}

	.col-1, .col-2 {
		width: 50%;
		@media(max-width: 767px){
			width: 100%;
			padding: 0 15px;
			background: white;
			
		}
	}

	.col-1 {
		
		padding: 50px 15px 15px;
		@media(min-width: 768px){
			padding-right: 5%;
		}
	}

	.col-2 {
		display: flex;
		flex-wrap: wrap;
		@media(max-width: 767px){
			align-items: center;
			justify-content: center;
			padding-bottom: 30px;
		}
		.gatsby-image-wrapper{
			width: 260px;
			height: 260px;
			margin: 1%;
			@media(max-width: 767px){
				margin: 0 0 10px;
			}

			@media(max-width: 820px) and (orientation:landscape){
				width: 180px;
				height: 180px;
			}
		}
	}
}
`

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
		<IgContainer className="ig" id="ig">
			<div className="container">
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
		</IgContainer>
	)
}

export default Ig;