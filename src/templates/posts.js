import React from "react";
import Link from "gatsby-link";
import Header from '../components/blog/header'
import Nav from '../components/blog/nav'
import GlobalStyle from '../styles/globalStyles'
import Footer from '../components/footer'
import Sidebar from '../components/blog/sidebar'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { theme } from '../utilis/theme'

const ListingContainer = styled.main`
	margin: 40px auto;

	.container {
		display: flex;
		justify-content: space-between;
	}

`

const PostsContainer = styled.div`
	background: white;
	width: 70%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 20px;

	.post {
		width: 49%;
	}

	.gatsby-image-wrapper {
		width: 100%;
		height: 210px;
	}

	h3 {
		font-size: .75em
	}

	h3, p{
		color: ${theme.colors.gray}
	}


`

const NavLink = props => {
	if (!props.test) {
		return <Link to={props.url}>{props.text}</Link>;
	} else {
		return <span>{props.text}</span>;
	}
};

const Blog = ({ data, pathContext }) => {
	const { group, index, first, last, pageCount } = pathContext;
	const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
	const nextUrl = (index + 1).toString();

	console.log(group)

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Nav />

			<ListingContainer >
				<div className="container">

					<PostsContainer class="posts">

						{group.map(({ node }) => (
							<div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
								<Link to={'/' + node.slug}>
									<Img fluid={node.featured_media.localFile.childImageSharp.fluid} />
									<h3>{node.title}</h3>
									<p className={"post-content"} dangerouslySetInnerHTML={{ __html: node.content.substring(3, 400).split(/\s+/).slice(0, 25).join(" ") }}></p>
								</Link>


							</div>
						))}
						<div className="previousLink">
							<NavLink test={first} url={"/blog/" + previousUrl} text="Go to Previous Page" />
						</div>
						<div className="nextLink">
							<NavLink test={last} url={"/blog/" + nextUrl} text="Go to Next Page" />
						</div>

					</PostsContainer>

					<Sidebar class="sidebar" />

				</div>
			</ListingContainer>
			<Footer />
		</div>
	);
};
export default Blog;
