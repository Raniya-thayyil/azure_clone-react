import React from "react";

import home_accelerate from "../assets/home_accelerate.avif";

import "./HomeAccelerate.css";

function HomeAccelerate() {
  return (
    <>
      <div className="home-accelerate">
        <div className="home-img">
          <img src={home_accelerate} />
        </div>
        <div className="home-text-link">
          <p>Accelerate your migration and modernization with Azure</p>
          <a href="">
            <span>Explore help and tools</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default HomeAccelerate;
