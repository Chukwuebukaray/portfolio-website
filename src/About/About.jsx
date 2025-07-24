import React from "react";
import "./About.css";
import doodle_items from "../assets/doodle items.png";
import group62 from "../assets/Group 62.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h1>
          About <span>me</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis... <span>Read more</span>
        </p>
      </div>
      <div className="about-right">
        <img src={doodle_items} className="doodles" />
        <img src={group62} className="group" />
      </div>
    </div>
  );
};

export default About;
