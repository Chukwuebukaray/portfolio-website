import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import vector187 from "../assets/Vector 187.png";
import doodles_mixed_round from "../assets/doodles mixed round.png";
import group2346 from "../assets/Group 2346.png";
import group2347 from "../assets/Group 2347.png";
import download from "../assets/download.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <div className="home-left">
          <img src={vector187} className="vector" />
          <div className="home-writeup">
            <h1>
              Creative UI <span>Designer</span>
            </h1>
            <div className="buttons">
              <button className="hire-button">Hire Me</button>
              <button className="download-button">
                Download CV <img src={download} alt="Download" />
              </button>
            </div>
          </div>
        </div>
        <div className="home-right">
          <img src={doodles_mixed_round} className="doodles" />
          <img src={group2346} className="group" />
        </div>
      </div>
      <img src={group2347} className="downarrow" alt="Down Arrow" />
    </div>
  );
};

export default Home;
