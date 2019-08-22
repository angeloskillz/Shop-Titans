import ReactTable from "react-table"
import React from "react"
import blueprints from "../constants/blueprints"
import "react-table/react-table.css"
import { graphql } from "gatsby"
import ImgHero from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const columns = Object.keys(blueprints[0]).map(key => ({
  Header: key,
  accessor: key,
}))

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroContainer">
        <ImgHero
          imgStyle={{ objectPosition: "center top" }}
          className="Img"
          fluid={props.data.imageOne.childImageSharp.fluid}
        />
        <div className="gradient" />
      </div>
      <div className="HeroGroup">
        <h1>Shop Titans</h1>

        <p>Update 2.0.1</p>
      </div>
    </div>
    <ReactTable
      data={blueprints}
      columns={columns}
      showPagination={false}
      filterable={true}
      defaultPageSize={blueprints.length}
      getTrProps={(state, rowInfo, column) => {
        return {
          style: {
            background: rowInfo.row.age > 20 ? "green" : "white",
          },
        }
      }}
      getTdProps={(state, rowInfo, column, instance) => {
        return {
          onClick: (e, handleOriginal) => {
            window.location.assign(`/blueprints/${rowInfo.original.Name}`)
            // IMPORTANT! React-Table uses onClick internally to trigger
            // events like expanding SubComponents and pivots.
            // By default a custom 'onClick' handler will override this functionality.
            // If you want to fire the original onClick handler, call the
            // 'handleOriginal' function.
            if (handleOriginal) {
              handleOriginal()
            }
          },
        }
      }}
    />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    imageOne: file(relativePath: { eq: "Backgrounds/BG1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
