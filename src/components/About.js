import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import styled from "styled-components"

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

const Description = styled.h2`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  color: #406081;
  text-align: center;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const contributors = [
  { name: "LordAzuRa", guild: "Guild Name" },
  { name: "hsidnomeL", guild: "River Echo" },
]

const TabContainer = styled.div`
  padding: 24px;
  background: "#F4FAFF"
`

const UnorderedList = styled.ul`
  list-style-type: none;
`

const version1 = [
  { value: "Homepage With Tabs showing Workers and Heroes", done: true },
  { value: "Each worker has it's own individual page.", done: true },
  {
    value: "PWA to allow users to create an App on their devices.",
    done: true,
  },
  { value: "Credits to contributors.", done: true },
  { value: "Make a detailed roadmap.", done: true },
  { value: "Start a changelog.", done: true },
]

const version2 = [
  {
    value:
      "Users can create the guides through Netlify CMS right on the website.",
    done: false,
  },
  { value: "Users can submit guides with Google Docs.", done: false },
  { value: "Atleast a few guides must be written as a start.", done: false },
  {
    value:
      "Add Champion tab with each champions own box. Consider a page per champion.",
    done: false,
  },
  { value: "Each blueprint has it's own individual page.", done: false },
  {
    value:
      "Better support for PWA with offline support so users can install it as an app on their devices.",
    done: false,
  },
]

const version3 = [
  { value: "View the latest news related to shop titans.", done: false },
  {
    value: "View fan art, memes, shop titans community projects and much more.",
    done: false,
  },
  {
    value: "Promote your Youtube videos!",
    done: false,
  },
  {
    value: "When streamers go live, they will be promoted on the website!",
    done: false,
  },
]

const changelog = [
  "Added a footer with copyrights to Kabam.",
  "Added privacy policy showing we don't store any user data.",
  "Created a navbar.",
  "Added Discord Links on home page.",
  "Worker Cards",
  "Added Worker cards on home page in first tab.",
  "Cards are separated into sections based on their type.",
  "Cards are able to be clicked to open their individual page for more details.",
  "Added Hero cards on home page in second tab.",
  "Added Champion cards on home page in third tab.",
]

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
        <AppBar
          position="static"
          color="default"
          style={{
            background: "none",
            width: "max-content",
            margin: "0 auto",
            boxShadow: "none",
          }}
        >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor=""
            textColor="primary"
            variant="fullWidth"

          >
            {["Developers", "Contributors", "Roadmap", "Changelog"].map((name, index) => (
              <Tab
                label={name}
                className="button"
                selected={true}
                style={{
                  background: this.state.value === index ? "#5FA9FF" : "",
                  borderRadius: this.state.value === index ? "10px" : "",
                }}
                key={index}
              />
            ))}
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <Description>
              Hey there! We made this wiki with a focus on user interface and
              user experience so that everyone can have the best possible
              experience with Shop Titans.
            </Description>
            <Description>
              We wanted to take a moment and thank everyone that uses this
              project, everyone that helped contribute to it, and most of all to
              Kabam for making this amazing game.
            </Description>
            <Title>Lead Dev (Full Stack)</Title>
            <Description>Skillz4Killz</Description>
            <Title>Designer & Front End Dev</Title>
            <Description>AngeloC</Description>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <div className="Selectan">
              <h1>Major Contributors</h1>
            </div>
            {contributors.map((contributor, index) => (
              <div key={index}>
                <Description>
                  {contributor.name} from {contributor.guild}
                </Description>
              </div>
            ))}
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <Description>
              This roadmap can change at any time based on user feedback.
            </Description>
            <div className="Selectan">
              <div>
                <h1>Version 1:</h1>
                <UnorderedList>
                  {version1.map((item, versionIndex) => (
                    <li key={versionIndex}>
                      <Description>
                        <span
                          role="img"
                          aria-labelledby="jsx-a11y/accessible-emoji"
                        >
                          {item.done ? "✅" : "📝"}
                        </span>{" "}
                        {item.value}
                      </Description>
                    </li>
                  ))}
                </UnorderedList>
              </div>

              <div>
                <h1>Version 2: Guides</h1>
                <UnorderedList>
                  {version2.map((item, versionIndex) => (
                    <li key={versionIndex}>
                      <Description>
                        <span
                          role="img"
                          aria-labelledby="jsx-a11y/accessible-emoji"
                        >
                          {item.done ? "✅" : "📝"}
                        </span>{" "}
                        {item.value}
                      </Description>
                    </li>
                  ))}
                </UnorderedList>
              </div>

              <div>
                <h1>Version 3: News</h1>
                <UnorderedList>
                  {version3.map((item, versionIndex) => (
                    <li key={versionIndex}>
                      <Description>
                        <span
                          role="img"
                          aria-labelledby="jsx-a11y/accessible-emoji"
                        >
                          {item.done ? "✅" : "📝"}
                        </span>{" "}
                        {item.value}
                      </Description>
                    </li>
                  ))}
                </UnorderedList>
              </div>
            </div>
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <div>
              <Title>Latest Update:</Title>
              <UnorderedList>
                {changelog.map((item, index) => (
                  <li key={index}>
                    <Description>
                      <span
                        role="img"
                        aria-labelledby="jsx-a11y/accessible-emoji"
                      >
                        ✅
                      </span>{" "}
                      {item}
                    </Description>
                  </li>
                ))}
              </UnorderedList>
            </div>
          </TabContainer>
        )}
      </div>
    )
  }
}

export default FullWidthTabs
