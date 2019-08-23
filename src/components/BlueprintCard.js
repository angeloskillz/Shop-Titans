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
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    sans-serif;
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
  background: #ff665f;
  color: white;
  font-size: 20px;
  border-radius: 50%;
  position: absolute;
  right: 15px;
  top: 16px;
  text-align: center;
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
  margin: 10px;
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

      <Description>Stats:</Description>
      <SubDescription>Worker XP: {props.details["Worker XP"]}</SubDescription>
      <SubDescription>
        Merchant XP: {props.details["Merchant XP"]}
      </SubDescription>

      {props.details.Component !== "---" ? (<Description>Components:</Description>) : null}

      <EnergyBox>
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
        {props.details.ATK !== "---" ? (
          <IconImage filename="attack" alt="ATK" />
        ) : null}
        {props.details.ATK !== "---" ? <Cost>{props.details.ATK}</Cost> : null}
        {props.details.DEF !== "---" ? (
          <IconImage filename="defense" alt="DEF" />
        ) : null}
        {props.details.DEF !== "---" ? <Cost>{props.details.DEF}</Cost> : null}
        {props.details.HP !== "---" ? (
          <IconImage filename="health" alt="HP" />
        ) : null}
        {props.details.HP !== "---" ? <Cost>{props.details.HP}</Cost> : null}

        {props.details.iron !== "---" ? (
          <IconImage filename="iron" alt="iron" />
        ) : null}
        {props.details.iron !== "---" ? (
          <Cost>{props.details.iron}</Cost>
        ) : null}
        {props.details.wood !== "---" ? (
          <IconImage filename="wood" alt="wood" />
        ) : null}
        {props.details.wood !== "---" ? (
          <Cost>{props.details.wood}</Cost>
        ) : null}
        {props.details.leather !== "---" ? (
          <IconImage filename="leather" alt="leather" />
        ) : null}
        {props.details.leather !== "---" ? (
          <Cost>{props.details.leather}</Cost>
        ) : null}
        {props.details.herbs !== "---" ? (
          <IconImage filename="herbs" alt="herbs" />
        ) : null}
        {props.details.herbs !== "---" ? (
          <Cost>{props.details.herbs}</Cost>
        ) : null}
        {props.details.steel !== "---" ? (
          <IconImage filename="steel" alt="steel" />
        ) : null}
        {props.details.steel !== "---" ? (
          <Cost>{props.details.steel}</Cost>
        ) : null}
        {props.details.ironwood !== "---" ? (
          <IconImage filename="ironwood" alt="ironwood" />
        ) : null}
        {props.details.ironwood !== "---" ? (
          <Cost>{props.details.ironwood}</Cost>
        ) : null}
        {props.details.fabric !== "---" ? (
          <IconImage filename="fabric" alt="fabric" />
        ) : null}
        {props.details.fabric !== "---" ? (
          <Cost>{props.details.fabric}</Cost>
        ) : null}
        {props.details.oil !== "---" ? (
          <IconImage filename="oil" alt="oil" />
        ) : null}
        {props.details.oil !== "---" ? <Cost>{props.details.oil}</Cost> : null}

        <IconImage filename="gold" alt="gold" />
        <Cost>{props.details.Value}</Cost>
      </Gold>
    </Class>
  )
}
