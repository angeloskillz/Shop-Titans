import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"

const contributors = [
	{ name: 'LordAzuRa', guild: 'Guild Name' },
]

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
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render() {
    const { value } = this.state

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
						<StyledTab label="Developers" className="button" />
						<StyledTab label="Contributors" className="button" />
          </StyledTabs>
        </StyledAppBar>
        {value === 0 && (
          <TabContainer>
            <div className="Selectan">
              <h1>Lead Developers</h1>
            </div>

          </TabContainer>
				)}
				{value === 1 && (
          <TabContainer>
            <div className="Selectan">
              <h1>Major Contributors</h1>
						</div>
						{contributors.map((contributor, index) => (
							<div>
								<p>{contributor.name} from {contributor.guild}</p>
							</div>
						))}
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
