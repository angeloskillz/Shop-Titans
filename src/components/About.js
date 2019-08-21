import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"

const contributors = [
  { name: "LordAzuRa", guild: "Guild Name" },
  { name: "hsidnomeL", guild: "River Echo" },
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
        <p>
          If you wish to help support this project, please contact Kabam on the
          Official Discord Server and ask them to give approval to monetize this
          project. If we had permission to monetize, we could add in a lot more
          features a lot faster. A better website url, Guild features, Upgrade
          tracker, Streamer/Youtuber features, Guides, and soo much more! These
          features cost money and we can only afford so much ourself. At the
          moment, this is being hosted for free thanks to Netlify. But with more
          features we need to build a powerful backend which will begin costing
          money. Check out the Roadmap for more details on the stuff we want to build.
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
            <p>
              This roadmap can change at any time based on user feedback.
            </p>
            <div className="Selectan">
              <div>
                <h1>Version 1 Release Plan:</h1>
                <ul>
                  <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Homepage With Tabs showing Workers and Heroes</li>
                  <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Each worker has it's own individual page.</li>
                  <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Each blueprint has it's own individual page.</li>
                  <li>
                    <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> PWA to allow users to create an App on their devices.
                  </li>
                  <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Credits to contributors.</li>
                  <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Roadmap</li>
                  <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Changelog</li>
                </ul>
              </div>

              <div>
                <h1>Version 2</h1>
                <ul>
                  <li>
                    Guides
                    <ul>
                      <li>
                        <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">📝</span> Users can create the guides through Netlify CMS right
                        on the website.
                      </li>
                      <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">📝</span> Users can submit guides with Google Docs.</li>
                      <li>
                        <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">📝</span> Atleast a few guides must be written as a start.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h1>Version 3</h1>
                <ul>
                  <li>
                    News
                    <ul>
                      <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">📝</span> View the latest news related to shop titans.</li>
                      <li>
                        <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">📝</span> View fan art, memes, shop titans community projects
                        and much more.
                      </li>
                      <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">📝</span> Promote your Youtube videos!</li>
                      <li>
                        <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">📝</span> When streamers go live, they will be promoted on the
                        website!
                      </li>
                    </ul>
                  </li>
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
                <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Added a footer with copyrights to Kabam.</li>
                <li>
                  <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Added privacy policy showing we don't store any user data.
                </li>
                <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Created a navbar.</li>
                <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Added Discord Links on home page.</li>
                <li>
                  Worker Cards
                  <ul>
                    <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Added Worker cards on home page in first tab.
                    <li>
                      <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Cards are separated into sections based on their type.
                    </li>
                    <li>
                      <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Cards are able to be clicked to open their individual
                      page for more details.
                    </li>
                  </ul>
                </li>
                <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">✅</span> Added Hero cards on home page in second tab.</li>
                <li><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">📝</span> Added Champion cards on home page in third tab.</li>
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
