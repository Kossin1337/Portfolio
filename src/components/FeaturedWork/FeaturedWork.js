import React from "react";
import { Link } from "react-router-dom";
import { featuredWorkData } from "./featuredWorkData";

import "./FeaturedWork.css";

export const FeaturedWork = () => {
  return (
    <div className="fw-wrapper">
      <div className="fw">
        <div className="fw-header">
          <h2 className="fw-title">Featured work</h2>
        </div>
        <div className="fw-content">
          {featuredWorkData.map((fw) => {
            console.log(fw);
            return (
              <div className="project" key={fw.index}>
                <div className="project-info">
                  <h2 className="project-title">{fw.projectName}</h2>
                  <p className="project-description">{fw.description}</p>
                </div>
                <div className="project-visualization">
                  <img
                    className="project-image"
                    src={fw.image}
                    alt={fw.projectName}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
