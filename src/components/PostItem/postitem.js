import React from 'react'
import * as S from './styled'
import { useStaticQuery, graphql } from "gatsby"

const PostItem = () => {

    const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              cover_img {
                childImageSharp {
                  fluid(maxWidth: 1024) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }`)

  const postList = allMarkdownRemark.edges

  return (
    <S.PostItemWrapper>
        {postList.map(({ 
         node: {
          frontmatter: {category, date, title, cover_img},
          timeToRead,
          fields : { slug}
          },
        }) => (
        <S.PostItemLink to={slug} >
            <S.PostWrapper>
                <S.PostTag to="">{category}</S.PostTag>
                <S.PostImage fluid={cover_img.childImageSharp.fluid}></S.PostImage>
                <S.PostInfo>{date} • {timeToRead} min de leitura</S.PostInfo>
                <S.PostTitle>{title}</S.PostTitle>
            </S.PostWrapper>
        </S.PostItemLink>
        ))}  
    </S.PostItemWrapper>
  )
    
}



export default PostItem