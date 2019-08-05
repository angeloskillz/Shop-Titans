import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import MediaQuery from "react-responsive"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import EquipmentBox from "../components/Equipment"
import lores from "../constants/lores"
import LoreBox from "../components/Lorecard"
import blacksmith from "../constants/workers/blacksmith"
import carpenter from "../constants/workers/carpenter"
import engineer from "../constants/workers/engineer"
import herbalist from "../constants/workers/herbalist"
import master from "../constants/workers/master"
import priestess from "../constants/workers/priestess"
import scholar from "../constants/workers/scholar"
import tailor from "../constants/workers/tailor"
import wizard from "../constants/workers/wizard"
import stats from "../constants/workers/stats"

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
    backgroundColor: "#daa54e",
    color: "white",
  },
})(Tabs)

const StyledTab = withStyles({
  root: {
    color: "grey",
  },
  selected: {
    border: "2px solid #daa54e",
  },
  label: {
    color: "white",
  },
})(Tab)

const workers = [
  blacksmith,
  carpenter,
  engineer,
  herbalist,
  master,
  priestess,
  scholar,
  tailor,
  wizard,
]

function TabContainer({ children, dir }) {
  return (
    <Typography
      component="div"
      dir={dir}
      style={{ padding: 8 * 3, background: "#141b1e" }}
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
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render() {
    const { value } = this.state

    return (
      <MediaQuery query="(min-width: 721px)">
        <div>
          <StyledAppBar position="static" color="default">
            <StyledTabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <StyledTab label="WORKERS" className="button" />
              <StyledTab label="GUIDES" className="button" />
            </StyledTabs>
          </StyledAppBar>
          {value === 0 && (
            <TabContainer>
              <div className="Selectan">
                <h1>Workers</h1>
              </div>
              <img
                src={require("../images/Divider2.png")}
                style={{
                  width: "200px",
                  display: "block",
                  margin: "0 auto",
                  marginBottom: "24px",
                }}
                alt="divider"
              />
              <div className="CardboxGroupScroll">
                <div className="CardboxGroup">
                  {workers.map((worker, index) => (
                    <EquipmentBox key={index} details={worker} />
                  ))}
                </div>
              </div>

              <div className="Selectan">
                <h1>Worker Stats</h1>
              </div>
              <img
                src={require("../images/Divider2.png")}
                style={{
                  width: "200px",
                  display: "block",
                  margin: "0 auto",
                  marginBottom: "24px",
                }}
                alt="divider"
              />

              <table>
                <thead>
                  <tr>
                    <th>Worker Level</th>
                    <th>XP Needed</th>
                    <th>Crafting Speed Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.map((stat, index) => (
                    <tr>
                      <td align="left">{stat["Worker Level"]}</td>
                      <td align="right">{stat["XP Needed"]}</td>
                      <td align="right">{stat["Crafting Speed Bonus"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <div className="Selectan">
                <h1>Lores</h1>
              </div>
              <img
                src={require("../images/Divider2.png")}
                style={{
                  width: "200px",
                  display: "block",
                  margin: "0 auto",
                  marginBottom: "24px",
                }}
                alt="divider"
              />
              <div className="CardboxGroupScroll">
                <div className="CardboxGroup">
                  {lores.map((lore, index) => (
                    <LoreBox
                      key={index}
                      title={lore.title}
                      link={lore.link}
                      description={lore.description}
                    />
                  ))}
                </div>
              </div>
            </TabContainer>
          )}
        </div>
      </MediaQuery>
    )
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(FullWidthTabs)
