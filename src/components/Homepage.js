import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import WorkerBox from "./Worker"
import blacksmith from "../constants/workers/blacksmith"
import carpenter from "../constants/workers/carpenter"
import engineer from "../constants/workers/engineer"
import herbalist from "../constants/workers/herbalist"
import master from "../constants/workers/master"
import priestess from "../constants/workers/priestess"
import scholar from "../constants/workers/scholar"
import tailor from "../constants/workers/tailor"
import wizard from "../constants/workers/wizard"
// import stats from "../constants/workers/stats"
import townhall from "../constants/special/townhall"
import tavern from "../constants/special/tavern"
import emeraldinn from "../constants/special/emeraldinn"
import traininghall from "../constants/special/traininghall"
import lumberyard from "../constants/farmers/lumberyard"
import ironmine from "../constants/farmers/ironmine"
import oilpress from "../constants/farmers/oilpress"
import garden from "../constants/farmers/garden"
import ironwoodsawmill from "../constants/farmers/ironwoodsawmill"
import smelter from "../constants/farmers/smelter"
import tannery from "../constants/farmers/tannery"
import weavermill from "../constants/farmers/weavermill"
import heroes from "../constants/heroes"
import HeroBox from "../components/Hero"

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

const specialWorkers = [townhall, tavern, emeraldinn, traininghall]
const resourceWorkers = [
  garden,
  ironmine,
  ironwoodsawmill,
  lumberyard,
  oilpress,
  smelter,
  tannery,
  weavermill,
]

const fighters = heroes.filter(hero => hero.class === 'Fighter')

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
    heroValue: null,
  }

  handleChange = (event, value) => {
    this.setState({ value, heroValue: value === 1 ? 0 : null })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  handleHeroChange = (event, value) => {
    this.setState({ heroValue: value, value: null })
  }

  render() {
    const { value, heroValue } = this.state
    console.log("logs", value, heroValue)
    return (
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
            <StyledTab label="HEROES" className="button" />
          </StyledTabs>
        </StyledAppBar>
        {value === 0 && (
          <TabContainer>
            <div className="Selectan">
              <h1>Workers</h1>
            </div>
            <div className="CardboxGroupScroll">
              <div className="CardboxGroup">
                {workers.map((worker, index) => (
                  <WorkerBox key={index} details={worker} type="worker" />
                ))}
              </div>
            </div>

            <div className="Selectan">
              <h1>Special</h1>
            </div>
            <div className="CardboxGroupScroll">
              <div className="CardboxGroup">
                {specialWorkers.map((worker, index) => (
                  <WorkerBox key={index} details={worker} type="special" />
                ))}
              </div>
            </div>

            <div className="Selectan">
              <h1>Producers</h1>
            </div>
            <div className="CardboxGroupScroll">
              <div className="CardboxGroup">
                {resourceWorkers.map((worker, index) => (
                  <WorkerBox key={index} details={worker} type="resource" />
                ))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <StyledAppBar position="static" color="default">
              <StyledTabs
                value={this.state.heroValue}
                onChange={this.handleHeroChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <StyledTab label="FIGHTERS" className="button" />
              </StyledTabs>
            </StyledAppBar>
            {heroValue === 0 && (
              <TabContainer>
                <div className="CardboxGroupScroll">
                  <div className="CardboxGroup">
                    {fighters.map((fighter, index) => (
                      <HeroBox key={index} details={fighter} />
                    ))}
                  </div>
                </div>
              </TabContainer>
            )}
          </TabContainer>
        )}
      </div>
    )
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(FullWidthTabs)
