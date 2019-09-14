import React from "react"
import Fab from "@material-ui/core/Fab"

export default class WorkerSetting extends React.Component {
  state = {}

  render() {
    const level = this.state[this.props.workerName]
      ? this.state[this.props.workerName]
      : localStorage.getItem(this.props.workerName.toLowerCase()) || "1"

    return (
      <div>
        <p>
          {this.props.workerName} - {level}
        </p>
        <Fab
          size="small"
          variant="extended"
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
        <Fab
          size="small"
          variant="extended"
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
      </div>
    )
  }
}
