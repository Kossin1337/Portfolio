import React from "react";
import { projectData } from "./featuredWorkData";
import { Project } from "./Project.jsx";

import "./FeaturedWork.scss";

export const FeaturedWork = () => {
  return (
    <div className="fw-wrapper">
      <div className="fw">
        <div className="fw-header">
          <h2 className="section-title">Featured projects</h2>
        </div>
        <div className="fw-content">
          {projectData.map((fw, index) => {
            if (fw.featured) {
              return <Project data={fw} key={index} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};
