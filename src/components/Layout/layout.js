import React from "react"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import * as S from "./styled"


// Aqui ficará tudo que for padrão em todas as páginas do blog
const Layout = ({ children }) => {
    return (
        <S.Space>
            <Header></Header>
            <main>{children}</main>
        </S.Space>
    )
}

export default Layout

