import React from "react";
import { Link } from "react-router-dom";

import "./FeaturedWork.css";

export const FeaturedWork = () => {
  return (
    <div className="fw-wrapper">
      <div className="fw">
        <div className="fw-header">
          <h2 className="fw-title">Featured work</h2>
          <Link to="/projects">
            <p className="fw-see-work">See all my work...</p>
          </Link>
        </div>
        <div className="fw-content"></div>
      </div>
    </div>
  );
};
