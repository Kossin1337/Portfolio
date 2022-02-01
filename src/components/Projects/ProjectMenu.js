import React from "react";

import "./ProjectMenu.scss";

const filterList = ["All", "React", "API", "SCSS", "TailwindCSS"];

export const ProjectMenu = ({ currentFilter, setCurrentFilter }) => {
  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter.target.innerText);
  };

  return (
    <ul className="project-menu">
      {filterList.map((filter) => {
        const filterState = filter === currentFilter ? "active" : "inactive";
        return (
          <li
            className={`menu-item ${filterState}`}
            onClick={changeFilter}
            key={filter}
          >
            {filter}
          </li>
        );
      })}
    </ul>
  );
};
