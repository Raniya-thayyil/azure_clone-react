import React from "react";

import { FaChevronRight } from "react-icons/fa";

import "./Customers.css";

function Customers({ image, description }) {
  return (
    <>
      <div className="img-casestudy">
        <div className="customer-img">
          <img src={image} />
        </div>
        <div className="case-study">
          <p>{description}</p>          
            <a href="">Case study</a>
            <FaChevronRight className="chevron" />          
        </div>
      </div>
    </>
  );
}

export default Customers;
