import React from "react"
import { graphql } from "gatsby"
import ImgHero from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About"
import styled from "styled-components"
import { Button } from "@material-ui/core"

const Description = styled.h2`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  color: #406081;
  text-align: center;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

export default props => (
  <Layout>
    <SEO title="About" />
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
        <h1>About Us</h1>
        <Description>
          Do you like this project? Help support it by going to the discord and
          asking Kabam to allow this project to monetize. We could add in a lot
          more features a lot faster. A better url, Guild features, Upgrade
          tracker, Streamer/Youtuber features, Guides, and soo much more! These
          features cost money and we can only afford so much ourself. Check out
          the Roadmap for more details on the stuff we want to build.
        </Description>
        <a href="https://discord.gg/shoptitans" style={{ margin: "15px" }}>
          <Button variant="contained" color="primary">
            Support The Project
          </Button>
        </a>
      </div>
    </div>
    <About />
  </Layout>
)

export const pageQuery = graphql`
  {
    imageOne: file(relativePath: { eq: "Backgrounds/BG1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
