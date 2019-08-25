import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import ChampionBox from "../components/ChampionBox"
import SEO from "../components/seo"

const Resources = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
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

export default ({ pageContext: data }) => (
  <Layout>
    <SEO title={data.name}></SEO>
    <Section>
      <Container />
    </Section>
    <div className="CardboxGroupScroll" style={{ marginBottom: "50px" }}>
      <Resources className="CardboxGroup">
        <ChampionBox details={data} className="not-active" />
      </Resources>
    </div>

    <table class="table table-bordered table-hover table-condensed">
      <thead>
        <tr>
          <th title="Field #1" style={{ textAlign: "center" }}>
            Rank
          </th>
          <th title="Field #2" style={{ textAlign: "center" }}>
            Coins
          </th>
          <th title="Field #3" style={{ textAlign: "center" }}>
            Health
          </th>
          <th title="Field #4" style={{ textAlign: "center" }}>
            Attack
          </th>
          <th title="Field #5" style={{ textAlign: "center" }}>
            Skill
          </th>
          <th title="Field #6" style={{ textAlign: "center" }}>
            Total Cost
          </th>
          <th title="Field #7" style={{ textAlign: "center" }}>
            Effect
          </th>
        </tr>
      </thead>
      <tbody>
        {data.ranks.map((rank, index) => (
          <tr key={index}>
            <td style={{ textAlign: "center" }}>{rank.rank}</td>
            <td style={{ textAlign: "center" }}>{rank.coins}</td>
            <td style={{ textAlign: "center" }}>
              {rank.reward.health}
            </td>
            <td style={{ textAlign: "center" }}>
              {rank.reward.attack}
            </td>
            <td style={{ textAlign: "center" }}>
              {rank.reward.defense}
            </td>
            <td style={{ textAlign: "center" }}>{rank.reward.skill.name || "---"}</td>
            <td style={{ textAlign: "center" }}>{rank.reward.skill.effect}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Layout>
)
