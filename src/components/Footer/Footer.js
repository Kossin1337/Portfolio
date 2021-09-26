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
          <p>Copyright © 2021 Kossin</p>
        </div>
        <div className="footer-icons footer-item">
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};
