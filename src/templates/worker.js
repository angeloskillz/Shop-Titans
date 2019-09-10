import React from "react"
import MaterialTable from "material-table"
import Layout from "../components/layout"
import styled from "styled-components"
import blueprints from "../constants/blueprints"
import Blueprint from "../components/Blueprint"
import Worker from "../components/Worker"
import SEO from "../components/seo"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

const Resources = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 14px;
  text-align: left;
  color: #bc9060;
  margin-top: -5px;
  margin-bottom: 0px;
  text-align: center;
`

const Section = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const Container = styled.div`
  height: 50px;
  width: 100%;
  z-index: -1;
  position: relative;
`

const TabContainer = styled.div`
  background: #f4faff;
`

export default class WorkerPage extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value, heroValue: value === 1 ? 0 : null })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  componentDidMount() {
    const data = this.props.pageContext

    const relevantBlueprints = {}

    for (const blueprint of blueprints) {
      if (
        blueprint["Required Worker"] !== data.title &&
        blueprint["Required Worker__1"] !== data.title
      )
        continue

      if (!relevantBlueprints[blueprint.Type])
        relevantBlueprints[blueprint.Type] = [blueprint]
      else relevantBlueprints[blueprint.Type].push(blueprint)
    }

    if (!Object.values(relevantBlueprints).length) {
      this.setState({ value: 1 })
    }
  }

  render() {
    const data = this.props.pageContext
    const { value } = this.state

    const relevantBlueprints = {}

    for (const blueprint of blueprints) {
      if (
        blueprint["Required Worker"] !== data.title &&
        blueprint["Required Worker__1"] !== data.title
      )
        continue

      if (!relevantBlueprints[blueprint.Type])
        relevantBlueprints[blueprint.Type] = [blueprint]
      else relevantBlueprints[blueprint.Type].push(blueprint)
    }

    return (
      <Layout>
        <SEO title={data.name}></SEO>

        <Section>
          <Container />
        </Section>

        <h1 style={{ textAlign: "center" }}>
          Shop Titans: {data.name} Details
        </h1>
        <div className="CardboxGroupScroll" style={{ marginBottom: "50px" }}>
          <Resources className="CardboxGroup">
            <Worker details={data} type="worker" className="no-active" />
          </Resources>
        </div>

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
            style={{
              marginBottom: "20px",
            }}
          >
            {["BLUEPRINTS", "LEVELS"].map((name, index) => (
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
            {Object.values(relevantBlueprints).map(blueprints => (
              <div className="CardboxGroupScroll">
                <Resources className="CardboxGroup">
                  {blueprints.map((blueprint, index) => (
                    <div>
                      <Blueprint key={index} details={blueprint}></Blueprint>
                    </div>
                  ))}
                </Resources>
              </div>
            ))}
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <MaterialTable
              columns={[
                { title: "Level", field: "level" },
                { title: "Upgrade Time", field: "time" },
                { title: "Gold", field: "gold" },
                { title: "Gems", field: "gems" },
                { title: "Investments Needed", field: "needed" },
                { title: "Total Cost", field: "cost" },
                { title: "Effect", field: "effect" },
              ]}
              data={data.levels.map(lvl => ({
                ...lvl,
                gold: lvl.investments.gold.toLocaleString(),
                gems: lvl.investments.gems.toLocaleString(),
                needed:
                  lvl.cost === "---"
                    ? "---"
                    : Math.ceil(lvl.cost / lvl.investments.gold),
                cost: lvl.cost.toLocaleString(),
              }))}
              options={{
                sorting: true,
                search: false,
                showTitle: false,
                showFirstLastPageButtons: false,
                pageSize: 20,
                emptyRowsWhenPaging: false,
              }}
              style={{
                width: "75%",
                margin: "auto",
              }}
            />
          </TabContainer>
        )}
      </Layout>
    )
  }
}
