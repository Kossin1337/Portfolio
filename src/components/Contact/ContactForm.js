import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "./ContactForm.scss";
import { validate } from "./formValidation";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  // emailjs.send("Portfolio_7DEU9LLAR4XXG","Portfolio_Contact");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      mail: mail,
      message: message,
    };

    const formValidationResult = validate(templateParams);

    if (formValidationResult) {
      emailjs
        .send(
          "Portfolio_7DEU9LLAR4XXG",
          "Template_7DEU9LLAR4XXG",
          templateParams,
          "user_eTDy2iqN5ADgVMGP2DdA3"
        )
        .then(
          (response) => {
            console.log("Success", response);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setName("");
      setMail("");
      setMessage("");
    }
  };

  return (
    <form action="" className="contact-form">
      <div className="input-container">
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="">E-mail</label>
        <input
          type="email"
          name="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="">Message</label>
        <textarea
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button className="submit-btn" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

const renderAlert = () => {
  return (
    <div className="alert-box">
      <span className="alert-text">Message was send.</span>
    </div>
  );
};
