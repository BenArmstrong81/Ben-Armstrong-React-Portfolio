import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
  
      <div className="image">
      <img className="tracker" src={process.env.PUBLIC_URL + "/images/Freetify-deployed-image-working450x221.png"} width= "400" alt="Project1"/>
      <img className="generator" src={process.env.PUBLIC_URL + "/images/MetroMadness_Screen2_ShowingWork_450x223.png"} width= "400" alt="Project2"/>
      <img className="member" src={process.env.PUBLIC_URL + "/images/Ben-Armstrong-Model-View-Controller-MVC-Tech-Blog_SignUpScreen.png"} width= "400" alt="MVC-TechBlog"/>
      <img className="note" src={process.env.PUBLIC_URL + "/images/AllThoughtsScreenShot.png"} width= "400" alt="NoSQL-Social-Network"/>
      <img className="readme" src={process.env.PUBLIC_URL + "/images/BenArmstrong-Web-API-Challenge-HomeScreen.png"} width= "400" alt="CodingQuiz-API"/>
      </div>
    </div>
  );
}

export default Portfolio;