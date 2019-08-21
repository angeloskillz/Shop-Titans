import React from "react"
import { graphql } from "gatsby"
import ImgHero from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About"
import styled from "styled-components"

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
          To support this project, please ask Kabam on the Discord and to give
          approval to monetize this project. If we had permission to monetize,
          we could add in a lot more features a lot faster. A better website
          url, Guild features, Upgrade tracker, Streamer/Youtuber features,
          Guides, and soo much more! These features cost money and we can only
          afford so much ourself. Check out the Roadmap for more details on the
          stuff we want to build.
        </Description>
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
