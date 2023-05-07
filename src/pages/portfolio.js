import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
  
      <div className="image">
      <img className="tracker" src={process.env.PUBLIC_URL + "/images/Freetify-deployed-image-working450x221.png"} width= "400" alt="Project1"/>
      <img className="generator" src={process.env.PUBLIC_URL + "/images/MetroMadness_Screen2_ShowingWork_450x223.png"} width= "400" alt="Project2"/>
      <img className="member" src={process.env.PUBLIC_URL + "/images/My-Team-Member.png"} width= "400" alt="My-Team-Member"/>
      <img className="note" src={process.env.PUBLIC_URL + "/images/Note-Title.png"} width= "400" alt="Note-Title"/>
      <img className="readme" src={process.env.PUBLIC_URL + "/images/Professional-Readme-Generator.png"} width= "400" alt="Professional-Readme-Generator"/>
      </div>
    </div>
  );
}

export default Portfolio;