import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import StickyFooter from "react-sticky-footer"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description,
            },
            {
              name: "keywords",
              content:
                "spellbreak, wiki, spellbreakwiki, spellbreak wiki, sbwiki, sb",
            },
            {
              property: "og:image",
              content: "https://i.imgur.com/2q3zVoV.png",
            },
            {
              name: "viewport",
              content:
                "width=device-width, initial-scale=1.0, viewport-fit=cover",
            },
          ]}
        >
          <meta name="title" content="SBWIKI" />
          <meta name="description" content="A Spellbreak Wiki" />

          <meta
            name="keywords"
            content="spellbreak, wiki, spellbreakwiki, spellbreak wiki, sbwiki, sb"
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="SBWIKI" />
          <meta property="og:description" content="A Spellbreak Wiki" />
          <meta property="og:image" content="https://i.imgur.com/2q3zVoV.png" />
          <meta property="og:url" content="https://vgwiki.xyz/" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://vgwiki.xyz/" />
          <meta property="twitter:title" content="SBWIKI" />
          <meta property="twitter:description" content="A Spellbreak Wiki" />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/2q3zVoV.png"
          />
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
        <StickyFooter
          className="footer"
          bottomThreshold={50}
          normalStyles={{
            backgroundColor: "",
            padding: "1rem",
            fontSize: "12px",
            color: "white",
            textAlign: "center",
            marginTop: "50px",
            fontWeight: "600",
          }}
          stickyStyles={{
            backgroundColor: "",
            padding: "1rem",
            fontSize: "12px",
            color: "white",
            textAlign: "center",
            marginTop: "50px",
            fontWeight: "800",
          }}
        >
          <p>Copyright © 2019 SBWIKI</p>
          <p>
            Shop Titans Wiki is not affiliated or part of Kabam Games, Inc. All
            Spellbreak copyrights and art assets belong to Kabam Games Inc.
          </p>
          Made by{" "}
          <a
            style={{ color: "#daa54e" }}
            href="https://twitter.com/AngeloCant1"
          >
            AngeloC
          </a>{" "}
          &{" "}
          <a
            style={{ color: "#daa54e" }}
            href="https://twitter.com/IGNSkillz4Killz"
          >
            Skillz4Killz
          </a>
          <p>Privacy Policy: We don’t store your data.</p>
        </StickyFooter>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
