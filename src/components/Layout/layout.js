import React from "react"
import Header from "../Header/header"



// Aqui ficará tudo que for padrão em todas as páginas do blog
const Layout = ({ children }) => {
    return (
        <>
        <Header></Header>
        <main>{children}</main>
        </>
    )
}

export default Layout

