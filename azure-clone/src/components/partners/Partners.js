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
  // const [data, setData] = useState([]);
  // const [val, setVal] = useState("fujistu");
  // const [fujistu, setFujistu] = useState([]);
  // const [nba, setNba] = useState([]);
  // const [hr, setHr] = useState([]);
  // const [nhs, setNhs] = useState([]);
  // const [forza, setForza] = useState([]);

  // const fetchData = () => {
  //   fetch(
  //     "https://raw.githubusercontent.com/Raniya-thayyil/data-json/main/data.json"
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data.customersList);
  //       setFujistu(data.fujistu);
  //       setNba(data.nba);
  //       setHr(data.hr);
  //       setNhs(data.nhs);        
  //       setForza(data.forza);
  //     });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const handleClick = (item) => {
  //   setVal(item);
  // };
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
