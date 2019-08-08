import React from "react"
import "./guide.css"

export default props => (
  <div>
    <br />
    {props.helmet || ""}
    <div className="guide" style={{ color: "black" }}>
      <p className="guideDate">{props.date}</p>
      <h1 className="guideTitle">{props.title}</h1>
      <img
        src={require("../images/Divider.png")}
        style={{
          width: "250px",
          display: "block",
          margin: "0 auto",
          marginBottom: "24px",
        }}
        alt="divider"
      />
      <div
        className="guideContent"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
    </div>
  </div>
)
