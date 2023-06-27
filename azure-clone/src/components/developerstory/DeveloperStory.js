import React from "react";

import { BiCaretRightCircle } from "react-icons/bi";

import { useState } from "react";
import { useEffect } from "react";

import "./DeveloperStory.css";

function DeveloperStory(props) {
  const { stories } = props;

  return (
    <div className="story-main">
      <div className="story-img-inside">
        <img src={stories.image} />

        <div className="story-inside">
          <p>{stories.caption}</p>
          <div className="btns">
            <a href="" id="btn">
              <BiCaretRightCircle className="play" />
              Watch the story(2:56)
            </a>
            <div id="space"></div>
            <a href="" id="btn2">
              Check out more developer stories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeveloperStory;
