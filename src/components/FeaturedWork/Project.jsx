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
          {technologies.map((technology, index) => {
            const color = technologiesColors[technology];
            return (
              <span
                className="technology"
                // style={{ backgroundColor: `${color}` }}
                style={{
                  borderBottom: `3px solid ${color}`,
                  "&:hover": { color: `${color}` },
                }}
                key={index}
              >
                {technology}
              </span>
            );
          })}
        </div>
        <div className="link-buttons">
          <a href={github} target="_blank" rel="noreferrer" className="link">
            <button className="btn">Source Code</button>
          </a>
          <a href={liveDemo} target="_blank" rel="noreferrer" className="link">
            <button className="btn">Live Demo</button>
          </a>
        </div>
      </div>
      <a
        className="visualization"
        href={liveDemo}
        target="_blank"
        rel="noreferrer"
      >
        <img className="project-image" src={image} alt={projectName} />
      </a>
    </div>
  );
};
