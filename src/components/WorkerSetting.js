import React from "react"
import Fab from "@material-ui/core/Fab"
import styled from "styled-components"
import WorkerImage from "../components/WorkerImage"
import { cleanName } from "../utils/util"

const Box = styled.a`
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
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const Buttons = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
`

export default class WorkerSetting extends React.Component {
  state = {}

  render() {
    let level = this.state[this.props.workerName]
    try {
      if (!level)
        level = localStorage.getItem(this.props.workerName.toLowerCase())
    } catch {
      // This try catch is to handle localStorage not existing on gatsby server side rendering
      level = "1"
    }

    return (
      <Box>
        <Icons style={{ background: "#ff665f" }}>
          <WorkerImage
            filename={cleanName(this.props.workerName)}
            alt={this.props.workerName}
          />
        </Icons>
        <Title>{this.props.workerName}</Title>
        <Buttons>
          <Fab
            size="small"
            color="primary"
            style={{
              fontSize: "12px",
              boxShadow: "none",
              marginRight: "5px",
            }}
            onClick={() => {
              const newValue = level - 1
              this.setState({ [this.props.workerName]: newValue })
              try {
                localStorage.setItem(
                  this.props.workerName.toLowerCase(),
                  newValue.toString()
                )
              } catch {
                // try catch to ignore mising localstorage on server rendering
              }
            }}
          >
            Down
          </Fab>

          <Description>Level: {level}</Description>

          <Fab
            size="small"
            color="primary"
            style={{
              fontSize: "12px",
              boxShadow: "none",
              marginRight: "5px",
            }}
            onClick={() => {
              const newValue = level + 1
              this.setState({ [this.props.workerName]: newValue })
              try {
                localStorage.setItem(
                  this.props.workerName.toLowerCase(),
                  newValue.toString()
                )
              } catch {
                // try catch to ignore mising localstorage on server rendering
              }
            }}
          >
            Up
          </Fab>
        </Buttons>
      </Box>
    )
  }
}
