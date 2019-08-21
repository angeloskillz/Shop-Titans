import React from "react"
import styled from "styled-components"
import blueprints from "../constants/blueprints"
import { cleanName } from "../utils/util"
import Image from "../components/WorkerUnlocks"

const BlueprintBox = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  padding: 9px;
  border-radius: 19px;
  background: #38ec94;
  box-shadow: 0px 8px 12px #bdccdb;
`

const Blueprint = styled.img`
  padding: 10px;
  border-radius: 19px;
  width: 30px;
  height: 30px;
  position: relative;
  background: #38ec94;
`
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

const SubDescription = styled.p`
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  text-align: center;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const LvlRq = styled.div`
  padding: 6px;
  margin-left: 56px;
  margin-right: 56px;
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
  background: #f0f4f8;
  border-radius: 0px 0px 26px 26px;
  text-align: right;
  bottom: 0;
  justify-content: flex-end;
`
const Cost = styled.p`
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  margin: 10px;
  margin-left: 6px;
  margin-right: 16px;
`
const Currency = styled.img`
  width: 15px;
  height: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export default props => {
  return (
    <Class
      href={`/workers/${props.details.name}`}
      className={props.type !== "worker" ? "not-active" : ""}
    >
      <Icons
        style={{
          background:
            props.type === "worker"
              ? "ff665f"
              : props.type === "resource"
              ? "lightblue"
              : "orange",
        }}
      >
        <HeroImg
          src={require(`../images/Portraits/${cleanName(
            props.details.name
          )}.png`)}
          alt={props.details.name}
        />
      </Icons>
      <Title>{props.details.name}</Title>
      <Description>{props.details.title}</Description>
      <LvlRq>
        {props.details.level_required &&
        props.details.prerequisite &&
        props.details.prerequisite !== "---"
          ? `Required: ${props.details.prerequisite}`
          : `Level Required: ${props.details.level_required}`}
      </LvlRq>

      <Description>
        {props.type === "worker" ? "Blueprints Unlocked:" : "Description:"}
      </Description>
      {props.type === "worker" ? null : (
        <SubDescription>{props.details.description}</SubDescription>
      )}

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
                  <BlueprintBox>
                    <Image alt={props.details.name} filename={blueprintName} />
                  </BlueprintBox>
                </div>
              )
            })}
          </Resources>
        </div>
      ) : null}
      <Gold>
        {props.type === "resource" ? <Cost>Produces:</Cost> : null}
        {props.type === "resource" ? (
          <Currency
            src={require(`../images/Resources/${props.details.resource}.png`)}
          />
        ) : null}
        <Cost>Cost:</Cost>
        <Currency src={require(`../images/Currencies/gold.png`)} />
        <Cost>
          {props.type === "worker" ? props.details.gold_cost : "Free"}
        </Cost>
        <Currency src={require(`../images/Currencies/gem.png`)} />
        <Cost>{props.type === "worker" ? props.details.gem_cost : "Free"}</Cost>
      </Gold>
    </Class>
  )
}
