import React from "react";
import { projectData } from "./featuredWorkData";
import { Project } from "./Project";

import "./FeaturedWork.scss";

export const FeaturedWork = () => {
  return (
    <div className="fw-wrapper">
      <div className="fw">
        <div className="fw-header">
          <h2 className="section-title">Featured projects</h2>
        </div>
        <div className="fw-content">
          {projectData.map((fw) => {
            if (fw.featured) {
              return <Project data={fw} key={fw.index} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};
