import React, { useState } from "react";
import "./Projects.scss";

import { projectData } from "../FeaturedWork/featuredWorkData";
import { ProjectMenu } from "./ProjectMenu.jsx";
import { Project } from "../FeaturedWork/Project.jsx";

export const Projects = () => {
  const [currentFilter, setCurrentFilter] = useState("All");

  return (
    <div className="projects-wrapper">
      <div className="projects">
        <ProjectMenu
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
        {projectData.map((data) => {
          if (
            data.technologies.includes(currentFilter) ||
            currentFilter === "All"
          ) {
            return <Project data={data} key={data.index} />;
          }
        })}
      </div>
    </div>
  );
};
