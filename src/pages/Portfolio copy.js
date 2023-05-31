import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
  
      <div className="image">
      <a href="https://benarmstrong81.github.io/Worldy-Music-at-Your-Fingertips/"> 
      <img className="Project1" src={process.env.PUBLIC_URL + "/images/Freetify-deployed-image-working450x221.PNG"} width= "585" alt="Project1"/></a>

      <a href="https://github.com/BenArmstrong81/MetroMadness"> 
      <img className="Project2" src={process.env.PUBLIC_URL + "/images/MetroMadness_Screen2_ShowingWork_450x223.png"} width= "580" alt="Project2"/></a>

      <a href="https://github.com/BenArmstrong81/Ben-Armstrong-Model-View-Controller-MVC-Tech-Blog">
      <img className="MVC-TechBlog" src={process.env.PUBLIC_URL + "/images/Ben-Armstrong-Model-View-Controller-MVC-Tech-Blog_SignUpScreen.png"} width= "575" alt="MVCTechBlog"/></a>

      <a href="https://github.com/BenArmstrong81/Ben-Armstrong-NoSQL-Social-Network-API">
      <img className="NoSQL-Social-Network" src={process.env.PUBLIC_URL + "/images/NoSQLSocialNetworkAPI.png"} width= "530" alt="NoSQLSocialNetwork"/></a>

      <a href="https://benarmstrong81.github.io/Ben-Armstrong-Web-APIs-Code-Quiz/">
      <img className="CodingQuiz-API" src={process.env.PUBLIC_URL + "/images/BenArmstrong-Web-API-Challenge-HomeScreen.png"} width= "580" alt="CodingQuiz-API"/></a>

      <a href="https://github.com/BenArmstrong81/Tradies-Anytime-Anywhere">
      <img className="tradies" src={process.env.PUBLIC_URL + "/images/TradiesAnytimeAnywhere_DeployedApp.png"} width= "580" alt="CodingQuiz-API"/></a>
      </div>
    </div>
  );
}

export default Portfolio;