import React from "react";
import "./Projects.css";
import project1 from "../assets/Course Website Landing Page Thumbnail 1.png"
import project2 from "../assets/Group 33.png"
import project3 from "../assets/Group 1.png"

const Projects = () => {
  return (
    <div className="projects">
      <h1>
        My recent <span>works</span>
      </h1>
      <ul className="category">
        <li className="all">All</li>
        <li>UI</li>
        <li>UX</li>
        <li>Web Design</li>
      </ul>
      <div className="projects-list">
        <div className="project-item"><img src={project1} /></div>
        <div className="project-item"><img src={project2} /></div>
        <div className="project-item"><img src={project3} /></div>
      </div>
    </div>
  );
};

export default Projects;
