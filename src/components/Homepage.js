import React from "react"
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
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import styled from "styled-components"
import champions from "../constants/champions/index"
import ChampionBox from "../components/ChampionBox"
import { Link } from "gatsby"
import Fab from "@material-ui/core/Fab"

const workers = [
  blacksmith,
  carpenter,
  herbalist,
  master,
  priestess,
  tailor,
  wizard,
]

const premiumWorkers = [engineer, scholar]

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

const fighters = heroes.filter(hero => hero.class === "Fighter")
const rogues = heroes.filter(hero => hero.class === "Rogue")
const spellcasters = heroes.filter(hero => hero.class === "Spellcaster")

const workerData = [
  {
    title: "Workers",
    array: workers,
    type: "worker",
    color: "#ff665f",
  },
  {
    title: "Premium Workers",
    array: premiumWorkers,
    type: "worker",
    color: "#ff665f",
  },
  {
    title: "Special",
    array: specialWorkers,
    type: "special",
    color: "orange",
  },
  {
    title: "Producers",
    array: resourceWorkers,
    type: "resource",
    color: "lightblue",
  },
]

const TabContainer = styled.div`
  background: #f4faff;
`

const Title = styled.h2`
  margin-bottom: 5px;
  margin-top: 5px;
  text-align: center;
`
class HomePageTabs extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
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
            marginTop: "-36px",
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
            {["WORKERS", "HEROES", "CHAMPIONS"].map((name, index) => (
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
        {value === 0 && (
          <TabContainer>
            <div
              style={{
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              <Link to="/settings">
                <Fab
                  size="small"
                  variant="extended"
                  color="secondary"
                  style={{
                    fontSize: "12px",
                    boxShadow: "none",
                  }}
                >
                  Set worker levels
                </Fab>
              </Link>
            </div>
            {workerData.map((data, index) => (
              <React.Fragment key={index}>
                <div className="Selectan">
                  <Title style={{ color: data.color }}>{data.title}</Title>
                </div>
                <div className="CardboxGroupScroll">
                  <div className="CardboxGroup">
                    {data.array.map((worker, workerIndex) => (
                      <WorkerBox
                        key={workerIndex}
                        details={worker}
                        type={data.type}
                      />
                    ))}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <div className="Selectan">
              <Title
                style={{
                  color: "#ff665f",
                }}
              >
                Fighters
              </Title>
            </div>
            <div className="CardboxGroupScroll">
              <div className="CardboxGroup">
                {fighters.map((fighter, index) => (
                  <HeroBox
                    key={index}
                    details={fighter}
                    type="fighter"
                    index={index}
                  />
                ))}
              </div>
            </div>

            <div className="Selectan">
              <Title
                style={{
                  color: "#38ec94",
                }}
              >
                Rogues
              </Title>
            </div>
            <div className="CardboxGroupScroll">
              <div className="CardboxGroup">
                {rogues.map((rogue, index) => (
                  <HeroBox
                    key={index}
                    details={rogue}
                    type="rogue"
                    index={index}
                  />
                ))}
              </div>
            </div>

            <div className="Selectan">
              <Title
                style={{
                  color: "#02CFF2",
                }}
              >
                Spellcasters
              </Title>
            </div>
            <div className="CardboxGroupScroll">
              <div className="CardboxGroup">
                {spellcasters.map((spellcaster, index) => (
                  <HeroBox key={index} details={spellcaster} index={index} />
                ))}
              </div>
            </div>
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <div className="CardboxGroupScroll">
              <div className="CardboxGroup">
                {champions.map((champion, index) => (
                  <ChampionBox key={index} details={champion} />
                ))}
              </div>
            </div>
          </TabContainer>
        )}
      </div>
    )
  }
}

export default HomePageTabs
