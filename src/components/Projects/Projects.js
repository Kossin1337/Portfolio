import React, { useState } from "react";

import "./Projects.scss";

import { ProjectMenu } from "./ProjectMenu";
import { projectData } from "../FeaturedWork/featuredWorkData";
import { Project } from "../FeaturedWork/Project";

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
