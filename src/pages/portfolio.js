import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
  
      <div className="image">
      <img className="tracker" src={process.env.PUBLIC_URL + "/images/Employee.png"} width= "400" alt="Employee-Tracker"/>
      <img className="generator" src={process.env.PUBLIC_URL + "/images/JavaScript-Password-Generator.jpg"} width= "400" alt="JavaScript-Password-Generator"/>
      <img className="member" src={process.env.PUBLIC_URL + "/images/My-Team-Member.png"} width= "400" alt="My-Team-Member"/>
      <img className="note" src={process.env.PUBLIC_URL + "/images/Note-Title.png"} width= "400" alt="Note-Title"/>
      <img className="readme" src={process.env.PUBLIC_URL + "/images/Professional-Readme-Generator.png"} width= "400" alt="Professional-Readme-Generator"/>
      </div>
    </div>
  );
}

export default Portfolio;