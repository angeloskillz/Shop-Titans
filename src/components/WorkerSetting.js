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
const Buttons = styled.div`
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
export default class WorkerSetting extends React.Component {
  state = {}

  render() {
    const level = this.state[this.props.workerName]
      ? this.state[this.props.workerName]
      : localStorage.getItem(this.props.workerName.toLowerCase()) || "1"

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
              const level = localStorage.getItem(
                this.props.workerName.toLowerCase()
              )
              const newValue = level
                ? parseInt(
                    localStorage.getItem(this.props.workerName.toLowerCase()),
                    10
                  ) + 1
                : 1

              this.setState({ [this.props.workerName]: newValue })
              localStorage.setItem(
                this.props.workerName.toLowerCase(),
                newValue.toString()
              )
            }}
          >
            Up
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
              const level = localStorage.getItem(
                this.props.workerName.toLowerCase()
              )
              const newValue = level
                ? parseInt(
                    localStorage.getItem(this.props.workerName.toLowerCase()),
                    10
                  ) - 1
                : 1

              this.setState({ [this.props.workerName]: newValue })
              localStorage.setItem(
                this.props.workerName.toLowerCase(),
                newValue.toString()
              )
            }}
          >
            Down
          </Fab>
        </Buttons>
      </Box>
    )
  }
}
