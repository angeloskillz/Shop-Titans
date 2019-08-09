import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import blueprints from "../constants/blueprints"
import Blueprint from "../components/Blueprint"
import Worker from "../components/Worker"
import SEO from "../components/seo"
import { cleanName } from "../utils/util"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import PropTypes from "prop-types"

const HeroImg = styled.img`
  position: relative;
  margin-left: 25px;
  height: 200px;
  width: 200px;
  display: block;
  padding-bottom: 10px;
  padding-top: 10px;
`

const Title = styled.h1`
  font-family: Roboto;
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  color: #ff665f;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
`

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

const WorkerCard = styled.div`
  display: flex;
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
  }

  handleChange = (event, value) => {
    this.setState({ value, heroValue: value === 1 ? 0 : null })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render() {
    const data = this.props.pageContext
    const { value } = this.state

    const relevantBlueprints = blueprints.filter(
      b =>
        b["Required Worker"] === data.title ||
        b["Required Worker__1"] === data.title
    )

    return (
      <Layout>
        <SEO title={data.name}></SEO>
        <Section>
          <Container />
        </Section>
        <div className="CardboxGroupScroll" style={{ marginBottom: "50px" }}>
          <Resources className="CardboxGroup">
            <Worker details={data} type="worker" />
          </Resources>
        </div>

        <StyledAppBar position="static" color="default">
          <StyledTabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <StyledTab label="BLUEPRINTS" className="button" />
            <StyledTab label="LEVELS" className="button" />
          </StyledTabs>
        </StyledAppBar>
        {value === 0 && (
          <TabContainer>
            <div className="CardboxGroupScroll">
              <Resources className="CardboxGroup">
                {relevantBlueprints.map((blueprint, index) => (
                  <div key={index}>
                    <Blueprint details={blueprint}></Blueprint>
                  </div>
                ))}
              </Resources>
            </div>
          </TabContainer>
        )}
      </Layout>
    )
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(FullWidthTabs)
