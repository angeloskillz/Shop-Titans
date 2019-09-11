import React from "react"
import styled from "styled-components"
import { cleanName } from "../utils/util"
import Image from "./WorkerImage"
import IconImage from "../components/IconImage"
import workers from "../constants/workers/workers"

const Class = styled.div`
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
  padding-bottom: 16px;
`
const Icons = styled.div`
  margin: 0 auto;
  margin-top: 16px;
  width: 70px;
  border-radius: 86px;
  background: #38ec94;
  padding-bottom: 10px;
  padding-top: 10px;
`

const Title = styled.h1`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  color: #38ec94;
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
  margin-top: 5px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const SubDescription = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  text-align: center;
  margin: 0px;
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
  font-size: 12px;
  color: #406081;
  margin: 10px;
  margin-left: 5px;
  margin-right: 10px;
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

const EnergyBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`

const EnergyCost = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  margin-top: 10px;
  margin-left: 6px;
  margin-right: 6px;
`

export default props => {
  return (
    <Class>
      <TierBadge className="badge">{props.details.Tier}</TierBadge>
      <Icons style={{ background: "ff665f" }}>
        <Image
          filename={cleanName(props.details.Name)}
          alt={props.details.Name}
        />
      </Icons>
      <Title style={{ color: "ff665f" }}>{props.details.Name}</Title>
      <Description>{props.details["Crafting Time (formatted)"]}</Description>

      <Description>Requirements:</Description>

      <EnergyBox>
        {props.details["Research Scrolls"] !== "---" &&
        props.details["Research Scrolls"] ? (
          <IconImage filename="bp_unlock" alt="bp_unlock" />
        ) : null}
        {props.details["Research Scrolls"] !== "---" &&
        props.details["Research Scrolls"] ? (
          <EnergyCost>{props.details["Research Scrolls"]}</EnergyCost>
        ) : null}
        <IconImage
          filename={workers[
            props.details["Required Worker"].toLowerCase()
          ].name.toLowerCase()}
          alt={props.details["Required Worker"]}
        />

        <EnergyCost>Level {props.details["Worker Level"]}</EnergyCost>

        {props.details["Required Worker__1"] !== "---" ? (
          <IconImage
            filename={workers[
              props.details["Required Worker__1"].toLowerCase()
            ].name.toLowerCase()}
            alt={props.details["Required Worker__1"].toLowerCase()}
          />
        ) : null}
        {props.details["Required Worker__1"] !== "---" ? (
          <EnergyCost>Level {props.details["Worker Level__1"]}</EnergyCost>
        ) : null}
      </EnergyBox>

      <EnergyBox>
        <EnergyCost>Discount: {props.details["Discount Energy"]}</EnergyCost>
        <IconImage filename="energy" alt="energy" />
        <EnergyCost>Surcharge: {props.details["Surcharge Energy"]}</EnergyCost>
        <IconImage filename="energy" alt="energy" />
      </EnergyBox>

      <Description style={{ marginTop: "-8px"}}>Stats:</Description>
      <SubDescription>Worker XP: {props.details["Worker XP"]}</SubDescription>
      <SubDescription>
        Merchant XP: {props.details["Merchant XP"]}
      </SubDescription>

      {props.details.Component !== "---" ? (
        <Description>Components:</Description>
      ) : null}

      <EnergyBox style={{ marginTop: "-6px" }}>
        {props.details.Component !== "---" ? (
          <IconImage
            filename={cleanName(props.details.Component)}
            alt="Component"
          />
        ) : null}
        {props.details["Amount Needed"] !== "---" ? (
          <Cost>{props.details["Amount Needed"]}</Cost>
        ) : null}
        {props.details.Component__1 !== "---" ? (
          <IconImage
            filename={cleanName(props.details.Component__1)}
            alt="Component__1"
          />
        ) : null}
        {props.details["Amount Needed__1"] !== "---" ? (
          <Cost>{props.details["Amount Needed__1"]}</Cost>
        ) : null}
      </EnergyBox>
      <Gold>
        {[
          { prop: "ATK", filename: "attack" },
          { prop: "DEF", filename: "defense" },
          { prop: "HP", filename: "health" },
          { prop: "iron", filename: "iron" },
          { prop: "wood", filename: "wood" },
          { prop: "leather", filename: "leather" },
          { prop: "herbs", filename: "herbs" },
          { prop: "steel", filename: "steel" },
          { prop: "ironwood", filename: "ironwood" },
          { prop: "fabric", filename: "fabric" },
          { prop: "oil", filename: "oil" },
          { prop: "Value", filename: "gold" },
        ].map((data, index) => {
          const amount = props.details[data.prop]
          if (!amount || amount === "---") return null
          return (
            <React.Fragment key={index}>
              <IconImage filename={data.filename} alt={data.filename} />
              <Cost>{amount}</Cost>
            </React.Fragment>
          )
        })}
      </Gold>
    </Class>
  )
}
