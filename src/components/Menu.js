import React from "react"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MenuIcon from "@material-ui/icons/MenuRounded"
import { Link } from "gatsby"
import Fab from "@material-ui/core/Fab"

const ITEM_HEIGHT = 48

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div>
      <Link to="/overview" className="nav-hide-mobile">
        <Fab
          size="small"
          variant="contained"
          color="primary"
          style={{
            fontSize: "12px",
            boxShadow: "none",
            margin: 0,
            background: "#38ec94",
          }}
        >
          Blueprints
        </Fab>
      </Link>
      <Link to="/about" className="nav-hide-mobile">
        <Fab
          size="small"
          variant="contained"
          color="primary"
          style={{
            fontSize: "12px",
            boxShadow: "none",
            margin: 0,
            background: "#38ec94",
          }}
        >
          About
        </Fab>
      </Link>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ marginLeft: "16px" }}
        className="nav-show-mobile"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        <Link to="/overview">
          <MenuItem
            onClick={handleClose}
            style={{ display: "flex", color: "#5FA9FF" }}
          >
            Blueprints
          </MenuItem>
        </Link>
        <Link to="/about">
          <MenuItem
            onClick={handleClose}
            style={{ display: "flex", color: "#5FA9FF" }}
          >
            About
          </MenuItem>
        </Link>
      </Menu>
      <a
        href="https://discord.gg/shoptitans"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Fab
          size="small"
          variant="contained"
          color="primary"
          style={{
            fontSize: "12px",
            boxShadow: "none",
            margin: 0,
          }}
        >
          Discord
        </Fab>
      </a>
      <a
        href="https://discord.gg/rWMuMdk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Fab
          size="small"
          variant="contained"
          color="secondary"
          style={{
            fontSize: "12px",
            boxShadow: "none",
            margin: 0,
            background: "orange",
          }}
        >
          Contact Us
        </Fab>
      </a>
    </div>
  )
}