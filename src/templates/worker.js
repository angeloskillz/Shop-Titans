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

const Title = styled.h1`
  font-family: "QuadratSerial";
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 3px 6px #000;
  text-transform: uppercase;
  display: block;
`

const Icon1 = styled.img`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 20px;
`
const Icon2 = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  filter: blur(9px);
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

const Description = styled.h2`
  font-family: Roboto;
  font-weight: normal;
  font-style: italic;
  font-size: 14px;
  text-align: center;
  color: #fff;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`

export default ({ pageContext: data }) => {
  const relevantBlueprints = blueprints.filter(
    b =>
      b["Required Worker"] === data.title ||
      b["Required Worker__1"] === data.title
  )

  return (
    <Layout>
      <Icon2
        src={require(`../images/Portraits/${data.name.toLowerCase()}.png`)}
        alt={data.name}
      />
      <Icon1
        src={require(`../images/Portraits/${data.name.toLowerCase()}.png`)}
        alt={data.name}
      />
      <Title>{data.name}</Title>
      <Description>{data.title}</Description>
      <Description>Level Required: {data.level_required}</Description>
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
