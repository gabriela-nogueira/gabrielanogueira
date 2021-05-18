import * as React from "react"
import Layout from "../components/Layout/layout"
import PostItem from "../components/PostItem/postitem"
import SEO from "../components/seo"


const IndexPage = () => {
   return (
     <>
     <SEO title="Inicio"/>
     <Layout>
      <PostItem/>
     </Layout>
     
     </>
   )
}

export default IndexPage
