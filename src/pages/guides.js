import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => {
  const posts = props.data.allMarkdownRemark.edges.map(e => e.node)
  console.log(posts)
  return (
    <Layout>
      <SEO
        title="Shop Titans Design & Craft Guides & Tips"
        description="Shop Titans wiki helps you get the best shop titans guides and tips to make you one of the best players. Learn about how to master the city and understand every portion of the game from the top players around."
      />
      <div style={{ paddingTop: "50px", marginLeft: "5px" }}>
        {posts.map((post, index) => (
          <div>
            <Link to={post.fields.slug}>
              <h2 style={{ textAlign: "center" }}>{post.frontmatter.title}</h2>
            </Link>
            <p key={index}>{post.frontmatter.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            category
          }
        }
      }
    }
  }
`
