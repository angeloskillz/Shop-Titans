import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { cleanName } from "../utils/util"
import blueprints from "../constants/blueprints"
import Blueprint from "../components/Blueprint"
import Worker from "../components/Worker"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import ImgHero from "gatsby-image"

const Currency = styled.img`
  width: 50px;
  height: 50px;
`

const BlueprintUnlocked = styled.img`
  width: 50px;
  height: 50px;
  margin-left: auto;
`

const Cost = styled.p`
  font-size: 16px;
  color: #6f879f;
  margin-bottom: 0px;
`
const HeroImg = styled.img`
  position: relative;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding-bottom: 10px;
  padding-top: 10px;
`
const Title = styled.h1`
  font-family: Roboto;
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  color: #ff665f;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
`
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
const LvlRq = styled.div`
  padding: 6px;
  border-radius: 20px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  color: #406081;
`

const Resources = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
  font-family: "Roboto";
  font-size: 14px;
  text-align: left;
  color: #bc9060;
  margin-top: -5px;
  margin-bottom: 0px;
  text-align: center;
`

const Icons = styled.div`
  margin: 0 auto;
  width: 100px;
  border-radius: 26px;
  background: #ff665f;
`

const Section = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const Container = styled.div`
  height: 50px;
  width: 100%;
  z-index: -1;
  position: relative;
`

export default ({ pageContext: data }) => {
  const relevantBlueprints = blueprints.filter(
    b =>
      b["Required Worker"] === data.title ||
      b["Required Worker__1"] === data.title
  )

  return (
    <Layout>
      <SEO title={data.name}></SEO>
      <Section>
        <Container />
      </Section>
      <Worker details={data} type="worker" />
      <Title>Blueprints</Title>
      <Resources>
        {relevantBlueprints.map((blueprint, index) => (
          <div key={index}>
            <Blueprint details={blueprint}></Blueprint>
          </div>
        ))}
      </Resources>
    </Layout>
  )
}

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
