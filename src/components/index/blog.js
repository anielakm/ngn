import React from 'react'
// import Img from '../../images/about-ngn.jpg'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { theme } from "../../utilis/theme"
import Link from 'gatsby-link'
import arr from '../../images/arrow.svg'





const BlogContainer = styled.section`

	position: relative;

	@media (orientation:landscape) {
		margin-top: 80px;
	}

	.blog__container {
		width: 100%;
		/* margin-right: 0;
		margin-left: auto; */
	}

	.blog__text {

		margin-left: 315px

	}

	


	.glide {
		position: relative;

		.glide__slide {
			width: 9.4% !important;

			.blog-list__img {
				position: relative;

				.blog__category {
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					display: flex;
					justify-content: center;
					margin-bottom: -10px;
				
					span {
						background: ${theme.colors.beige};
						color: white;
						display: block;
						width: fit-content;
						padding: 5px 12px;
						font-size: .48em;
						letter-spacing: .4px;
						text-transform: uppercase;
						margin: 0 5px;

					}

				}
			}

			.blog-list__text {
				margin-top: 10px;

			}
		}

		.glide__bullets {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 5px;
		}

		.glide__bullet {
			width: 7px;
			height: 7px;
			border-radius: 50%;
			display: block;
			border: none;
			outline: none;
			padding: 0;
			background-color: ${theme.colors.beige};
			margin: 0 2px;
			cursor: pointer;

		}

		.glide__bullet--active {
			width: 12px;
			height: 12px;
	
		}

		.glide__slide>a {
			display: flex;
			flex-direction: column;
		}
		.glide__slide:first-child {
			margin-left: 300px
		}

		.glide__slide:nth-child(2n+1) {

			.blog-list__img {
				order: 1;
			}

			.blog-list__text {
				order: 2;
				margin-top: 35px;
			}

			
		}
		.glide__slide:nth-child(2n) {

			.blog-list__img {
				order: 2;

				.blog__category {
					top: 0;
					bottom: unset;
					margin-top: -10px;
				}

			}

			.blog-list__text {
				order: 1;
				margin-top: 0;
				margin-bottom: 35px;

			}
 			
		}
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
		margin: 40px 0;
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
				height: auto;

				img {
					max-width: 100%;
					max-height: 100%;
				}
			}

			a {
				color: ${theme.colors.gray};
				text-decoration: none;
			}
			
			h3 {
				font-size: .9em;
				line-height: 1.7em;
				padding-right: 0px;
				margin: 0px 0 5px;
				text-align: left;
				/* min-height: 60px; */
				text-transform: uppercase;

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
				margin: 0;

				@media(max-width: 820px) and (orientation: landscape){
					font-size: 0.7em;
					line-height: 1.5em;
					
				}
			}
		}
	}

	.btn {
		color: ${theme.colors.gray};
		font-family: ${theme.fonts.playf};
		display: block;
		width: fit-content;
		margin: 30px auto 0;

	}
`


const Blog = ({ dictionary, lang }) => {

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
				  featured_media {
					localFile {
					  childImageSharp {
						fluid(maxWidth: 720) {
						  ...GatsbyImageSharpFluid
						}
					  }
					}
					author {
					  name
					}
					date(formatString: "DD.MM.YYYY")
				  }
				  content
				}
			  }
		  }
	}
	`)



	return (
		<BlogContainer id="blog">
			<div className="blog__container">

				<div className="blog__text">
					<h2>{lang === 'pl' ? dictionary.pl.blog_title : dictionary.en.blog_title}.</h2>
					{/* <p>{lang === 'pl' ? dictionary.pl.blog : dictionary.en.blog}.</p> */}
				</div>

				<div className="glide">
					<div className="glide__track" data-glide-el="track">
						<ul className="glide__slides blog-list">

							{data.allWordpressPost.edges.map(item => {

								return (
									<li className="glide__slide blog-list__item" key={item.node.id}>
										<Link to={'/' + item.node.slug}>

											<div className="blog-list__img">
												<Img fluid={item.node.featured_media.localFile.childImageSharp.fluid} />
												<div className="blog__category">
													{item.node.categories.map(item => {
														return <span>{item.name}</span>
													})}
												</div>
											</div>

											<div className="blog-list__text">

												<h3>{item.node.title}</h3>
												<p>Autor: {item.node.featured_media.author.name}, {item.node.featured_media.date}</p>

											</div>

										</Link>
									</li>
								)
							}
							)}
						</ul>

						<div className="glide__bullets" data-glide-el="controls[nav]">
							<button className="glide__bullet" data-glide-dir="=0"></button>
							<button className="glide__bullet" data-glide-dir="=3"></button>
							<button className="glide__bullet" data-glide-dir="=6"></button>

						</div>
					</div>
				</div>

				<Link to="/blog" className="btn">Zobacz więcej -></Link>
			</div>
		</BlogContainer >
	)
}

export default Blog;



