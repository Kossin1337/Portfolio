import React from "react";

import "./AboutIntroduction.scss";

import profilePicture from "./images/profilePicture.jpg";
import resume from "./images/resume.png";

export const AboutIntroduction = () => {
  return (
    <div className="introduction">
      <div className="text">
        <p className="important">
          Nice to see you G! My name is Piotr, but relatives call me Kossin. My
          journey with web development started in{" "}
          <span className="special-text">{` <2017 /> `}</span>
          when I wanted to recreate a school's website. I always had a kink for
          UI/UX design
        </p>
        <p className="important">
          Relatives describe me as open-minded, enthusiastic and outgoing. 1v1
          me rust
        </p>
        <p className="important">
          Besides web-dev I'm interested in MMA, Crypto, speedcubing,
          skateboarding
        </p>
        <p className="less-important">Open to collaborate on Hackathons</p>
        <button className="resume-btn">
          Resume
          <img src={resume} alt="Resume" />
        </button>
      </div>
      <div className="profile-pic">
        <img src={profilePicture} alt="ProfileImage" />
      </div>
    </div>
  );
};
