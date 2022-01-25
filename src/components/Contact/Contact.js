import React from "react";

import "./Contact.scss";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
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
                <i class="fas fa-envelope"></i>
                <span>piotrswobodzinski@gmail.com</span>
              </div>
              <div className="info-card">
                <i class="fas fa-phone-square-alt"></i>
                <span>+48 666 506 932</span>
              </div>
              <div className="info-card">
                <i class="fas fa-compass"></i>
                <span>Cracow, Poland</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
