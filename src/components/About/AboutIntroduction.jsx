import React from "react";
import "./AboutIntroduction.scss";
import profilePicture from "./images/profilePicture.jpg";
import CV from "./resume/resume.pdf";

export const AboutIntroduction = () => {
  return (
    <div className="introduction">
      <div className="text">
        <h1 className="title special-text">
          Welcome G! I'm Piotr Swobodziński | Kossin
        </h1>
        <div className="header-container">
          <span className="header-shadow header">TECH</span>
          <span className="header-text header">TECH</span>
        </div>
        <p className="important">
          My journey with web development started in{" "}
          <span className="special-text">{` <2017 /> `}</span>
        </p>
        <p className="important">
          Currently I'm working to expand my knowledne in React & Typescript.
          I'm open to learn new technologies and in the future would like to go
          more into Full Stack Development
        </p>
        <div className="header-container">
          <span className="header-shadow header">PERSONAL</span>
          <span className="header-text header">PERSONAL</span>
        </div>
        <p className="important">
          I've always paid atention to detail, therefore i really enjoy UI/UX
          design. Friends describe me as open-minded and enthusiastic. Besides
          web-dev I'm interested in Martial Arts, Crypto, skateboarding and
          music
        </p>
        <p className="less-important">I'm open to collaborate on Hackathons</p>
        <a href="./resume/resume.pdf" download={CV}>
          <button className="resume-btn">
            Resume
            <i className="fas fa-file-download"></i>
          </button>
        </a>
      </div>
      <div className="profile-pic">
        <img src={profilePicture} alt="ProfileImage" />
      </div>
    </div>
  );
};
