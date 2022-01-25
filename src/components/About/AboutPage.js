import React from "react";

import "./AboutPage.scss";

import { AboutIntroduction } from "./AboutIntroduction";
import { AboutSkills } from "./AboutSkills";
import { AboutExperience } from "./AboutExperience";

export const AboutPage = () => {
  return (
    <div className="about-me-wrapper">
      <div className="about-me-content">
        <AboutIntroduction />
        <AboutExperience />
        <AboutSkills />
      </div>
    </div>
  );
};
