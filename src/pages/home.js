import React from "react";

function Home() {
  return (
    <div className="main">
      <div className="mainContainer">
        <h3 className="header">About Me</h3>
        <img className="Ben" src={process.env.PUBLIC_URL + "/images/Ben Head Shot April2017 200x200.jpg"} width= "100" alt="BenArmstrong"/>
        <p className="paragraph">
        Professional with 8+ years in the Finance sector and founder of Simply Altruism. I have a strong passion for helping people acheive their dreams.
        </p>

        
        <p className="paragraph">
        <img className="Altruism" src={process.env.PUBLIC_URL + "/images/quote-the-root-of-happiness-is-altruism-the-wish-to-be-of-service-to-others-dalai-lama-93-24-00.jpg"} width= "400" alt="Altruism"/>
        </p>
       
        <p className="paragraph">
        
          Currently undertaking a six-month intensive Coding Bootcamp Course with University of Adelaide.
        </p>
      </div>
    </div>
  );
}

export default Home;