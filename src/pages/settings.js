import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import workers from "../constants/workers/oldworkers"
import WorkerSetting from "../components/WorkerSetting"

const Description = styled.h2`
  font-weight: bold;
  font-size: 14px;
  color: #406081;
  margin-bottom: 16px;
  white-space: pre-wrap;
  padding-left: 10px;
  padding-right: 10px;
`

const Title = styled.h2`
  font-weight: 800;
  font-size: 28px;
  color: #ff665f;
  margin-bottom: 0;
`

const Hero = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
`

export default () => (
  <Layout>
    <SEO title="About" />
    <Hero>
      <Title>Your Custom Settings</Title>
      <Description>
        Note: By using this page you agree to save the information you provide
        in your devices local storage. We do NOT collect any of this
        information, it is only saved on your device. To remove this
        information, you can clear your browsers cache and local storage.
      </Description>
    </Hero>
    {/* Worker Level Settings */}
    {workers.map((worker, index) => (
      <WorkerSetting key={index} workerName={worker.name}></WorkerSetting>
    ))}
  </Layout>
)

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
