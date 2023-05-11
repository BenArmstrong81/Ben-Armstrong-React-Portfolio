import React from "react";

function Resume() {
  return (
    <div>
    <h4 className="resume-paragraph">Proficiency in both Front-End and Back-End:  </h4>
    <div>
    <ul className="skill">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Responsive Design</li>
    <li>API Intergration including Server Side and Third Party</li>
    <li>Node.js</li>
    <li>OOP - Object-Oriented Programming</li>
    <li>Express.js</li>
    <li>MYSQL</li>
    <li>ORM - Object-Relational Mapping</li>
    <li>MVC - Model-View-Controller</li>
    <li>Bootstrap</li>
    <li>React.js</li>
    <li>MYSQL</li>
    <li>Heroku</li>
    <li>Git</li>
    <li>MongoDB - NoSQL</li>
    <li>Mongoose</li>
    <li>MERN Stack</li>
    <li>PWA - Progressive Web Applications</li>
  </ul>
    </div>
    <div className="image2">
      <h3>Download a copy of my Curriculum Vitae here:</h3>
      <a href="/images/Ben_Armstrong_Curriculum_Vitae_with_References.pdf" Download="/images/Ben_Armstrong_Curriculum_Vitae_with_References.pdf">
      <img className="Resume" src={process.env.PUBLIC_URL + "/images/ResumeImageCropped.png"} width= "590" alt="Resume"/></a>
    </div>
    </div>
  );
}

export default Resume;