import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import ChampionBox from "../components/ChampionBox"
import SEO from "../components/seo"
import WorkerImage from "../components/WorkerImage"
import { cleanName } from "../utils/util"

const Icons = styled.div`
  margin: 0 auto;
  width: 70px;
  border-radius: 26px;
  padding-bottom: 10px;
  padding-top: 10px;
`

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

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    sans-serif;
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  color: #ff665f;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
`
const Description = styled.h2`
  font-weight: bold;
  font-size: 14px;
  color: #406081;
  text-align: center;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const SubDescription = styled.p`
  font-weight: normal;
  font-size: 12px;
  color: #406081;
  text-align: center;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: pre-wrap;
`

const Page = styled.div`
  position: relative;
  display: flex;
  width: 280px;
  border-radius: 26px;
  margin: auto;
  background: #f0f4f8;
  justify-content: flex-end;
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
            <td style={{ textAlign: "center" }}>{rank.reward.health}</td>
            <td style={{ textAlign: "center" }}>{rank.reward.attack}</td>
            <td style={{ textAlign: "center" }}>{rank.reward.defense}</td>
            <td style={{ textAlign: "center" }}>
              {rank.reward.skill.name || "---"}
            </td>
            <td style={{ textAlign: "center" }}>{rank.reward.skill.effect}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {data.ranks.map((rank, index) => (
      <React.Fragment key={index}>

        {rank.story ? (<div className="Selectan">
          <h1 style={{ color: "#ff665f" }}>Story #{rank.rank}: {rank.title}</h1>
        </div>) : null}
        {rank.story &&
          rank.story.map((page, pageIndex) => (
            <Page key={pageIndex}>
              {pageIndex % 2 === 0 ? (
                <Icons>
                  <WorkerImage
                    filename={cleanName(page.name)}
                    alt={page.name}
                  />
                </Icons>
              ) : (
                <SubDescription>{page.text}</SubDescription>
              )}
              {pageIndex % 2 === 0 ? (
                <SubDescription>{page.text}</SubDescription>
              ) : (
                <Icons>
                  <WorkerImage
                    filename={cleanName(page.name)}
                    alt={page.name}
                  />
                </Icons>
              )}
            </Page>
          ))}
      </React.Fragment>
    ))}
  </Layout>
)
