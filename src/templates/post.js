import React, { Component } from "react"
import Header from '../components/blog/header'
import Nav from '../components/blog/nav'
import GlobalStyle from '../styles/globalStyles'
import Footer from '../components/footer'
import Sidebar from '../components/blog/sidebar'
import styled from 'styled-components'
import Img from 'gatsby-image'

const SinglePost = styled.main`

`

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <>
                <GlobalStyle />
                <Header />
                <Nav />
                <SinglePost>
                    <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </SinglePost>
                <Sidebar />
                <Footer />
            </>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
       
            }
        }
    }
`