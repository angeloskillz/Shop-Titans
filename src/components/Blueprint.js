import React from "react"
import styled from "styled-components"
import ReactModal from "react-modal"

const Class = styled.div`
  position: relative;
  width: 280px;
  height: 245px;
  align-items: stretch;
  border-radius: 26px;
  background: #1a2327;
  border: 1.5px solid #daa54e;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin-left: 16px;
  margin-top: 16px;
  cursor: pointer;
  outline: none;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
const Sun = styled.img`
  display: block;
  margin: 0 auto;
`
const Title = styled.h1`
  font-family: "QuadratSerial";
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 3px 6px #000;
  margin-top: -30px;
  text-transform: uppercase;
`
const Icons = styled.div`
  text-align: center;
`
const Icon1 = styled.img`
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 20px;
`
const Icon2 = styled.img`
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 20px;
  filter: blur(9px);
`

const SubDescription = styled.h2`
  font-family: Roboto;
  font-weight: normal;
  font-style: italic;
  font-size: 14px;
  text-align: center;
  color: #fff;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`

const basic = [
  "Name",
  "Type",
  "Unlock Prerequisite",
  "Research Scrolls",
  "Tier",
  "Value",
  "Crafting Time (seconds)",
  "Crafting Time (formatted)",
  "Value / Crafting Time",
  "Merchant XP",
  "Worker XP",
  "Required Worker",
  "Worker Level",
  "Required Worker__1",
  "Worker Level__1",
]
const resources = [
  "iron",
  "wood",
  "leather",
  "herbs",
  "steel",
  "ironwood",
  "fabric",
  "oil",
  "Component",
  "Component Quality",
  "Amount Needed",
  "Component__1",
  "Component Quality__1",
  "Amount Needed__1",
]
const stats = ["ATK", "DEF", "HP"]
const crafting = [
  "Crafting Upgrade 1",
  "Crafting Upgrade 2",
  "Crafting Upgrade 3",
  "Crafting Upgrade 4",
  "Crafting Upgrade 5",
]
const craftValues = [
  "Crafts Needed",
  "Crafts Needed__1",
  "Crafts Needed__2",
  "Crafts Needed__3",
  "Crafts Needed__4",
]
const ascension = [
  "Ascension Upgrade 1",
  "Ascension Upgrade 2",
  "Ascension Upgrade 3",
]
const ascendValues = ["Shards Needed", "Shards Needed__1", "Shards Needed__2"]
const energy = [
  "Discount Energy",
  "Surcharge Energy",
  "Suggest Energy",
  "Speed Up Energy",
]

class Classbox extends React.Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  render() {
    const craftingValue = crafting
      .filter(key => this.props.details[key] !== "---")
      .map(key => this.props.details[key])

    const ascensionValues = ascension.map(key => this.props.details[key])
    return (
      <div tabIndex="0">
        <Class onClick={this.handleOpenModal} tabIndex="0">
          <Sun src={require("../images/Sun.png")} />
          <Title>{this.props.name}</Title>
          <Icons>
            <Icon2
              src={require(`../images/Items/${this.props.details.Name.toLowerCase().replace(
                /\s/g,
                ""
              )}.png`)}
              alt={this.props.title}
            />
            <Icon1
              src={require(`../images/Items/${this.props.details.Name.toLowerCase().replace(
                /\s/g,
                ""
              )}.png`)}
              alt={this.props.title}
            />
          </Icons>
          <SubDescription>{this.props.details.Name}</SubDescription>
        </Class>

        <ReactModal
          isOpen={this.state.showModal}
          className="Modal"
          overlayClassName="Overlay"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseModal}
        >
          <Sun src={require("../images/Sun.png")} />
          <Title>{this.props.details.Name}</Title>
          <Icons>
            <Icon2
              src={require(`../images/Items/${this.props.details.Name.toLowerCase().replace(
                /\s/g,
                ""
              )}.png`)}
              alt={this.props.title}
            />
            <Icon1
              src={require(`../images/Items/${this.props.details.Name.toLowerCase().replace(
                /\s/g,
                ""
              )}.png`)}
              alt={this.props.title}
            />
          </Icons>
          <SubDescription>{this.props.details.Type}</SubDescription>
          <img
            src={require("../images/Divider.png")}
            style={{
              width: "200px",
              display: "block",
              margin: "0 auto",
              marginBottom: "24px",
            }}
            alt="divider"
          />
          <div className="scrollable">
            <div className="gradientmodal" />
          </div>
          {basic
            .filter(key => this.props.details[key] !== "---")
            .map((key, index) => (
              <div key={index}>
                <SubDescription>
                  {key}: {this.props.details[key]}
                </SubDescription>
              </div>
            ))}

          {resources
            .filter(key => this.props.details[key] !== "---")
            .map((key, index) => (
              <div key={index}>
                <SubDescription>
                  {key}: {this.props.details[key]}
                </SubDescription>
              </div>
            ))}

          {stats
            .filter(key => this.props.details[key] !== "---")
            .map((key, index) => (
              <div key={index}>
                <SubDescription>
                  {key}: {this.props.details[key]}
                </SubDescription>
              </div>
            ))}

          {craftingValue.map((value, index) => (
            <div key={index}>
              <SubDescription>
                Crafting Upgrade {index + 1}: {value} [{" "}
                {this.props.details[craftValues[index + 1]]} ]
              </SubDescription>
            </div>
          ))}

          {ascensionValues.map((value, index) => (
            <div key={index}>
              <SubDescription>
                Ascension Upgrade {index + 1}: {value} [{" "}
                {this.props.details[ascendValues[index + 1]]} ]
              </SubDescription>
            </div>
          ))}

          {energy
            .filter(key => this.props.details[key] !== "---")
            .map((key, index) => (
              <div key={index}>
                <SubDescription>
                  {key}: {this.props.details[key]}
                </SubDescription>
              </div>
            ))}

          <button
            onClick={this.handleCloseModal}
            style={{
              position: "absolute",
              top: "0",
              right: "5px",
              width: "30px",
            }}
          >
            X
          </button>
        </ReactModal>
      </div>
    )
  }
}

export default Classbox
// {Object.keys(this.props.details)
//   .filter(key => this.props.details[key] !== "---")
//   .map((key, index) => (
//     <div key={index}>
//       <SubDescription>
//         {key}: {this.props.details[key]}
//       </SubDescription>
//     </div>
//   ))}
