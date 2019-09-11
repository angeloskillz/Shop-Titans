import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About"
import styled from "styled-components"
import Fab from "@material-ui/core/Fab"

const Description = styled.h2`
  font-weight: bold;
  font-size: 14px;
  color: #406081;
  margin-bottom: 16px;
  white-space: pre-wrap;
  padding-left: 10px;
  padding-right: 10px;
`

const Title = styled.h2`
  font-weight: 800;
  font-size: 28px;
  color: #ff665f;
  margin-bottom: 0;
`

const Hero = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
`

export default props => (
  <Layout>
    <SEO title="About" />
    <Hero>
      <Title>About Us</Title>
      <Description>
        Do you like this project? Support it by going to the discord and asking
        Kabam to allow this project to monetize. We could add in a lot more
        features a lot faster. A better url, Guild features, Upgrade tracker,
        Streamer/Youtuber features, Guides, and so much more! These features
        cost money and we can only afford so much ourselves. Check out the
        Roadmap for more details on what we want to build.
      </Description>
      <Description>Click Below To Support The Project!</Description>
      <a
        href="https://discord.gg/shoptitans"
        style={{ margin: "15px" }}
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
          Support The Project
        </Fab>
      </a>
    </Hero>
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
