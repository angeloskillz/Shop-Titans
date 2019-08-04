import React from "react"
import { graphql } from "gatsby"
import ImgHero from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Classbox from "../components/Class"
import Gauntletbox from "../components/Gauntlet"
import fire from "../constants/gauntlets/fire"
import frost from "../constants/gauntlets/frost"
import lightning from "../constants/gauntlets/lightning"
import stone from "../constants/gauntlets/stone"
import toxic from "../constants/gauntlets/toxic"
import wind from "../constants/gauntlets/wind"
import belts from "../constants/equipment/belts"
import boots from "../constants/equipment/boots"
import consumables from "../constants/equipment/consumables"
import runes from "../constants/equipment/runes"
import lores from "../constants/lores"
import EquipmentBox from "../components/Equipment"
import Desktop from "../components/DesktopTab"

import MediaQuery from "react-responsive"
import StickyFooter from "react-sticky-footer"
import LoreBox from "../components/Lorecard"
import Model from "../components/3dmodel"
import skins from "../constants/skins"
import blacksmith from "../constants/workers/blacksmith";

const gauntlets = [fire, frost, lightning, stone, toxic, wind]
const classes = [

]
const workers = [
  blacksmith
]

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
        <h1>SPELLBREAK WIKI</h1>
        <img
          src={require("../images/Divider.png")}
          alt="divider"
          style={{ width: "300px" }}
        />
        <p>CLOSED ALPHA</p>
      </div>
    </div>
    <Desktop />
    <MediaQuery query="(max-width: 720px)">
      <div className="Selectan">
        <h1>Select a Class</h1>
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
      </div>
      <div className="CardboxGroupScroll">
        <div className="CardboxGroup">
          {classes.map((kind, index) => (
            <Classbox
              key={index}
              name={kind.name}
              image={require(`./../images/Classes/${kind.image}.jpg`)}
              description={kind.description}
              stats={kind.stats}
            />
          ))}
        </div>
      </div>

      <div className="Selectan">
        <h1>Select a Gauntlet</h1>
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
          {gauntlets.map((gauntlet, index) => (
            <Gauntletbox
              key={index}
              title={gauntlet.title}
              image={gauntlet.image}
              description={gauntlet.description}
              subdescription={gauntlet.subdescription}
              stats={gauntlet.stats}
              ultimate={gauntlet.ultimate}
              name={gauntlet.name}
              spellname={gauntlet.spellname}
            />
          ))}
        </div>
      </div>
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
      <div className="Selectan">
        <h1>Belts</h1>
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
          {belts.map((equipment, index) => (
            <EquipmentBox key={index} details={equipment} />
          ))}
        </div>
      </div>
      <div className="Selectan">
        <h1>Boots</h1>
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
          {boots.map((equipment, index) => (
            <EquipmentBox key={index} details={equipment} />
          ))}
        </div>
      </div>
      <div className="Selectan">
        <h1>Consumables</h1>
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
          {consumables.map((equipment, index) => (
            <EquipmentBox key={index} details={equipment} />
          ))}
        </div>
      </div>
      <div className="Selectan">
        <h1>Runes</h1>
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
          {runes.map((equipment, index) => (
            <EquipmentBox key={index} details={equipment} />
          ))}
        </div>
      </div>
      <div className="Selectan">
        <h1>Skins</h1>
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
      </div>
      <div className="CardboxGroupScroll">
        <div className="CardboxGroup">
          {skins.map((skin, index) => (
            <Model
              key={index}
              title={skin.title}
              image={require(`./../images/Skin/${skin.title}.png`)}
            />
          ))}
        </div>
      </div>
      <div className="Selectan">
        <h1>Lores</h1>
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
          {lores.map((lore, index) => (
            <LoreBox
              key={index}
              title={lore.title}
              link={lore.link}
              description={lore.description}
            />
          ))}
        </div>
      </div>
    </MediaQuery>
    <StickyFooter
      className="footer"
      bottomThreshold={50}
      normalStyles={{
        backgroundColor: "",
        padding: "1rem",
        fontSize: "12px",
        color: "white",
        textAlign: "center",
        marginTop: "50px",
        fontWeight: "600",
      }}
      stickyStyles={{
        backgroundColor: "",
        padding: "1rem",
        fontSize: "12px",
        color: "white",
        textAlign: "center",
        marginTop: "50px",
        fontWeight: "800",
      }}
    >
      <p>Copyright © 2019 SBWIKI</p>
      <p>
        Shop Titans Wiki is not affiliated or part of Kabam Games, Inc. All Spellbreak
        copyrights and art assets belong to Proletariat Inc.
      </p>
      Made by{" "}
      <a style={{ color: "#daa54e" }} href="https://twitter.com/AngeloCant1">
        AngeloC
      </a>{" "}
      &{" "}
      <a
        style={{ color: "#daa54e" }}
        href="https://twitter.com/IGNSkillz4Killz"
      >
        Skillz4Killz
      </a>
      <p>Privacy Policy: We don’t store your data.</p>
    </StickyFooter>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    imageOne: file(relativePath: { eq: "BG1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
