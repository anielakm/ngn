import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { theme } from "../../utilis/theme"

const YTContainer = styled.section`
	padding: 120px 0 100px;
	height: 100%;
	overflow: hidden;

	@media(min-width:767px){
		padding: 150px 0;
	}

	@media(max-width: 820px) and (orientation:landscape){
		padding: 90px 0;
	}


	.yt__items {
		display: flex;
		position: absolute;
		bottom: 0;
		left: 0;

		@media(max-width:767px){
			flex-direction: column;
			position: relative;
			margin-top: -100px;
		}

		@media(max-width: 820px) and (orientation:landscape){
			margin-left: 5%;
		}
		
		a{
			
			width: 300px;
			margin-right:10px;

			@media(max-width:767px){
				margin-bottom: 10px;
			}

			@media(max-width: 820px) and (orientation:landscape){
				width: 220px;
			}
		}
	}

	.yt__text {
		width: 90%;
		background: white;
		margin-right: 0;
		margin-left: 0;
		padding: 30px 0 100px 30px;
		position: relative;

		@media(min-width:768px){
			padding: 30px 50px 150px;
			margin-left: auto;
		}
		@media(min-width:920px){
			padding: 30px 50px 200px;

		}

		p{
			@media(min-width:768px){
				padding-right: 150px;
			}
			
		}
		

		&:before {
			position: absolute;
			content: '';
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;
			margin-right: -50%;
			background: white;
			z-index: -1;
			display: block;
		}
	}

	a {
		div {
			max-width: 300px;

		}

		
	}


	.row {
		.container {
		
			position: relative;
			
		}
	}
`


const Yt = ({ dictionary, lang }) => {

	const data = useStaticQuery(graphql`
	{
		allYoutubeVideo(limit: 3) {
		  edges {
			node {
			  title
			  id
			  videoId
			  localThumbnail {
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

		<YTContainer className="yt" id="yt">
			<div className="row" >

				<div className="container">
					<div className="yt__text">
						<h2>youtube.</h2>
						<p>{lang === 'pl' ? dictionary.pl.yt : dictionary.en.yt}</p>
					</div>

					<div className="yt__items">

						{data.allYoutubeVideo.edges.map(item =>
							(<a href={'https://youtu.be/' + item.node.videoId} key={item.node.id} target="_blank">
								<Img fluid={item.node.localThumbnail.childImageSharp.fluid} />
							</a>
							)
						)}

					</div>



				</div>

			</div>
		</YTContainer>
	)
}

export default Yt;