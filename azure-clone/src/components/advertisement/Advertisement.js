import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import "./Advertisement.css";

function Advertisement() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Raniya-thayyil/data-json/main/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.advertisement);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="ads-main">
      {data.map((item, idx) => (
            <div className="each-ad-card" key={idx}>
              <img src={item.icon} />
              <div className="inside-ad">
                <a href="">{item.caption}</a>
                <p>{item.description}</p>                
              </div>
              <div className="blank-space"></div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Advertisement;
