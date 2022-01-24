import React from "react";
import { IMAGES } from "./index.js";

import "./AboutSkills.scss";

export const AboutSkills = () => {
  console.log(IMAGES);

  return (
    <div className="about-skills">
      <h2 className="skills-title">Skills and Technologies</h2>
      <div className="images">
        {Object.values(IMAGES).map((value, index) => {
          console.log(`Value: ${value}, index: ${index}`);
          return <img src={value} key={index} alt="technology" />;
        })}
      </div>
    </div>
  );
};
