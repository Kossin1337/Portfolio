import React from "react";

import "./AboutExperience.scss";

export const AboutExperience = () => {
  return (
    <div className="about-education">
      <h2 className="section-header"> Education & Experience</h2>
      <h3 className="education-header">October 2019 - January 2023</h3>
      <p className="education-content">
        Applied Computer Science student at Cracow University of Technology{" "}
        <i className="fas fa-graduation-cap"></i>
      </p>
      <h3 className="education-header">September 2020 - Present</h3>
      <p className="education-content">
        Front-end freelancer <i className="fas fa-code"></i>
      </p>
      <h3 className="education-header">January 2020 - Present</h3>
      <p className="education-content">
        Proffesional English engineering translations
      </p>

      <h3 className="education-header">Languages</h3>
      <p className="education-content">English (C1 certificate)</p>
      <p className="education-content">Polish (Mother tongue)</p>
      <h3 className="education-header">Hackathons</h3>
      <p className="education-content">U HACK</p>
      <p className="education-content">HackeRAM</p>
    </div>
  );
};
