import React from "react"
import { graphql } from "gatsby"
import ImgHero from "gatsby-image"
import Fab from "@material-ui/core/Fab"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Homepage from "../components/Homepage"
import WorkerImage from "../components/WorkerImage"

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
        <WorkerImage filename="Logo" alt="Logo" />
        <div style={{ marginTop: "5px" }}>
          <a
            href="https://discord.gg/shoptitans"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fab
              size="small"
              variant="extended"
              color="primary"
              style={{
                fontSize: "12px",
                boxShadow: "none",
                marginRight: "5px",
              }}
            >
              Official Discord
            </Fab>
          </a>
          <a
            href="https://discord.gg/rWMuMdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Fab
              size="small"
              variant="extended"
              color="secondary"
              style={{
                fontSize: "12px",
                boxShadow: "none",
                margin: 0,
                background: "orange",
              }}
            >
              Contact Us
            </Fab>
          </a>
        </div>
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
