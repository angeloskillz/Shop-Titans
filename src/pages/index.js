import React from "react"
import { graphql } from "gatsby"
import ImgHero from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Homepage from "../components/Homepage"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroContainer">
        <ImgHero
          imgStyle={{ objectPosition: "center top" }}
          className="Img"
          fluid={props.data.imageOne.childImageSharp.fixed}
        />
        <div className="gradient" />
      </div>
      <div className="HeroGroup">
        <h1>Shop Titans</h1>
        <p>Update 2.0.1</p>
      </div>
    </div>
    <Homepage />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    imageOne: file(relativePath: { eq: "Backgrounds/BG1.jpg" }) {
      childImageSharp {
        fixed(width: 1366) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
