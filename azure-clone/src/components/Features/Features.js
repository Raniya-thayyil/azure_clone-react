import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FeatureCards from "./FeatureCards";

import { FaChevronRight } from "react-icons/fa";

import "./Features.css";

function Features(props) {
  const {
    mainDatas,
    features,
    aiMachine,
    computes,
    containers,
    hybrids,
    iots,
    handleClickfunction,
    value






  } = props
  // const [data, setData] = useState([]);
  // // const [nav, setNav] = useState([]);
  // const [value, setvalue] = useState("feature");
  // const [feature, setFeature] = useState([]);
  // const [ai, setAi] = useState([]);
  // const [compute, setCompute] = useState([]);
  // const [container, setContainer] = useState([]);
  // const [hybrid, setHybrid] = useState([]);
  // const [iot, setIot] = useState([]);
  // const fetchData = () => {
  //   fetch(
  //     "https://raw.githubusercontent.com/Raniya-thayyil/data-json/main/data.json"
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data.featuresList);
  //       setFeature(data.Featured);
  //       setAi(data.AiMmachineLearning);
  //       setCompute(data.Compute);
  //       setContainer(data.Containers);
  //       setHybrid(data.HybridMulticloud);
  //       setIot(data.InternetOfThings);
  //     });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const handleClick = (item) => {
  //   setvalue(item);
  // };

  return (
    <>
      <div className="whole-container">
        <div className="feature-list">
          <ul>
            {mainDatas.map((item, idx) => (
              <li onClick={() => handleClickfunction(item.value)} key={item.valueue}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="main-cards">
          {value === "feature" &&
            features.map((item) => {
              return (
                <FeatureCards
                  image={item.icon}
                  paragraph={item.caption}
                  link={item.link}
                  key={item.image}
                />
              );
            })}
          {value === "ai" &&
            aiMachine.map((item) => {
              return (
                <FeatureCards
                  image={item.icon}
                  paragraph={item.caption}
                  link={item.link}
                  key={item.image}
                />
              );
            })}
          {value === "compute" &&
            computes.map((item) => {
              return (
                <FeatureCards
                  image={item.icon}
                  paragraph={item.caption}
                  link={item.link}
                  key={item.image}
                />
              );
            })}
          {value === "container" &&
            containers.map((item) => {
              return (
                <FeatureCards
                  image={item.icon}
                  paragraph={item.caption}
                  link={item.link}
                  key={item.image}
                />
              );
            })}
          {value === "hhybrid" &&
            hybrids.map((item) => {
              return (
                <FeatureCards
                  image={item.icon}
                  paragraph={item.caption}
                  link={item.link}
                  key={item.image}
                />
              );
            })}
          {value === "iot" &&
            iots.map((item) => {
              return (
                <FeatureCards
                  image={item.icon}
                  paragraph={item.caption}
                  link={item.link}
                  key={item.image}
                />
              );
            })}
        </div>
      </div>
      <div className="see-products">
        <a href="">See all products (200+)</a>   
        <FaChevronRight color="#0067b8" size='14px'/>    

      </div>
      <div className="find">
        <p>Find out how these customers are innovating with Azure</p>

      </div>
    </>
  );
}

export default Features;
