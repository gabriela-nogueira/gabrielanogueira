import Layout from "../components/Layout/layout"
import React from "react"
import {graphql} from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Tag } from "@styled-icons/boxicons-solid/Tag"
import SEO from "../components/seo"


const PostWrapper = styled.div`
    width:100%;
    margin-top: 2%;

    @media only screen and (max-width: 820px) {
        margin-top:15%;
    }
`

const PostItem = styled.div`
    margin: auto;
    width:60%;
    background-color:#222831;
    margin-top:-15%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    padding-bottom:2%;

    @media only screen and (max-width: 820px) {
        width:90%;
    }
`

const PostImage = styled(Img)`
    width:65%;
    height:auto;
    margin: auto;
    position: relative;
    border-radius: 5px;

    @media only screen and (max-width:820px) {
        width:100%;
    }
`

const PostTitle = styled.div`
    color:#e05275;
    font-size:225%;
    margin-left:2%;
    padding-top:1%;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bold;

    @media only screen and (max-width: 820px) {
        font-size:180%;
        text-align:center;
    }
`

const Details = styled.div`
    color:white;
    font-size:90%;
    padding-top:2%;
    margin-left:2.25%;
    font-family: 'Open Sans Condensed', sans-serif;

    @media only screen and (max-width: 820px) {
        text-align:center;
    }
`

const Description = styled.div`
    color:white;
    font-size:90%;
    margin-left:2%;
    padding-top:1%;
    font-family: 'Open Sans Condensed', sans-serif;
  
`

const TagIcon = styled(Tag)`
    width:25px;
    height:25px;
    margin-top:-0.5%;
    color:#b90e52;
`

const Content = styled.div`
    padding-top:2%;
    color:white;
    margin:auto;
    width:95%;
    text-align:justify;
    line-height: 1.5;
    font-size:120%;
    font-family: 'Roboto Slab', serif;
    
    h1,h2,h3 {
        color:#e05275;
        padding-bottom:1%;
        font-size:135%;
        font-weight: bold;
    }

    a {
        text-decoration:none;
        color:#e05275;
    }

    strong {
        color:#f4becb;
        font-weight: bold;
    }

    @media only screen and (max-width: 820px) {
        marign-top:5%;
    }

`

const BlogPost = ({data}) => {

    const post = data.markdownRemark

    return (
        <>
        <SEO title={post.frontmatter.title}/>
        <Layout>
              <PostWrapper>
                <PostImage fluid={post.frontmatter.cover_img.childImageSharp.fluid}></PostImage>
                <PostItem>
                    <Details>{post.frontmatter.date} • {post.timeToRead} min de leitura</Details>
                    <PostTitle>{post.frontmatter.title}</PostTitle>
                    <Description>
                        <TagIcon></TagIcon> {post.frontmatter.category}
                    </Description>
                    <Content dangerouslySetInnerHTML={{ __html: post.html}}>
                    </Content>
                </PostItem>
              </PostWrapper>
         
       </Layout>
       </>
    )
}

export const query = graphql`
query PostHome($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        category
        cover_img {
          childImageSharp {
            fluid(maxWidth: 1024){
                          ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
      timeToRead
    }
  }
  
`

export default BlogPost