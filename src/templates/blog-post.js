import Layout from "../components/Layout/layout"
import Post from "../components/Post/post"
import * as S from "../components/Post/styled"
import React from "react"
import {graphql} from "gatsby"

const BlogPost = ({ data }) => {

    const post = data.markdownRemark

    return (

        <Layout>
              <S.PostWrapper>
                <S.PostImage fluid={post.frontmatter.cover_img.childImageSharp.fluid}></S.PostImage>
                <S.PostItem>
                    <S.Details>{post.frontmatter.date} • {post.timeToRead} min de leitura</S.Details>
                    <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
                    <S.Description>
                        <S.TagIcon></S.TagIcon> {post.frontmatter.category}
                    </S.Description>
                    <S.Content dangerouslySetInnerHTML={{ __html: post.html}}>
                    </S.Content>
                </S.PostItem>
              </S.PostWrapper>
         
       </Layout>
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