import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <p>It only ends once. Anything that happens before that is just progress.</p>

    <span>— Jacob, Lost</span>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <Link to="/#">Phone:206 250 111</Link>
  </Layout>
)

export default IndexPage
    
   
