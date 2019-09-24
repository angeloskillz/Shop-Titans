import React from "react"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import SettingsIcon from "@material-ui/icons/Settings"
import HomeIcon from "@material-ui/icons/Home"
import AssignmentIcon from "@material-ui/icons/Assignment"
// import LocationOnIcon from "@material-ui/icons/LocationOn"
import InfoIcon from "@material-ui/icons/Info"
import { Link } from "gatsby"

export default class extends React.Component {
  state = {
    tab: "home",
  }

  handleChange = (event, newValue) => {
    this.setState({ tab: newValue })
  }

  render() {
    return (
      <BottomNavigation
        value={this.state.tab}
        onChange={this.handleChange}
        className="bottomNav"
      >
        <Link to="/">
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />
        </Link>
        <Link to="/guides">
          <BottomNavigationAction
            label="Guides"
            value="guides"
            icon={<AssignmentIcon />}
          />
        </Link>
        {/*<BottomNavigationAction
          label="Guilds"
          value="guilds"
          icon={<LocationOnIcon />}
        />*/}
        <Link to="/settings">
          <BottomNavigationAction
            label="Settings"
            value="settings"
            icon={<SettingsIcon />}
          />
        </Link>
        <Link to="/about">
          <BottomNavigationAction
            label="About"
            value="about"
            icon={<InfoIcon />}
          />
        </Link>
      </BottomNavigation>
    )
  }
}
