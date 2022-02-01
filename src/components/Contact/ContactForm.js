import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import "./ContactForm.scss";
import { validate } from "./formValidation";
import { RenderAlert } from "./ContactAlert";

export const ContactForm = ({ status, setStatus }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "success") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      mail: mail,
      message: message,
    };

    setStatus("success");
    console.log(`Status in handleSubmit: ${status}`);

    if (validate(templateParams)) {
      emailjs
        .send(
          "Portfolio_7DEU9LLAR4XXG",
          "Template_7DEU9LLAR4XXG",
          templateParams,
          "user_eTDy2iqN5ADgVMGP2DdA3"
        )
        .then(
          (response) => {
            setStatus("success");

            setName("");
            setMail("");
            setMessage("");
          },
          (error) => {
            setStatus("fail");
          }
        );
    }
  };

  return (
    <form action="" className="contact-form">
      {status && <RenderAlert status={status} setStatus={setStatus} />}
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
