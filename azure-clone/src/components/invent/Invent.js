import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import TfiAngleRight from 'react-icons/'

import "./Invent.css";

function Invent() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Raniya-thayyil/data-json/main/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.landingPage);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="landing-page-mobile">
        <div className="back-image">
          <img src={data.backgroundImage} />
        </div>
        <div className="invent-content-main">
          <div className="invent-content">
            <h1>{data.heading}</h1>
            <div className="invent-texts">
              <h1>{data.mainHeading}</h1>
              <p>{data.paragraph}</p>
            </div>
            <div className="buttons">
              <a href="">Get Started</a>
              <a href="">Try Azure for free</a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="landingpage-desktop"
        style={{
          background: `url(${data.desktopBackground}) 50% 0%/ cover no-repeat`,
        }}
      >
        <div className="landing-page-desk">
          <div className="invent-content-main">
            <div className="invent-content">
              <h1>{data.heading}</h1>
              <div className="invent-texts">
                <h1>{data.mainHeading}</h1>
                <p>{data.paragraph}</p>
              </div>
              <div className="buttons">
                <a href="">Get Started</a>
                <a href="">Try Azure for free</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="premise-text">
        <h2>
          On-premises, hybrid, multicloud, or at the edge—create secure,
          future-ready cloud solutions on Azure
        </h2>
      </div>
    </>
  );
}

export default Invent;
