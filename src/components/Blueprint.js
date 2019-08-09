import React from "react"
import styled from "styled-components"
import ReactModal from "react-modal"
import blueprints from "../constants/blueprints"
import { cleanName } from "../utils/util"

const Class = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  align-items: stretch;
  border-radius: 40px;
  background: #38ec94;
box-shadow: 0px 8px 12px #bdccdb;
  margin-left: 16px;
  margin-top: 16px;
  margin-right: 16px;
  cursor: pointer;
  outline: none;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-sizing: border-box;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    transform: scale(1.1);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 0px 10px 25px 1px #bdccdb;
    z-index: 1;
  }
`
const Title = styled.h1`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: black;
  margin-top: 16px;
  text-transform: uppercase;
`
const Icons = styled.div`
position: relative;
  width: 80px;
  height: 80px;
  align-items: stretch;
  border-radius: 40px;
  background: #38ec94;
box-shadow: 0px 8px 12px #bdccdb;
margin: 0 auto;
`
const Icon1 = styled.img`
  position: relative;
  width: 54px;
  height: 54px;
  margin-top: 10px;
`

const SubDescription = styled.h2`
  font-family: Roboto;
font-weight: bold;
font-size: 14px;
color: #406081;
  text-align: center;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
  width: 80px;
`
const SubDescription2 = styled.h2`
padding: 6px;
  margin-left:105px;
  margin-right:105px;
  margin-top: 16px;
border-radius: 20px;
background: #bdccdb80;
font-family: Roboto;
font-weight: normal;
font-size: 12px;
text-align: center;
color: #406081;
`


const Description = styled.h3`
  font-family: Roboto;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  color: black;
`

const basic = [
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
    const item = blueprints.find(b => b.Name === this.props.details.Name)
    const name = cleanName(this.props.details.Name)
    return (
      <div>
        <Class onClick={this.handleOpenModal} tabIndex="0">
            <Icon1
              src={require(`../images/Items/${item.Type}s/${name}.png`)}
              alt={this.props.title}
            />
        </Class>
          <SubDescription>{this.props.details.Name}</SubDescription>
        <ReactModal
          isOpen={this.state.showModal}
          className="Modal"
          overlayClassName="Overlay"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseModal}
        >
          <Title>{this.props.details.Name}</Title>
          <Icons>
            <Icon1
              src={require(`../images/Items/${item.Type}s/${name}.png`)}
              alt={this.props.title}
            />
            </Icons>
          <SubDescription2>{this.props.details.Type}</SubDescription2>
          <div className="scrollable">
            <div className="gradientmodal" />
          </div>
          {basic
            .filter(key => this.props.details[key] !== "---")
            .map((key, index) => (
              <div key={index}>
                <Description>
                  {key}: {this.props.details[key]}
                </Description>
              </div>
            ))}

          {/*{resources
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
            ))}*/}

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
