import React from "react";
import "./AboutPage.scss";

import { AboutIntroduction } from "./AboutIntroduction.jsx";
import { AboutSkills } from "./AboutSkills.jsx";
import { AboutExperience } from "./AboutExperience.jsx";

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
