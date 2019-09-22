import "./layout.css"
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import StickyFooter from "react-sticky-footer"

import Header from "./header"
import BottomNav from "./BottomNav"

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
                "shop titans, wiki, shoptitanswiki, shoptitans, shop titans wiki, stwiki, st",
            },
            {
              property: "og:image",
              content: "https://i.imgur.com/SXOUs4O.jpg",
            },
            {
              name: "viewport",
              content:
                "width=device-width, initial-scale=1.0, viewport-fit=cover",
            },
          ]}
        >
          <meta name="title" content="Shop Titans Wiki" />
          <meta name="description" content="A Shop Titans Wiki" />

          <meta
            name="keywords"
            content="shop titans, wiki, shoptitanswiki, shoptitans, shop titans wiki, stwiki, st"
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Shop Titans Wiki" />
          <meta property="og:description" content="A Shop Titans Wiki" />
          <meta property="og:image" content="https://i.imgur.com/SXOUs4O.jpg" />
          <meta property="og:url" content="https://shoptitans.netlify.com/" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://shoptitans.netlify.com"
          />
          <meta property="twitter:title" content="Shop Titans Wiki" />
          <meta property="twitter:description" content="A Shop Titans Wiki" />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/SXOUs4O.jpg"
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
            color: "black",
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
          <p>Copyright © 2019 Shop Titans Wiki</p>
          <p>
            Shop Titans Wiki is not affiliated or part of Kabam Games, Inc. All
            Shop Titans copyrights and art assets belong to Kabam Games Inc.
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
            href="https://discord.gg/rWMuMdk"
          >
            Skillz4Killz
          </a>
          <p>Privacy Policy: We don’t store your data.</p>
        </StickyFooter>

        <BottomNav />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
