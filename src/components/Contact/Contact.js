import React, { useState } from "react";

import "./Contact.scss";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const [status, setStatus] = useState("");

  return (
    <div className="contact-wrapper">
      <div className="contact">
        <div className="contact-header">
          <h3 className="sub-title">Let's get in touch</h3>
          <h2 className="title">Contact Me</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-container">
              <div className="info-card">
                <i className="fas fa-envelope"></i>
                <span>piotrswobodzinski@gmail.com</span>
              </div>
              <div className="info-card">
                <i className="fas fa-phone-square-alt"></i>
                <span>+48 666 506 932</span>
              </div>
              <div className="info-card">
                <i className="fas fa-compass"></i>
                <span>Cracow, Poland</span>
              </div>
            </div>
          </div>
          <ContactForm status={status} setStatus={setStatus} />
        </div>
      </div>
    </div>
  );
};
