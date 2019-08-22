import React from "react"
import "./header.css"
import { Link } from "gatsby"
import GatsbyImage from "gatsby-image"

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
            <GatsbyImage fixed={props.data.imageOne.childImageSharp.fixed} />
            <img src={require("./../images/Logo.png")} alt="LOGOVGWIKI" />
          </Link>
          <Link to="/about">About</Link>
          <Link to="/">Guides(soon)</Link>
          <Link to="/">News(soon)</Link>
          <Link to="/">Guilds(soon)</Link>
        </div>
      </div>
    )
  }
}

export default Header

export const pageQuery = graphql`
  {
    imageOne: file(relativePath: { eq: "Backgrounds/BG1.jpg" }) {
      childImageSharp {
        fixed(width: 1366) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
