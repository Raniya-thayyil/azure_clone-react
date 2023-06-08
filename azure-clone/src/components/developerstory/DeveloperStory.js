import React from 'react'

import { BiCaretRightCircle } from "react-icons/bi";

import { useState } from 'react';
import { useEffect } from 'react';

import './DeveloperStory.css'

function DeveloperStory() {
    const [data, setData] = useState([]);  
    const fetchData = () => {
      fetch(
        "https://raw.githubusercontent.com/Raniya-thayyil/data-json/main/data.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data.Stories);
        });
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className='story-main'>
      <div className='story-img-inside'>
        <img src={data.image}/>
        <div className='story-inside'>
          <p>{data.caption}</p>
          <div className='btns'>

          <a href='' id='btn'>
            <BiCaretRightCircle className='play' />
            Watch the story(2:56)</a>
          <div id='space'></div>
          <a href=''id='btn2'>Check out more developer stories</a>
          </div>
        </div>
        
        
      </div>        
    </div>
  )
}

export default DeveloperStory