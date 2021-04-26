import React from "react"
import * as S from './styled'


const Header = () => (
    <S.HeaderWrapper>
        <S.TitleWrapper>
        <S.Title><S.Letra>Gabi</S.Letra><S.Letra2>Nogueira</S.Letra2></S.Title>
        <S.Navigation>
            <S.Inicio>root@gabriela:~$ </S.Inicio>
            <S.CD>cd </S.CD>
            <S.Pagina to='/'> Início </S.Pagina>
            <S.Pagina to='/sobre-mim'> Quem é a Gabi?</S.Pagina>
            <S.Pagina to='https://github.com/gabriela-nogueira' target="_blank"> Lab </S.Pagina>
            <S.Pagina to='/pesquisar'> Pesquisar </S.Pagina>
        </S.Navigation>
        </S.TitleWrapper>
    </S.HeaderWrapper>
)


export default Header