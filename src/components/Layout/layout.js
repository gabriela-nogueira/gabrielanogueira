import React from "react"
import Header from "../Header/header"
import Footer from "../Footer/footer"



// Aqui ficará tudo que for padrão em todas as páginas do blog
const Layout = ({ children }) => {
    return (
        <>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
        </>
    )
}

export default Layout

