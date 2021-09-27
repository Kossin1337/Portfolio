import React from "react";
import "./Project.scss";

import { technologiesColors } from "./featuredWorkData";

export const Project = ({ data }) => {
  const {
    index,
    projectName,
    technologies,
    description,
    image,
    github,
    liveDemo,
  } = data;
  return (
    <div className="project" key={index}>
      <div className="info">
        <h2 className="title">{projectName}</h2>
        <p className="description">{description}</p>
        <h4 className="technologies-header">Technologies</h4>
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
        <div className="link-buttons">
          <button className="btn">Source Code</button>
          <button className="btn">Live Demo</button>
        </div>
      </div>
      <div className="visualization">
        <img className="project-image" src={image} alt={projectName} />
      </div>
    </div>
  );
};
