import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"

const contributors = [{ name: "LordAzuRa", guild: "Guild Name" }]

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
        <p>
          Hey there! We made this wiki with a massive focus on user interface
          and user experience so that everyone can have the best possible
          experience with Shop Titans. We wanted to take a moment and thank
          everyone that uses this project, everyone that helped contribute to
          it, Kabam for making this amazing game.
        </p>
        <p>
          This wiki is available on any device online but it will also be able
          to be installed as an App on your devices. Check out the guide to get
          the app!
        </p>
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
            <StyledTab label="Roadmap" className="button" />
            <StyledTab label="Changelog" className="button" />
          </StyledTabs>
        </StyledAppBar>
        {value === 0 && (
          <TabContainer>
            <h2>Skillz4Killz: Lead Dev (Full Stack)</h2>
            <p></p>
            <h2>AngeloC: Designer & Front End Dev</h2>
            <p></p>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <div className="Selectan">
              <h1>Major Contributors</h1>
            </div>
            {contributors.map((contributor, index) => (
              <div key={index}>
                <p>
                  {contributor.name} from {contributor.guild}
                </p>
              </div>
            ))}
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <div className="Selectan">
              <div>
                <h1>Version 1 Release Plan:</h1>
                <ul>
                  <li>✅ Homepage With Tabs showing Workers and Heroes</li>
                  <li>✅ Each worker has it's own individual page.</li>
                  <li>✅ Each blueprint has it's own individual page.</li>
                  <li>✅ PWA to allow users to create an App on their devices.</li>
                  <li>✅ Credits to contributors.</li>
                  <li>✅ Roadmap</li>
                  <li>✅ Changelog</li>
                </ul>
              </div>

              <div>
                <h1>Version 2</h1>
                <ul>
                  <li>
                    Guides
                    <ul>
                      <li>
                        📝 Users can create the guides through Netlify CMS right
                        on the dashboard.
                      </li>
                      <li>📝 Users can submit guides with Google Docs.</li>
                      <li>
                        📝 Atleast a few guides must be written as a start.
                      </li>
                    </ul>
                  </li>
                  <li>Each worker has it's own individual page.</li>
                </ul>
              </div>
            </div>
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <div>
              <h1>Latest Update:</h1>
              <ul>
                <li>✅ Added a footer with copyrights to Kabam.</li>
                <li>
                  ✅ Added privacy policy showing we don't store any user data.
                </li>
                <li>✅ Created a navbar.</li>
                <li>✅ Added Discord Links on home page.</li>
                <li>
                  Worker Cards
                  <ul>
                    ✅ Added Worker cards on home page in first tab.
                    <li>
                      ✅ Cards are separated into sections based on their type.
                    </li>
                    <li>
                      ✅ Cards are able to be clicked to open their individual
                      page for more details.
                    </li>
                  </ul>
                </li>
                <li>✅ Added Hero cards on home page in second tab.</li>
                <li>📝 Added Champion cards on home page in third tab.</li>
              </ul>
            </div>
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
