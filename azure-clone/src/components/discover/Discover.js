import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { FaChevronRight } from "react-icons/fa";

import "./Discover.css";

function Discover(props) {
  const {discoveries} = props  
  return (
    <>
      <div className="discover-main">
        <div className="discover-head">
          <h2>Discover what's happening on Azure</h2>
        </div>
        <div className="discover-cards-main">
          {discoveries.map((item, idx) => (
            <div className="each-card" key={idx}>
              <img src={item.image} />
              <div className="inside-discovercard">
                <h3>{item.caption}</h3>
                <p>{item.descriptiion}</p>
                <a href="">Learn more</a>
                <FaChevronRight color="#0067b8" /> 
              </div>
              <div className="blank-space"></div>
            </div>
          ))}
        </div>
      </div>
      <div>

      </div>
    </>
  );
}

export default Discover;
