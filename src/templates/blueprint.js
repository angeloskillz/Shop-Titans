import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import workers from "../constants/workers/workers"
import { cleanName } from "../utils/util"
import blueprints from "../constants/blueprints"

const BlueprintBox = styled.div`
  position: relative;
  display: block;
  margin-right: auto;
  margin-left:auto;
  width: 40px;
  height: 40px;
  padding: 9px;
  border-radius: 19px;
  background: #38ec94;
  box-shadow: 0px 8px 12px #bdccdb;
  margin-top: 16px;
`

const Currency = styled.img`
  height: 50px;
  margin-top: 16px;
`

const Cost = styled.p`
padding: 6px;
padding-left: 16px;
padding-right: 16px;
border-radius: 20px;
background: #bdccdb80;
font-weight: normal;
font-size: 12px;
text-align: center;
color: #406081;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #000;
  text-transform: uppercase;
  display: block;
`

const Icon1 = styled.img`

width: 40px;
height: 40px;
`


const Resources = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 14px;
  text-align: left;
  color: #bc9060;
  margin-top: -5px;
  margin-bottom: 0px;
  text-align: center;
`

const SubDescription = styled.h2`
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  color: #000;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`

const basic = ["Unlock Prerequisite", "Merchant XP", "Worker XP"]

const stats = [
  { prop: "ATK", name: "attack" },
  { prop: "DEF", name: "defense" },
  { prop: "HP", name: "health" },
]
const crafting = [
  "Crafting Upgrade 1",
  "Crafting Upgrade 2",
  "Crafting Upgrade 3",
  "Crafting Upgrade 4",
  "Crafting Upgrade 5",
]
const craftValues = [
  "Crafts Needed",
  "Crafts Needed__1",
  "Crafts Needed__2",
  "Crafts Needed__3",
  "Crafts Needed__4",
]
const ascension = [
  "Ascension Upgrade 1",
  "Ascension Upgrade 2",
  "Ascension Upgrade 3",
]
const ascendValues = ["Shards Needed", "Shards Needed__1", "Shards Needed__2"]
const energy = [
  "Discount Energy",
  "Surcharge Energy",
  "Suggest Energy",
  "Speed Up Energy",
]

const componentImageURL = name => {
  const item = blueprints.find(b => cleanName(b.Name) === name)
  return item ? `Items/${item.Type}s` : `Components`
}

const resourceNames = [
  "iron",
  "wood",
  "leather",
  "herbs",
  "steel",
  "ironwood",
  "fabric",
  "oil",
]

export default ({ pageContext: data }) => {
  const craftingValue = crafting
    .filter(key => data[key] !== "---")
    .map(key => data[key])

  const ascensionValues = ascension.map(key => data[key])
  const name = cleanName(data.Name)
  const componentName = cleanName(data.Component)
  const folder = componentImageURL(componentName)
  const componentName1 = cleanName(data["Component__1"])
  const folder1 = componentImageURL(componentName1)

  return (
    <Layout>
      <div>
      <BlueprintBox>
                    <Icon1 src={require(`../images/Items/${data.Type}s/${name}.png`)} alt={data.title}/>
                  </BlueprintBox>
      <Title>{data.Name}</Title>
      <SubDescription>{data.Type}</SubDescription>
      <SubDescription>Tier: {data.Tier}</SubDescription>
      <SubDescription>Base Price: {data.Value}</SubDescription>
      <SubDescription>
        Crafting Time: {data["Crafting Time (formatted)"]}
      </SubDescription>

      <Title>Unlock Requirements:</Title>
      <Resources>
        {data["Unlock Prerequisite"] !== "---" ? (
          <div>
            <Currency
              src={require(`../images/Portraits/${workers[
                data["Required Worker"].toLowerCase()
              ].name.toLowerCase()}.png`)}
            />
            <Cost>{data["Unlock Prerequisite"]}</Cost>
          </div>
        ) : null}
        <div>
          <Currency src={require(`../images/Currencies/bp_unlock.png`)} />
          <Cost>{data["Research Scrolls"]}</Cost>
        </div>
        <div>
          <Currency
            src={require(`../images/Portraits/${workers[
              data["Required Worker"].toLowerCase()
            ].name.toLowerCase()}.png`)}
          />
          <Cost>Level {data["Worker Level"]}</Cost>
        </div>
        {data["Required Worker__1"] !== "---" ? (
          <div>
            <Currency
              src={require(`../images/Portraits/${workers[
                data["Required Worker__1"].toLowerCase()
              ].name.toLowerCase()}.png`)}
            />
            <Cost>Level {data["Worker Level__1"]}</Cost>
          </div>
        ) : null}
      </Resources>

      <Title>Craft Requirements:</Title>
      <Resources>
        {resourceNames.map((resource, index) =>
          data[resource] !== "---" ? (
            <div key={index}>
              <Currency src={require(`../images/Resources/${resource}.png`)} />
              <Cost>{data[resource]}</Cost>
            </div>
          ) : null
        )}

        {data.Component !== "---" ? (
          <div>
            <Currency
              src={require(`../images/${folder}/${componentName}.png`)}
            />
            <Cost>{data["Amount Needed"]}</Cost>
          </div>
        ) : null}

        {data["Component__1"] !== "---" ? (
          <div>
            <Currency
              src={require(`../images/${folder1}/${componentName1}.png`)}
            />
            <Cost>{data["Amount Needed__1"]}</Cost>
          </div>
        ) : null}
      </Resources>

      <Title>Item Stats:</Title>
      <Resources>
        {stats.map((stat, index) => (
          <div key={index}>
            <Currency src={require(`../images/Icons/st_${stat.name}.png`)} />
            <Cost>{data[stat.prop]}</Cost>
          </div>
        ))}
      </Resources>

      <Title>Energy Costs:</Title>
      <Resources>
        {energy.map((stat, index) => (
          <div key={index}>
            <Currency src={require("../images/Currencies/energy.png")} />
            <Cost>
              {stat.split(" ")[0]}: {data[stat]}
            </Cost>
          </div>
        ))}
      </Resources>

      {basic
        .filter(key => data[key] !== "---")
        .map((key, index) => (
          <div key={index}>
            <SubDescription>
              {key}: {data[key]}
            </SubDescription>
          </div>
        ))}

      {craftingValue.map((value, index) => (
        <div key={index}>
          <SubDescription>
            Crafting Upgrade {index + 1}: {value} [{" "}
            {data[craftValues[index + 1]]} ]
          </SubDescription>
        </div>
      ))}

      {ascensionValues.map((value, index) => (
        <div key={index}>
          <SubDescription>
            Ascension Upgrade {index + 1}: {value} [{" "}
            {data[ascendValues[index + 1]]} ]
          </SubDescription>
        </div>
      ))}
      </div>
    </Layout>
  )
}
