import React from 'react'
// import Img from '../../images/about-ngn.jpg'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { theme } from "../../utilis/theme"
import { Link } from 'gatsby'
import arr from '../../images/arrow.svg'



const BlogContainer = styled.section`

	background-color: white;
	position: relative;

	@media (orientation:landscape) {
		margin-top: 80px;
	}

	.container {

		@media (orientation:landscape) {
			@media (max-width: 768px) {
				max-width: 700px;
				margin: auto;
			}
			
			
		}

		@media (max-width: 767px) {
	
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding-top: 30px;
			padding-bottom: 30px;
		}

		@media (min-width: 768px) {
			height: 95%;
			padding-top: 6%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
		@media (min-width: 1024px) {
	
			padding-top: 6%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

	}

	.blog__text {

		@media(min-width: 768px) {
			padding: 0 30px;
		}

		@media (orientation: landscape) {


			@media(min-width: 768px) {
				padding: 0 50px;
			}
		}

	}

	

	.blog-list__container {
	
		padding: 0 20px;
		margin-bottom: 70px;

		@media(min-width: 768px) {
			padding: 0 30px;
			margin-bottom: 40px;
		}

		@media (orientation: landscape) {

			margin-bottom: 30px;

			@media(min-width: 768px) {
				padding: 0 50px;
			}
		}
		
	}

	.glide {
		position: relative;
		.glide__arrows {
			position: absolute;
			top: 0;
			left:0;
			width: calc(100% + 100px);
			margin-left: -50px;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			z-index: 1;

			@media(min-width: 768px) {
				width: calc(100% + 130px);
				margin-left: -65px;
			}
			@media(min-width: 1366px) {
				width: calc(100% + 200px);
				margin-left: -100px;
			}
			@media (orientation:landscape) {
				@media(min-width: 768px) {
					width: calc(100% + 120px);
					margin-left: -60px;
				}
			}

			@media (max-width: 768px) {
				padding: 5px;
			}
			

		}

		.glide__arrow { 

			width: 40px;
			height: 40px;
			border-radius: 50%;
			border: none;
			background-image: url(${arr});
			background-repeat: no-repeat;
			background-size: 60%;
			background-position: center;
			opacity: 0.35;
			background-color: transparent;
			outline: none;
			
			cursor: pointer;
			transition: all 500ms cubic-bezier(.645,.045,.355,1);

			@media (max-width: 768px) {
				background-color: transparent;
				width: 30px;
				height: 30px;
				border: none;
			}

			&:hover {

				opacity: .8;
				
			}
		}

		.glide__arrow--left {
				transform: rotate(90deg);
			}
		.glide__arrow--right {
			transform: rotate(-90deg);
		}
	}

	.blog-list {

		list-style: none;
		display: flex;
		margin: 0;
		padding: 0;
		z-index: 3;

		.blog-list__item {
			margin-bottom: 0;
			padding: 15px;
			transition: all .75s;

			&:hover {
				background-color: ${theme.colors.beigeTransparent};
				
			}
			&:nth-child(2) {
				margin: 0 20px
			}

			position: relative;


			 .gatsby-image-wrapper { 
				width: 100%;
				transition: opacity 1s;

				@media(min-width: 768px) {
					height: 150px;
				}
				@media(min-width: 1366px) {
					height: 300px;
				}

				@media (orientation:landscape) {
					height: 155px;
					@media (min-width: 768px) {
						height: 105px;
					}
					@media (min-width: 1024px) {
						height: 168px;
					}
					@media (min-width: 1366px) {
						height: 178px;
					}
				}

				img {
					max-width: 100%;
					max-height: 100%;
				}
			}

			/* .blog-list__img {

					
					transition: opacity 1s;

					@media(min-width: 768px) {
						height: 150px;
					}
					@media(min-width: 1366px) {
						height: 300px;
					}

					@media (orientation:landscape) {
						height: 155px;
						@media (min-width: 768px) {
							height: 105px;
						}
						@media (min-width: 1024px) {
							height: 180px;
						}
						@media (min-width: 1366px) {
							height: 210px;
						}
					}

				.hover {
					background: ${theme.colors.beige};
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;

					display: none;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					
					h4 {
						color: white;
						font-family: ${theme.fonts.lato};
						text-transform: uppercase;
						margin: 15px 0;
						font-size: .65em;
						letter-spacing: 1px;

						
					}
	
					hr {
						width: 15%;
						margin: 0;
						border: 0;
						background: white;
					}
				}

			} */

			a {
				color: ${theme.colors.gray};
				text-decoration: none;
			}
			
			h3 {
				font-size: .9em;
				line-height: 1.4em;
				padding-right: 0px;
				margin: 15px 0;
				text-align: left;
				min-height: 60px;

				@media (orientation:landscape){
					font-size: .8em;
				}

				@media(min-width: 768px) {
					padding-right: 40px;
					
				}

				
				@media (min-width: 1024px) {
					font-size: .6em;
				}
			}

			p{
				font-size: .5em;
				line-height: 1.7em;
				min-height: 60px;

				@media(max-width: 820px) and (orientation: landscape){
					font-size: 0.7em;
					line-height: 1.5em;
					
				}
			}
		}
	}

	.btn {
		background-color: ${theme.colors.beige};
		color: white;
		padding: 5px 20px;
		font-family: $lato;
		font-size: 0.55em;
		letter-spacing: 1.4px;
		text-transform: uppercase;
		display: block;
		bottom: 0px;
		margin: 0 auto;
		left: 0;
		right: 0;
		width: fit-content;
		border: 2px solid ${theme.colors.beige};
		transition: all .75s;


		@media(min-width: 920px) {
			margin: 30px auto;
		}

		@media (orientation:landscape) {
			position: relative;
			bottom: unset;
			padding: 5px 20px;
			margin-bottom: 25px;
			font-size: 0.7em;

			@media(min-width: 920px){
				font-size: 0.55em;
			}

			@media (min-width: 1200px) {
				bottom: 30px;
			}
		}


		&:hover {
			background: transparent;
			color: ${theme.colors.beige};	
		}
	}
`


const Blog = () => {

	const data = useStaticQuery(graphql`
	{
		allWordpressPost(limit: 10) {
			edges {
			  node {
				title
				id
				path
				categories {
				  id
				  name
				}
				featured_media{
					localFile{
					childImageSharp{
						fluid(maxWidth: 500, maxHeight: 400){
							...GatsbyImageSharpFluid
						}
					}
					}
				}
	  
				content
			  }
			}
		  }
	}
	`)


	return (
		<BlogContainer className="blog" data-aos="fade-up" data-aos-duration="1000" id="blog">
			<div className="container">
				<div className="blog__text">
					<h2>blog.</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vel illo accusantium corrupti ratione dolores, id sit officiis animi quisquam tempore nostrum ullam delectus officia aliquid totam provident magni vitae.</p>
				</div>

				<div className="blog-list__container">

					<div className="glide">
						<div className="glide__track" data-glide-el="track">
							<ul className="glide__slides blog-list">

								{data.allWordpressPost.edges.map(item => {

									return (
										<li className="glide__slide blog-list__item" key={item.node.id}>
											<a href={item.node.path}>
												<div className="blog-list__img">
													<Img fluid={item.node.featured_media.localFile.childImageSharp.fluid} />
													{console.log(item.node)}
												</div>
												<h3>{item.node.title}</h3>
												<p>{item.node.content.substring(3, 400).split(/\s+/).slice(0, 15).join(" ")} ...</p>
											</a>
										</li>
									)
								}
								)}
							</ul>
							<div className="glide__arrows" data-glide-el="controls">
								<button className="glide__arrow glide__arrow--left" data-glide-dir="<"></button>
								<button className="glide__arrow glide__arrow--right" data-glide-dir=">"></button>
							</div>
						</div>
					</div>
				</div>

				<Link to="/blog" className="btn">przejdź do bloga</Link>
			</div>
		</BlogContainer>
	)
}

export default Blog;



