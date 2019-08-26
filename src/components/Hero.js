import React from "react"
import styled from "styled-components"
import WorkerImage from "../components/WorkerImage"
import HeroItem from "../components/HeroItem"
import { cleanName } from "../utils/util"
import IconImage from "../components/IconImage"

const Class = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 367px;
  width: 280px;
  border-radius: 26px;
  background: #fff;
  box-shadow: 0px 8px 12px #bdccdb;
  margin-left: 16px;
  margin-top: 16px;
`
const Icons = styled.div`
  margin: 0 auto;
  margin-top: 16px;
  width: 70px;
  border-radius: 26px;
  background: #ff665f;
  padding-bottom: 10px;
  padding-top: 10px;
`

const Title = styled.h1`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  color: #ff665f;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
`

const Description = styled.h2`
  font-weight: bold;
  font-size: 14px;
  color: #406081;
  text-align: center;
  margin-bottom: 0px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const SubDescription = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  text-align: center;
  margin: 2px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const Gold = styled.div`
  position: absolute;
  display: flex;
  width: 280px;
  border-radius: 26px;
  background: #f0f4f8;
  border-radius: 0px 0px 26px 26px;
  text-align: right;
  bottom: 0;
  justify-content: flex-end;
`
const Cost = styled.p`
  font-weight: normal;
  font-size: 10px;
  color: #406081;
  margin: 10px;
  margin-left: 4px;
  margin-right: 4px;
`
const Currency = styled.img`
  width: 15px;
  height: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const ItemSlots = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  width: 250px;
  margin: auto;
  margin-top: 0px;
`

const ItemTypes = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 5px;
  margin-top: 5px;
  width: 70px;
  height: 50px;
  border-radius: 15px;
  background: #ff665f;
  padding: 15px;
`

const TierBadge = styled.div`
  width: 26px;
  height: 26px;
  background: #38ec94;
  color: white;
  font-size: 18px;
  border-radius: 100%;
  position: absolute;
  right: 16px;
  top: 16px;
  text-align: center;
  jusitfy-content: center;
`

export default props => (
  <Class>
    <TierBadge className="badge">
      <HeroItem
        filename={`icon_global_item_${cleanName(props.details.element)}`}
        alt="gem"
        style={{ marginTop: "5px" }}
      />
    </TierBadge>
    <Icons>
      <WorkerImage
        filename={props.details.subclass}
        alt={props.details.subclass}
      />
    </Icons>
    <Title>{props.details.subclass}</Title>
    <SubDescription>
      Prerequisites:{" "}
      {props.details.prerequisite !== "---"
        ? props.details.prerequisite
        : "None"}
    </SubDescription>

    <SubDescription>
      {props.details.criticalHit.chance} Critical Hit Chance{" "}
      {props.details.criticalHit.damage} Damage
    </SubDescription>

    <SubDescription>Threat Rating: {props.details.threatRating}</SubDescription>

    <SubDescription>
      Skill Unlock Levels: {props.details.skillUnlockLevels.join(", ")}
    </SubDescription>

    <Description>Allowed Equipments:</Description>

    <ItemSlots>
      {props.details.equipments.map((equipment, index) => (
        <ItemTypes key={index}>
          {equipment.allowed.map((type, itemIndex) => (
            <HeroItem
              filename={`icon_global_item_${cleanName(type)}`}
              alt={type}
              key={itemIndex}
            ></HeroItem>
          ))}
        </ItemTypes>
      ))}
    </ItemSlots>
    <Gold>
      {props.details.stats.map((stat, index) => (
        <div style={{ display: "flex" }} key={index}>
          <Currency
            src={require(`../images/Stat Indicators/${stat.name}.png`)}
          ></Currency>
          <Cost>{stat.amount}</Cost>
        </div>
      ))}
      <Currency src={require(`../images/Currencies/gold.png`)} />
      <Cost>{props.details.cost.gold.toLocaleString()}</Cost>
      <Currency src={require(`../images/Currencies/gems.png`)} />
      <Cost>{props.details.cost.gems.toLocaleString()}</Cost>
    </Gold>
  </Class>
)
