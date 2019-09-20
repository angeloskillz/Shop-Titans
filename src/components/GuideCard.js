import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Class = styled.div`
  position: relative;
  width: 280px;
  height: 230px;
  align-items: stretch;
  border-radius: 26px;
  background-image: url(https://i.imgur.com/hZAT7Ng.png);
  border: 1px solid transparent;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin-left: 16px;
  margin-top: 16px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    transform: scale(1.1);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0px 10px 25px 1px rgba(218, 165, 78, 0.3);
    z-index: 1;
  }
`
const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
  margin-top: 16px;
  text-transform: uppercase;
  width: 248px;
  margin-left: auto;
  margin-right: auto;
`
const SubDescription = styled.h3`
  font-weight: normal;
  font-style: italic;
  font-size: 14px;
  text-align: center;
  color: #fff;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`

const LoreBox = props => (
  <Link to={props.link}>
    <Class>
      <div style={{ marginTop: "80px" }}>
        <Title>{props.title}</Title>
        <SubDescription>{props.description}</SubDescription>
      </div>
    </Class>
  </Link>
)

export default LoreBox
