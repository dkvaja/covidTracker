import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMsg("");
    alert("Data sent Succesfully!");
  };

  return (
    <div className="contact-div flex-center footer-fix">
      <div className="contact-box">
        <h1 className="contact-heading">Contact us</h1>
        <form onSubmit={handleSubmit} className="flex-column-center">
          <div className="form-items flex-column-center">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter Your Name Here"
            />
          </div>
          <div className="form-items flex-column-center">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Your Email Here"
            />
          </div>
          <div className="form-items flex-column-center">
            <textarea
              rows="8"
              cols="20"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
              placeholder="Enter Your Message"
            />
          </div>
          <button className="contact-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
      <div className="contact-icon-box flex-center">
        <i class="fas fa-people-arrows"></i>
      </div>
    </div>
  );
};

export default Contact;
