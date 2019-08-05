import React from "react"
import { graphql } from "gatsby"
import ImgHero from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EquipmentBox from "../components/Worker"
import Desktop from "../components/DesktopTab"

import MediaQuery from "react-responsive"
import blacksmith from "../constants/workers/blacksmith"

const workers = [blacksmith]

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
        <img
          src={require("../images/Divider.png")}
          alt="divider"
          style={{ width: "300px" }}
        />
        <p>Update 2.0.1</p>
      </div>
    </div>
    <Desktop />
    <MediaQuery query="(max-width: 720px)">
      <div className="Selectan">
        <div className="Selectan">
          <h1>Workers</h1>
        </div>
        <img
          src={require("../images/Divider2.png")}
          style={{
            width: "200px",
            display: "block",
            margin: "0 auto",
            marginBottom: "24px",
          }}
          alt="divider"
        />
        <div className="CardboxGroupScroll">
          <div className="CardboxGroup">
            {workers.map((equipment, index) => (
              <EquipmentBox key={index} details={equipment} />
            ))}
          </div>
        </div>
      </div>
    </MediaQuery>
  </Layout>
)

export default IndexPage

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
