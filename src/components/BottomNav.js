import React from "react"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import FolderIcon from "@material-ui/icons/Folder"
import RestoreIcon from "@material-ui/icons/Restore"
import FavoriteIcon from "@material-ui/icons/Favorite"
import LocationOnIcon from "@material-ui/icons/LocationOn"

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
        <BottomNavigationAction
          label="Recents"
          value="home"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    )
  }
}
