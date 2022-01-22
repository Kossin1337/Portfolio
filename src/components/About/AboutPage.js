import React from "react";

import "./AboutPage.scss";

export const AboutPage = () => {
  return (
    <div className="about-me-wrapper">
      <div className="technologies">
        
      </div>
      <div className="about-me-content">
        <div className="about-education">
          <h2 className="section-header">Education & Freelancing</h2>
          <h3 className="education-header">2019 October - Current</h3>
          <p className="education-content">
            Applied Computer Science student at Cracow University of Technology
          </p>
          <h3 className="education-header">2020 January - Current</h3>
          <p className="education-content">
            Proffesional Engineering Translations
          </p>
          <h3 className="education-header">2020 September - Current</h3>
          <p className="education-content">Front-end freelancer</p>
        </div>
        <div className="about-info-about-me">
          <p>I'm Kossin i love animals, gaming, crypto etc. get more</p>
        </div>
      </div>
    </div>
  );
};
