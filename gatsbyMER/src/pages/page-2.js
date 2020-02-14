import React from "react"
import { Link } from "gatsby"
import Counter from '../components/Counter'
import Imge from "../components/img"


import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi,again</h1>
    <p>You like counting? Here you go!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Imge />
    </div>
    <div>
      <Counter />
    </div>
    <Link to="/#Email">meronzin@gmail.com</Link>
  </Layout>
)

export default SecondPage
    

  

