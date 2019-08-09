import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { cleanName } from "../utils/util"
import blueprints from "../constants/blueprints"
import Blueprint from "../components/Blueprint"

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


export default ({ pageContext: data }) => {
  const relevantBlueprints = blueprints.filter(
    b =>
      b["Required Worker"] === data.title ||
      b["Required Worker__1"] === data.title
  )

  return (
    <Layout>
      <Icons>
        <HeroImg
          src={require(`../images/Portraits/${data.name.toLowerCase()}.png`)}
          alt={data.name}
        />
      </Icons>
    <Title>{data.name}</Title>
    <Description>{data.title}</Description>
    <LvlRq>Level Required: {data.level_required}</LvlRq>
      <Resources>
        <div>
          <Cost>{data.gold_cost}</Cost>
          <Currency src={require(`../images/Currencies/gold.png`)} />
        </div>
        <div>
          <Cost>{data.gem_cost}</Cost>
          <Currency src={require(`../images/Currencies/gem.png`)} />
        </div>
      </Resources>

      <Description>Blueprints Unlocked:</Description>
      {data.blueprint_unlocks.length ? (
        <div>
          <Resources>
            {data.blueprint_unlocks.map((blueprint, index) => {
              const blueprintName = cleanName(blueprint)
              const itemType = blueprints.find(
                b => cleanName(b.Name) === blueprintName
              ).Type
              return (
                <div key={index}>
                  <BlueprintUnlocked
                    src={require(`../images/Items/${itemType}s/${blueprintName}.png`)}
                    alt={data.name}
                  />
                </div>
              )
            })}
          </Resources>
        </div>
      ) : null}
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
