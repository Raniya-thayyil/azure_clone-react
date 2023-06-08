import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import './FirstCards.css';

function FirstCards() {
    const [data, setData] = useState([]);
    const fetchData = () => {
      fetch(
        "https://raw.githubusercontent.com/Raniya-thayyil/data-json/main/data.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data.cloudSolutions);
        });
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div>
      <div className="cards-main">
        {data.map((item, idx) => (
          <div className="each-card" key={idx}>
            <img src={item.image} />
            <div className="inside-card">
              <a href="">{item.caption}</a>
              <p>{item.description}</p>
            </div>
            <div className="blank-space"></div>
          </div>
        ))}
      </div>
      <div className='link-main'>
            <div className='links'>
                <p>New to Azure?</p>
                <a href=''>Get an overview</a>
            </div>
        </div>
        <div className='ideas-main'>
            <h2>
            Start putting your ideas into action with Azure products and services
            </h2>
        </div>
        <div className='space'></div>
    </div>
  );
}

export default FirstCards