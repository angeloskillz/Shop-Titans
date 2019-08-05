import React from "react"
import styled from "styled-components"
import "./equipment.css"
import blueprints from "../constants/blueprints"
import { cleanName } from "../utils/util"

const Blueprint = styled.img`
  width: 50px;
  height: 50px;
  margin-left: auto;
`

const Class = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 280px;
  height: auto;
  border-radius: 26px;
  background: #1a2327;
  border: 2px solid #daa54e;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin-left: 16px;
  margin-top: 16px;
`
const Title = styled.h1`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 3px 6px #000;
  text-transform: uppercase;
  margin-bottom: 0;
`
const Icons = styled.div`
  text-align: center;
  margin-top: 16px;
`

const HeroImg = styled.img`
  position: relative;
  width: 60px;
  height: 60px;
  margin-left: 11px;
  margin-top: 11px;
`

const Cost = styled.p`
  font-size: 16px;
  color: #6f879f;
  margin-bottom: 0px;
`
const Currency = styled.img`
  width: 20px;
  height: 20px;
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
  white-space: pre-wrap;
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

export default props => (
  <Class>
    <Icons>
      <HeroImg
        src={require(`../images/Portraits/${props.details.name.toLowerCase()}.png`)}
        alt={props.details.name}
      />
    </Icons>
    <Title>{props.details.name}</Title>
    <Description>{props.details.title}</Description>
    <Description>Level Required: {props.details.level_required}</Description>
    <Resources>
      <div>
        <Cost>{props.details.gold_cost}</Cost>
        <Currency src={require(`../images/Currencies/gold.png`)} />
      </div>
      <div>
        <Cost>{props.details.gem_cost}</Cost>
        <Currency src={require(`../images/Currencies/gem.png`)} />
      </div>
    </Resources>

    <Description>Blueprints Unlocked:</Description>
    {props.details.blueprint_unlocks.length ? (
      <div>
        <Resources>
          {props.details.blueprint_unlocks.map((blueprint, index) => {
            const blueprintName = cleanName(blueprint)
            const itemType = blueprints.find(
              b => cleanName(b.Name) === blueprintName
            ).Type
            return (
              <div key={index}>
                <Blueprint
                  src={require(`../images/Items/${itemType}s/${blueprintName}.png`)}
                  alt={props.details.name}
                />
              </div>
            )
          })}
        </Resources>
      </div>
    ) : null}
  </Class>
)
