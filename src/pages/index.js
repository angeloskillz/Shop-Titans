import React from "react"
import { graphql } from "gatsby"
import ImgHero from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Homepage from "../components/Homepage"
import { Button } from "@material-ui/core"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroContainer">
        <ImgHero
          imgStyle={{ objectPosition: "center top" }}
          className="Img"
          fluid={props.data.imageOne.childImageSharp.fluid}
        />
        <div className="gradient" />
      </div>
      <div className="HeroGroup">
        <h1>Shop Titans</h1>
        <p style={{ marginBottom: "16px" }}>Update 2.0.1</p>
        <a href="https://discord.gg/shoptitans" style={{ margin: "16px" }}>
          <Button variant="contained" color="primary" style={{marginBottom: '16px'}}>
            Official Discord
          </Button>
        </a>
        <a href="https://discord.gg/rWMuMdk">
          <Button variant="contained" color="secondary" style={{marginBottom: '16px'}}>
            Wiki Discord
          </Button>
        </a>
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
        fluid(maxWidth: 1366) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
