# Ben-Armstrong-React-Portfolio
20 React: React Portfolio
## Our Task this Week

Our task this week was to build a portfolio using our new React skills. With the view it will help set us apart from other developers whose portfolios don’t use the latest technologies. We were to deploy this application to GitHub Pages. 

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```
## Grading Requirements
* Satisfies all of the preceding acceptance criteria plus the following:
    * Application must use React to render content.
    * Application has a single `Header` component that appears on multiple pages, with a `Navigation` component within it that’s used to conditionally render About Me, Portfolio, Contact, and Resume sections.
    * Application has a single `Project` component that’s used multiple times in the Portfolio section.
    * Application has a single `Footer` component that appears on multiple pages.
    * Application must be deployed to GitHub Pages.
* Application deployed at live URL.
* Application loads with no errors.
* Application GitHub URL submitted.
* GitHub repository contains application code.
* User experience is intuitive and easy to navigate.
* User interface style is clean and polished.
* Application uses a color scheme other than the default Bootstrap color palette.
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains high-quality README file with description, screenshot, and link to deployed application.

## Table of Content
* [Credits](#credits)
* [What-I-Learned](#what-i-learned)
* [Deployment](#deployment)
* [Installation](#installation)
* [Usage](#usage)
* [Made-With](#made-with)
* [License](#license)

# Credits
* Ben Armstrong https://github.com/BenArmstrong81 <br>

*With special thanks to The University of Adelaide Full Stack Web Development Class.*

# What-I-Learned
Building on the two thirds of the course and extending on from the last couple weeks using Node.js we learnt how to incororate React.js, and how to make a more responsive application. The modules in class included but not limited to; Event handling, forms, hooks, fetching data, render elements and styling.

# Deployment

[Click here for the deployed application](https://benarmstrong81.github.io/Ben-Armstrong-React-Portfolio/) <br/>
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
# Installation  
To install packages:
```
npm install
```
Next the application will build and bundle files:
```
npm run build
```
Lastly to launch the application:
```
npm run start
```
# Usage
Deployed Application - About Me:
![Deployed Application - About Me](./public/images/BenArmstrong_DeployedApp_AboutMePage.PNG)

Deployed Application - Portfolio Showcase Page:
![Deployed Application - Portfolio Showcase Page](./public/images/BenArmstrong_DeployedApp_PortfolioPage.PNG)

Deployed Application - Contact Page:
![Deployed Application - Contact Page](./public/images/BenArmstrong_DeployedApp_ContactMePage.PNG)

Deployed Application - Resume Page:
![Deployed Application - Resume Page](./public/images/BenArmstrong_DeployedApp_ResumePage.PNG)

# Made-With

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![NPM](https://img.shields.io/badge/npm-CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

# License

Please refer to the LICENSE in the repo. <br/>
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)