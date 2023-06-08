import React from "react";

import './FeatureCards.css'

function FeatureCards({ image, paragraph, link }) {
  return (
    <div className="each-feature-card">
      <img src={image} />
      <p>{paragraph}</p>
      <a href="">{link}</a>
    </div>
  );
}

export default FeatureCards;
