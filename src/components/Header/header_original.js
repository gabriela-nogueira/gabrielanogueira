import React from "react"
import * as S from './styled'


const Header = () => (
    <S.HeaderWrapper>
        <S.TitleWrapper>
        <S.Title >Gabriela Nogueira<S.Pisca>|</S.Pisca></S.Title>
        <S.Navigation>
            <S.Inicio>root@gabriela:~$ </S.Inicio>
            <S.CD>cd </S.CD>
            <S.Pagina > /Início </S.Pagina>
            <S.Pagina > /Sobre mim</S.Pagina>
            <S.Pagina > /Lab </S.Pagina>
            <S.Pagina > /Projetos </S.Pagina>
            <S.Pagina > /Pesquisar </S.Pagina>
        </S.Navigation>
        <S.MenuLateral></S.MenuLateral>
        </S.TitleWrapper>
    </S.HeaderWrapper>
)


export default Header