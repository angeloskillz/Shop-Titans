import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log("filename", props.filename)
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      console.log(image)
      if (!image) return null

      return (
        <Img
          alt={props.alt}
          fixed={image.node.childImageSharp.fixed}
          style={{
            position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
        />
      )
    }}
  />
)

export default Image
