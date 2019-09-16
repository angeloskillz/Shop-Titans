import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Guide from "../components/Guide"
import styled from "styled-components"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />

      <Guide
        date={post.frontmatter.date}
        content={post.html}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Shop Titans Guide">
            <title>{post.frontmatter.title}</title>
            <meta name="description" content={post.frontmatter.description} />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
