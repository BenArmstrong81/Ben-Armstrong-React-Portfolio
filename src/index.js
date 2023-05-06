import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/portfolio.css";
import "./styles/footer.css"
import "./styles/contact.css";
import "./styles/portfolio.css";
import "./styles/resume.css"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();