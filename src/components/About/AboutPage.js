import React from "react";

import "./AboutPage.scss";

import { AboutSkills } from "./AboutSkills";
import { AboutExperience } from "./AboutExperience";

export const AboutPage = () => {
  return (
    <div className="about-me-wrapper">
      <div className="about-me-content">
        <div className="about-info-about-me">
          <p>I'm Kossin i love animals, gaming, crypto etc. get more</p>
        </div>
        <AboutExperience />
        <AboutSkills />
      </div>
    </div>
  );
};
