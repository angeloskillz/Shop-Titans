import "react-table/react-table.css"

import React from "react"
import blueprints from "../constants/blueprints"
import styled from "styled-components"
import BlueprintCard from "../components/BlueprintCard"
import Layout from "../components/layout"
import SEO from "../components/seo"

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

const HeroContainer = styled.div`
  background-size: cover;
  height: 300px;
  width: 100%;
  position: relative;
`
const Hero = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const IndexPage = props => {
  const relevantBlueprints = {}

  for (const blueprint of blueprints) {
    if (!relevantBlueprints[blueprint.Type])
      relevantBlueprints[blueprint.Type] = [blueprint]
    else relevantBlueprints[blueprint.Type].push(blueprint)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <HeroContainer></HeroContainer>
        <div className="HeroGroup">
          <h1>Blueprints Overview</h1>
        </div>
      </Hero>

      {Object.values(relevantBlueprints).map((blueprints, index) => (
        <div key={index}>
          <div className="Selectan">
            <h1>{blueprints[0].Type}s</h1>
          </div>
          <div className="CardboxGroupScroll">
            <Resources className="CardboxGroup">
              {blueprints.map((blueprint, printIndex) => (
                <BlueprintCard
                  details={blueprint}
                  key={printIndex}
                ></BlueprintCard>
              ))}
            </Resources>
          </div>
        </div>
      ))}
      {/*blueprints.map((blueprint, index) => (
        <BlueprintCard details={blueprint} key={index}></BlueprintCard>
      ))*/}
    </Layout>
  )
}
export default IndexPage
