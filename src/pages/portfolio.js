import React from "react";
import Freetify from "../assets/Freetify-deployed-image-working450x221.PNG";
import MetroMadness from "../assets/MetroMadness_Screen2_ShowingWork_450x223.png";
import TechBlog from "../assets/Ben-Armstrong-Model-View-Controller-MVC-Tech-Blog_SignUpScreen451x228.png";
import NoSQL from "../assets/NoSQLSocialNetworkAPI.PNG";
import CodeQuiz from "../assets/BenArmstrong-Web-API-Challenge-HomeScreen.png";
import Tradies from "../assets/TradiesAnytimeAnywhere_DeployedApp.PNG";

function Portfolio() {
  return (
    <div className="portfolio">
  
      <div className="image">
      <a href="https://benarmstrong81.github.io/Worldy-Music-at-Your-Fingertips/" target="_blank" rel="noreferrer"> 
      <img className="Project1" src={Freetify} width= "585" alt="Project1"/></a>

      <a href="https://github.com/BenArmstrong81/MetroMadness" target="_blank" rel="noreferrer"> 
      <img className="Project2" src={MetroMadness} width= "580" alt="Project2"/></a>

      <a href="https://github.com/BenArmstrong81/Ben-Armstrong-Model-View-Controller-MVC-Tech-Blog" target="_blank" rel="noreferrer">
      <img className="MVC-TechBlog" src={TechBlog} width= "575" alt="MVCTechBlog"/></a>

      <a href="https://github.com/BenArmstrong81/Ben-Armstrong-NoSQL-Social-Network-API" target="_blank" rel="noreferrer">
      <img className="NoSQL-Social-Network" src={NoSQL} width= "530" alt="NoSQLSocialNetwork"/></a>

      <a href="https://benarmstrong81.github.io/Ben-Armstrong-Web-APIs-Code-Quiz/" target="_blank" rel="noreferrer">
      <img className="CodingQuiz-API" src={CodeQuiz} width= "580" alt="CodingQuiz-API"/></a>

      {/* <a href="https://github.com/BenArmstrong81/Tradies-Anytime-Anywhere"> */}
      <a href="https://intense-fjord-33779.herokuapp.com/" target="_blank" rel="noreferrer">
      <img className="tradies" src={Tradies} width= "580" alt="CodingQuiz-API"/></a>
      </div>
    </div>
  );
}

export default Portfolio;