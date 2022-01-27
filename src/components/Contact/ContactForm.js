import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import "./ContactForm.scss";
import { validate } from "./formValidation";
import { RenderAlert } from "./ContactAlert";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    // renderAlert("submit rendered");
    e.preventDefault();

    const templateParams = {
      name: name,
      mail: mail,
      message: message,
    };

    setStatus("success");

    if (validate(templateParams)) {
      // emailjs
      //   .send(
      //     "Portfolio_7DEU9LLAR4XXG",
      //     "Template_7DEU9LLAR4XXG",
      //     templateParams,
      //     "user_eTDy2iqN5ADgVMGP2DdA3"
      //   )
      //   .then(
      //     (response) => {
      //       setStatus('success');
      //     },
      //     (error) => {
      //       setStatus('fail');
      //     }
      //   );

      setName("");
      setMail("");
      setMessage("");
    }
  };

  useEffect(() => {
    if (status === "success") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  return (
    <form action="" className="contact-form">
      {/* {status && renderAlert(setStatus, status)} */}
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

// const renderAlert = (setStatus, status) => {
//   console.log("RENDERING AN ALERT");
//   return (
//     <div className="alert-box">
//       <span className={`alert-text ${status}`}>Message was send.</span>
//       <i class="fas fa-times" onClick={setStatus("")}></i>
//     </div>
//   );
// };
