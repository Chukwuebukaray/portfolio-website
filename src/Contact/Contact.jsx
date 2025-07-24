import React from "react";
import "./Contact.css";
import group2372 from "../assets/Group 2372.png";
import vector186 from "../assets/Vector 186.png";
import send from "../assets/send.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <h1>
          Got a project in <span>mind?</span>
        </h1>
        <div className="contactimages">
          <img src={vector186} className="vector-image" />
          <img src={group2372} className="group-image" />
        </div>
      </div>
      <div className="contact-right">
        <form>
          <div className="input-fields">
            <div className="input-field">
              <label>Your Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-field">
              <label>Your Email</label>
              <input type="email" placeholder="Email" />
            </div>
          </div>
          <textarea placeholder="Message"></textarea>
          <button type="submit">
            Send Message <img src={send} alt="Send" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
