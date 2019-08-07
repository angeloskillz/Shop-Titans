import React from "react"
import styled from "styled-components"
import "./equipment.css"
import blueprints from "../constants/blueprints"
import { cleanName } from "../utils/util"

const Blueprint = styled.img`
    padding: 10px;
    border-radius: 26px;
  width: 30px;
  height: 30px;
  position: relative;
  padding-bottom: 10px;
   padding-top: 10px;
   background: #38ec94;
`
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
`
const HeroImg = styled.img`
  position: relative;
  height: 50px;
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
  margin-left:56px;
  margin-right:56px;
border-radius: 20px;
background: #bdccdb80;
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
  text-align: center;
`
const Gold = styled.div`
    position: absolute;
    display: flex;
    width: 280px;
    border-radius: 26px;
    background: #F0F4F8;
    border-radius: 0px 0px 26px 26px;
    text-align: right;
    bottom: 0;
`
const Cost = styled.p`
  font-family: Roboto;
font-weight: normal;
font-size: 12px;
text-align: center;
color: #406081;
margin: 0;
margin-left: 6px;
margin-top: 10px;
margin-bottom: 10px;
`
const Currency = styled.img`
  width: 15px;
  height: 15px;
margin-left: 16px;
margin-top: 10px;
margin-bottom: 10px;
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
    <LvlRq>Level Required: {props.details.level_required}</LvlRq>
  

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
    <Gold>
      <div style={{ display: 'flex'}}>
        <Currency src={require(`../images/Currencies/gold.png`)} />
        <Cost>{props.details.gold_cost}</Cost>
      </div>
      <div style={{ display: 'flex'}}>
        <Currency src={require(`../images/Currencies/gem.png`)} />
        <Cost>{props.details.gem_cost}</Cost>
      </div>
    </Gold>
  </Class>
)
