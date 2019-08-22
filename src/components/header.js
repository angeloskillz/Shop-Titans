import React from "react"
import "./header.css"
import { Link } from "gatsby"

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
          <Link to="/overview">Overview</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    )
  }
}

export default Header

// <Link to="/">Guides(soon)</Link>
// <Link to="/">News(soon)</Link>
// <Link to="/">Guilds(soon)</Link>
