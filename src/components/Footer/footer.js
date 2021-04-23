import React from "react"
import * as S from './styled'

const Footer = () => {
    return (
        <S.Wrapper>
            <S.Data>2021 - Gabriela Nogueira</S.Data>
            <S.SocialMedia>
                <a href="https://github.com/gabriela-nogueira" target="_blank"><S.GitIcon></S.GitIcon></a>
                <a href="https://www.linkedin.com/in/gabriela-nogueira/" target="_blank"><S.LinkedinIcon></S.LinkedinIcon></a>
                <a href="http://instagram.com/gabs.py" target="_blank"><S.InstaIcon></S.InstaIcon></a>
            </S.SocialMedia>
        </S.Wrapper>
    )

}

export default Footer