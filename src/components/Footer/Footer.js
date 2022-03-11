import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-item">
          <p>Designed and Developed by Piotr Swobodziński</p>
        </div>
        <div className="footer-item">
          <p>Copyright © 2022 Kossin</p>
        </div>
        <div className="footer-icons footer-item">
          <a
            href="https://github.com/kossin1337"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kossin1337/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
