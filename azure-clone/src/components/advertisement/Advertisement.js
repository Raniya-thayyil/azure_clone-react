import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import "./Advertisement.css";

function Advertisement(props) {
  const {adsList} = props

  return (
    <>
      <div className="ads-main">
      {adsList.map((item, idx) => (
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
