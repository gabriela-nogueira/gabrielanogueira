import React from "react"
import * as S from './styled'

const Post = ({titulo, img, date, timeToRead, category, conteudo}) => {
    return(
        <S.PostWrapper>
            <S.PostImage fluid={img}></S.PostImage>
            <S.PostItem>
                <S.Details>{date} • {timeToRead} min de leitura</S.Details>
                <S.PostTitle>{titulo}</S.PostTitle>
                <S.Description>
                    <S.TagIcon></S.TagIcon> {category}
                </S.Description>
                <S.Content dangerouslySetInnerHTML={{ __html:{conteudo}}}>
                </S.Content>
            </S.PostItem>
        </S.PostWrapper>
    )
}

export default Post