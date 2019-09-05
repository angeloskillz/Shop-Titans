import React from "react"
import styled from "styled-components"
import { cleanName } from "../utils/util"
import Image from "../components/WorkerUnlocks"
import WorkerImage from "../components/WorkerImage"
import IconImage from "../components/IconImage"

const BlueprintBox = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  padding: 9px;
  border-radius: 29px;
  background: #38ec94;
  margin-bottom: 0;
`

const Class = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  width: 280px;
  border-radius: 26px;
  background: #fff;
  box-shadow: 0px 8px 12px #bdccdb;
  margin-left: 6px;
  margin-top: 16px;
  margin-bottom: 16px;

  padding-bottom: 50px;
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
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, sans-serif;
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
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const SubDescription = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  text-align: center;
  margin-bottom: 16px;
  margin-top: -10px;
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
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  margin: 10px;
  margin-left: 6px;
  margin-right: 16px;
`

export default props => {
  return (
    <Class
      href={`/workers/${props.details.name}`}
      className={props.className}
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
        <WorkerImage
          filename={cleanName(props.details.name)}
          alt={props.details.name}
        />
      </Icons>
      <Title
      style={{
        color:
          props.type === "worker"
            ? "ff665f"
            : props.type === "resource"
            ? "lightblue"
            : "orange",
      }}>{props.details.name}</Title>
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
          <IconImage
            filename={props.details.resource}
            alt={props.details.resource}
          />
        ) : null}
        <Cost>Cost:</Cost>

        <IconImage filename="gold" alt="gold" />
        <Cost>
          {props.type === "worker" ? props.details.gold_cost : "Free"}
        </Cost>
        <IconImage filename="gems" alt="gem" />
        <Cost>{props.type === "worker" ? props.details.gem_cost : "Free"}</Cost>
      </Gold>
    </Class>
  )
}
