import React, { useState } from "react";

import "./ContactForm.scss";

export const ContactForm = () => {
  const [name, setName] = useState(null);
  const [mail, setMail] = useState(null);
  const [message, setMessage] = useState(null);

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
          type="text"
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
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};
