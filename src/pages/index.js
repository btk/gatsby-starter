import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends Component {
  state = {
    astate: true
  }

  render(){
    return (
      <Layout>
        <p>
          Hello world, this is a test!
        </p>

        <SEO
          description={`A description of this page`}
          lang={`en`}
          title={"home"}
        />
      </Layout>
    )
  }
}

export default IndexPage
