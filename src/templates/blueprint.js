import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import workers from "../constants/workers/workers"
import { cleanName } from "../utils/util"
import blueprints from "../constants/blueprints"

const Currency = styled.img`
  width: 50px;
  height: 50px;
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

const SubDescription = styled.h2`
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

  return (
    <Layout>
      <Icon2
        src={require(`../images/Items/${data.Type}s/${name}.png`)}
        alt={data.title}
      />
      <Icon1
        src={require(`../images/Items/${data.Type}s/${name}.png`)}
        alt={data.title}
      />
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
            <Cost>{data["Unlock Prerequisite"]}</Cost>
            <Currency
              src={require(`../images/Portraits/${workers[
                data["Required Worker"].toLowerCase()
              ].name.toLowerCase()}.png`)}
            />
          </div>
        ) : null}
        <div>
          <Cost>{data["Research Scrolls"]}</Cost>
          <Currency src={require(`../images/Currencies/bp_unlock.png`)} />
        </div>
        <div>
          <Cost>Level {data["Worker Level"]}</Cost>
          <Currency
            src={require(`../images/Portraits/${workers[
              data["Required Worker"].toLowerCase()
            ].name.toLowerCase()}.png`)}
          />
        </div>
        {data["Required Worker__1"] !== "---" ? (
          <div>
            <Cost>Level {data["Worker Level__1"]}</Cost>
            <Currency
              src={require(`../images/Portraits/${workers[
                data["Required Worker__1"].toLowerCase()
              ].name.toLowerCase()}.png`)}
            />
          </div>
        ) : null}
      </Resources>

      <Title>Craft Requirements:</Title>
      <Resources>
        {resourceNames.map((resource, index) =>
          data[resource] !== "---" ? (
            <div key={index}>
              <Cost>{data[resource]}</Cost>
              <Currency src={require(`../images/Resources/${resource}.png`)} />
            </div>
          ) : null
        )}

        {data.Component !== "---" ? (
          <div>
            <Cost>{data["Amount Needed"]}</Cost>
            <Currency
              src={require(`../images/${folder}/${componentName}.png`)}
            />
          </div>
        ) : null}

        {/* {data["Component__1"] !== "---" ? (
          <div>
            <Cost>{data["Amount Needed__1"]}</Cost>
            <Currency
              src={require(`../images/${componentImageURL(
                data["Component__1"]
              )}`)}
            />
          </div>
              ) : null}*/}
      </Resources>

      <Title>Item Stats:</Title>
      <Resources>
        {stats.map((stat, index) => (
          <div key={index}>
            <Cost>{data[stat.prop]}</Cost>
            <Currency src={require(`../images/Icons/st_${stat.name}.png`)} />
          </div>
        ))}
      </Resources>

      <Title>Energy Costs:</Title>
      <Resources>
        {energy.map((stat, index) => (
          <div key={index}>
            <Cost>
              {stat.split(" ")[0]}: {data[stat]}
            </Cost>
            <Currency src={require("../images/Currencies/energy.png")} />
          </div>
        ))}
      </Resources>

      <div className="scrollable">
        <div className="gradientmodal" />
      </div>
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
    </Layout>
  )
}
