import "react-table/react-table.css"

import ReactTable from "react-table"
import React from "react"
import blueprints from "../constants/blueprints"
import { graphql } from "gatsby"
import ImgHero from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const columns = Object.keys(blueprints[0]).map(key => ({
  Header: key,
  accessor: key,
}))

const HeroContainer = styled.div`
  background-size: cover;
  height: 300px;
  width: 100%;
  position: relative;
`
const Hero = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <HeroContainer></HeroContainer>
      <div className="HeroGroup">
        <h1>Blueprints Overview</h1>
      </div>
    </Hero>

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
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
