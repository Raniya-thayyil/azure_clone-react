import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Customers from "./Customers";

import './Partners.css'

function Partners(props) {
  const {
    datas,
    fujistu,
    nba,
    hr,
    nhs,
    forza,
    value,
    clickFunction

  } = props

  return (
    <>
    <div className="partners-main">
        <div className="partners">
            <ul>
            {datas.map((item, idx) => (
              <li onClick={() => clickFunction(item.value)} key={item.value}>
                <img src={item.image}/>
              </li>
            ))}
            </ul>
        </div>
        <div className="partner-desc">
        {value === "fujistu" &&
            fujistu.map((item) => {
              return (
                <Customers
                  image={item.image}
                  description={item.description}                  
                />
              );
            })}
             {value === "nba" &&
            nba.map((item) => {
              return (
                <Customers
                  image={item.image}
                  description={item.description}                  
                />
              );
            })}
             {value === "hr" &&
            hr.map((item) => {
              return (
                <Customers
                  image={item.image}
                  description={item.description}                  
                />
              );
            })}
               {value === "nhs" &&
            nhs.map((item) => {
              return (
                <Customers
                  image={item.image}
                  description={item.description}                  
                />
              );
            })}
               {value === "forza" &&
            forza.map((item) => {
              return (
                <Customers
                  image={item.image}
                  description={item.description}                  
                />
              );
            })}
        </div>
    </div>
    </>
  )
}

export default Partners;
