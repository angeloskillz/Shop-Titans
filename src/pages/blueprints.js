import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import blueprints from "../constants/oldblueprints"
import BlueprintCard from "../components/BlueprintCard"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Resources = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
  font-family: "Roboto";
  font-size: 14px;
  text-align: left;
  color: #bc9060;
  margin-top: -5px;
  margin-bottom: 0px;
  text-align: center;
`

const HeroContainer = styled.div`
  background-size: cover;
  height: 300px;
  width: 100%;
  position: relative;
`
const Hero = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const StyledAppBar = withStyles({
  root: {
    background: "none",
    width: "max-content",
    margin: "0 auto",
    boxShadow: "none",
  },
})(AppBar)

const StyledTabs = withStyles({
  indicator: {
    display: "none",
    backgroundColor: "none",
    color: "none",
  },
})(Tabs)

const StyledTab = withStyles({
  root: {
    color: "grey",
  },
  selected: {
    background: "#5FA9FF",
    borderRadius: "10px",
    marginRight: "16px",
  },
  label: {
    color: "white",
  },
})(Tab)

const attack = [
  "Sword",
  "Axe",
  "Dagger",
  "Mace",
  "Spear",
  "Bow",
  "Staff",
  "Wand",
  "Crossbow",
  "Gun",
]
const armor = [
  "Heavy Armor",
  "Light Armor",
  "Clothe",
  "Helmet",
  "Rogue Hat",
  "Magician Hat",
  "Gauntlet",
  "Glove",
  "Heavy Footwear",
  "Light Footwear",
]
const misc = ["Herbal Medicine", "Potion", "Spell", "Shield", "Ring", "Amulet"]
const enchantments = ["Runestone", "Enchantment"]

// const blueprints = [squiresword]

function TabContainer({ children, dir }) {
  return (
    <Typography
      component="div"
      dir={dir}
      style={{ padding: 8 * 3, background: "#F4FAFF" }}
    >
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
})

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
    attackValue: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value, attackValue: value === 1 ? 0 : null })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  handleAttackChange = (event, value) => {
    this.setState({ attackValue: value, value: null })
  }

  render() {
    const { value, attackValue } = this.state

    const relevantBlueprints = {}

    for (const blueprint of blueprints) {
      if (!relevantBlueprints[blueprint.Type])
        relevantBlueprints[blueprint.Type] = [blueprint]
      else relevantBlueprints[blueprint.Type].push(blueprint)
    }

    return (
      <Layout>
        <SEO title="Home" />
        <Hero>
          <HeroContainer></HeroContainer>
          <div className="HeroGroup">
            <h1>Blueprints Overview</h1>
          </div>
        </Hero>
        <div>
          <StyledAppBar position="static" color="default">
            <StyledTabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <StyledTab label="Attack" className="button" />
              <StyledTab label="Armors" className="button" />
              <StyledTab label="Misc" className="button" />
              <StyledTab label="Enchantments" className="button" />
            </StyledTabs>
          </StyledAppBar>
          {value === 0 && (
            <TabContainer>
              <StyledAppBar position="static" color="default">
                <StyledTabs
                  value={this.state.attackValue}
                  onChange={this.handleAttackChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                >
                  {Object.keys(relevantBlueprints)
                    .filter(key => attack.includes(key))
                    .map((type, index) => (
                      <StyledTab
                        key={index}
                        label={type.toUpperCase()}
                        className="button"
                      />
                    ))}
                </StyledTabs>
              </StyledAppBar>

              {attackValue === 0 && (
                <TabContainer>
                  <div className="CardboxGroupScroll">
                    <Resources className="CardboxGroup">
                      {blueprints
                        .filter(blueprint => blueprint.Type === "Sword")
                        .map((blueprint, index) => (
                          <BlueprintCard
                            details={blueprint}
                            key={index}
                          ></BlueprintCard>
                        ))}
                    </Resources>
                  </div>
                </TabContainer>
              )}
            </TabContainer>
          )}
        </div>
      </Layout>
    )
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(FullWidthTabs)
