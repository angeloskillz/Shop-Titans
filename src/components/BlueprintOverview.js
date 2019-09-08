import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import styled from "styled-components"
import BlueprintCard from "../components/BlueprintCard"

const weapons = [
  "Axe",
  "Bow",
  "Crossbow",
  "Dagger",
  "Gun",
  "Mace",
  "Shield",
  "Spear",
  "Staff",
  "Sword",
  "Wand",
]
const armor = ["Gauntlet", "Heavy Armor", "Heavy Footwear", "Helmet"]
const lightarmor = [
  "Amulet",
  "Clothe",
  "Glove",
  "Light Armor",
  "Light Footwear",
  "Magician Hat",
  "Ring",
  "Rogue Hat",
]
const items = ["Enchantment", "Herbal Medicine", "Potion", "Runestone", "Spell"]

const TabContainer = styled.div`
  background: #f4faff;
`

class HomePageTabs extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  makeTab(array) {
    return Object.values(this.props.blueprints)
      .filter(b => array.includes(b[0].Type))
      .map((blueprints, index) => (
        <React.Fragment key={index}>
          <div className="Selectan">
            <h1 style={{ color: "#ff665f" }}>{blueprints[0].Type}s</h1>
          </div>
          <div className="CardboxGroupScroll">
            <div className="CardboxGroup">
              {blueprints.map((blueprint, printIndex) => (
                <BlueprintCard
                  details={blueprint}
                  key={printIndex}
                ></BlueprintCard>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))
  }

  render() {
    const { value } = this.state

    return (
      <div>
        <AppBar
          position="static"
          color="default"
          style={{
            background: "none",
            width: "max-content",
            margin: "0 auto",
            boxShadow: "none",
          }}
        >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            TabIndicatorProps={{
              style: { visibility: "hidden" },
            }}
          >
            {["Weapons", "Heavy", "Light", "Items"].map((name, index) => (
              <Tab
                label={name}
                className="button"
                selected={true}
                style={{
                  background: this.state.value === index ? "#5FA9FF" : "",
                  border: "1px solid grey",
                  borderRadius: "50px",
                  fontSize: "12px",
                  marginRight: "16px",
                }}
                key={index}
              />
            ))}
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>{this.makeTab(weapons)}</TabContainer>}
        {value === 1 && <TabContainer>{this.makeTab(armor)}</TabContainer>}
        {value === 2 && <TabContainer>{this.makeTab(lightarmor)}</TabContainer>}
        {value === 3 && <TabContainer>{this.makeTab(items)}</TabContainer>}
      </div>
    )
  }
}

export default HomePageTabs
