import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.scss";

export const Navigation = () => {
  const [menu, setMenu] = useState("mobile-inactive");

  function toggleMenu() {
    menu === "mobile-active"
      ? setMenu("mobile-inactive")
      : setMenu("mobile-active");
  }

  return (
    <div className="nav-wrapper">
      <div className="nav">
        <div className="mobile-wrapper">
          <Link to="/">
            <h1 className="logo">Kossin</h1>
          </Link>
          <i className="fas fa-bars mobile-menu" onClick={toggleMenu}></i>
        </div>
        <ul className={`nav-menu ${menu}`}>
          <NavLink exact to="/">
            <li className="nav-item">Home</li>
          </NavLink>
          <NavLink to="/projects">
            <li className="nav-item">My work</li>
          </NavLink>
          <NavLink to="/about">
            <li className="nav-item">About</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="nav-item">Contact</li>
          </NavLink>
          <div className="nav-icons">
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </ul>
      </div>
    </div>
  );
};
