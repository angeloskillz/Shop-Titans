import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import blueprints from "../constants/blueprints"
import Blueprint from "../components/Blueprint"
import Worker from "../components/Worker"
import SEO from "../components/seo"

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

const Resources = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
  font-family: "Roboto";
  font-size: 14px;
  text-align: left;
  color: #bc9060;
  margin-top: -5px;
  margin-bottom: 0px;
  text-align: center;
`

const Section = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const Container = styled.div`
  height: 50px;
  width: 100%;
  z-index: -1;
  position: relative;
`

export default ({ pageContext: data }) => {
  const relevantBlueprints = blueprints.filter(
    b =>
      b["Required Worker"] === data.title ||
      b["Required Worker__1"] === data.title
  )

  return (
    <Layout>
      <SEO title={data.name}></SEO>
      <Section>
        <Container />
      </Section>
      <Worker details={data} type="worker" />
      <Title>Blueprints</Title>
      <Resources>
        {relevantBlueprints.map((blueprint, index) => (
          <div key={index}>
            <Blueprint details={blueprint}></Blueprint>
          </div>
        ))}
      </Resources>
    </Layout>
  )
}
