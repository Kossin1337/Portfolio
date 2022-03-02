import React from "react";
import "./AboutIntroduction.scss";
import profilePicture from "./images/profilePicture.jpg";

export const AboutIntroduction = () => {
  return (
    <div className="introduction">
      <div className="text">
        <h1 className="title special-text">
          Welcome G! I'm Piotr Swobodziński | Kossin
        </h1>
        <p className="important">
          My journey with web development started in{" "}
          <span className="special-text">{` <2017 /> `}</span>
        </p>
        <p className="important">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          dolorum doloremque, nam molestias consequatur eveniet a quidem libero
          nostrum ipsum.
        </p>
        <p className="important">
          I have always pay attention to detail, so UI/UX was a way to express
          myself. Friends describe me as open-minded and enthusiastic. Besides
          web-dev I'm interested in MMA, Crypto, speedcubing, skateboarding
        </p>
        <p className="less-important">Open to collaborate on Hackathons</p>
        <button className="resume-btn">
          Resume
          <i class="fas fa-file-download"></i>
        </button>
      </div>
      <div className="profile-pic">
        <img src={profilePicture} alt="ProfileImage" />
      </div>
    </div>
  );
};
