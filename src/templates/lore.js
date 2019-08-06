import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Lore from "../components/lore"
import StickyFooter from 'react-sticky-footer'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Lore
        date={post.frontmatter.date}
        content={post.html}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Lore">
            <title>{post.frontmatter.title}</title>
            <meta name="description" content={post.frontmatter.description} />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
      <StickyFooter
        className="footer"
        bottomThreshold={50}
        normalStyles={{
          backgroundColor: '',
          padding: '1rem',
          fontSize: '12px',
          color: 'white',
          textAlign: 'center',
          marginTop: '50px',
          fontWeight: '600'
        }}
        stickyStyles={{
          backgroundColor: '',
          padding: '1rem',
          fontSize: '12px',
          color: 'white',
          textAlign: 'center',
          marginTop: '50px',
          fontWeight: '800'
        }}
      >
        <p>Copyright © 2019 SBWIKI</p>
        <p>SBWIKI is not affiliated or part of Proletariat Inc. All Spellbreak copyrights and art assets belong to Proletariat Inc.</p>
        Made by
{' '}
        <a style={{ color: '#daa54e' }} href="https://twitter.com/AngeloCant1">AngeloC</a> & <a style={{ color: '#daa54e' }} href="https://twitter.com/IGNSkillz4Killz">Skillz4Killz</a>
        <p>Assets provided by Fireball &
      <a style={{ color: '#daa54e' }} href="https://twitter.com/FN_flocci"> FN_flocci</a>
          <a style={{ color: '#6441a5' }} href="https://www.twitch.tv/fn_flocci"> (Twitch)</a>
        </p>{' '}
        <p>Privacy Policy: We don’t store your data</p>
      </StickyFooter>
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
