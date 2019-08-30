import "./header.css"
import React from "react"
import { Link } from "gatsby"

import Fab from "@material-ui/core/Fab"
import styled from "styled-components"
import LongMenu from "./Menu"

const MyFab = styled(Fab)({
  fontSize: "12px",
  boxShadow: "none",
  margin: 0,
})

class Header extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
      top: false,
      left: false,
      bottom: false,
      right: false,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require("./../images/Logo.png")} alt="LOGOSTWIKI" />
          </Link>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              right: "16px",
              top: "6px",
              position: "absolute",
              margin: 0,
            }}
          >
            <a href="https://discord.gg/shoptitans">
              <MyFab size="small" variant="contained" color="primary">
                Discord
              </MyFab>
            </a>
            <a href="https://discord.gg/rWMuMdk">
              <MyFab size="small" variant="contained" color="secondary">
                Contact Us
              </MyFab>
            </a>
            <LongMenu></LongMenu>
          </div>
        </div>
      </div>
    )
  }
}

export default Header

// <Link to="/">Guides(soon)</Link>
// <Link to="/">News(soon)</Link>
// <Link to="/">Guilds(soon)</Link>
