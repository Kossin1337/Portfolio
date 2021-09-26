import React from "react";
import "./Project.css";

import { technologiesColors } from "./featuredWorkData";

export const Project = ({ data }) => {
  const { index, projectName, technologies, description, image } = data;
  return (
    <div className="project" key={index}>
      <div className="project-info">
        <h2 className="project-title">{projectName}</h2>
        <p className="project-description">{description}</p>
        <h4 className="project-technologies-header">Technologies</h4>
        <div className="technologies-container">
          {technologies.map((technology) => {
            const color = technologiesColors[technology];
            return (
              <span
                className="technology"
                style={{ border: `2px solid ${color}` }}
              >
                {technology}
              </span>
            );
          })}
        </div>
        <div className="project-buttons">
          <button className="project-btn">Source Code</button>
          <button className="project-btn">Live Demo</button>
        </div>
      </div>
      <div className="project-visualization">
        <img className="project-image" src={image} alt={projectName} />
      </div>
    </div>
  );
};
