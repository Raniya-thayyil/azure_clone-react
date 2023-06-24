import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import TfiAngleRight from 'react-icons/'

import "./Invent.css";

function Invent(props) {
  const {invents} = props
  // const [data, setData] = useState([]);
  // const fetchData = () => {
  //   fetch(
  //     "https://raw.githubusercontent.com/Raniya-thayyil/data-json/main/data.json"
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data.landingPage);
  //     });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>
      <div className="landing-page-mobile">
        <div className="back-image">
          <img src={invents.backgroundImage} />
        </div>
        <div className="invent-content-main">
          <div className="invent-content">
            <h1>{invents.heading}</h1>
            <div className="invent-texts">
              <h1>{invents.mainHeading}</h1>
              <p>{invents.paragraph}</p>
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
          background: `url(${invents.desktopBackground}) 50% 0%/ cover no-repeat`,
        }}
      >
        <div className="landing-page-desk">
          <div className="invent-content-main">
            <div className="invent-content">
              <h1>{invents.heading}</h1>
              <div className="invent-texts">
                <h1>{invents.mainHeading}</h1>
                <p>{invents.paragraph}</p>
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
