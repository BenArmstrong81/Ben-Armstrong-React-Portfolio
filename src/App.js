import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Portfolio" element={ <Portfolio/> } />
        <Route path="/Contact" element={ <Contact/> } />
        <Route path="/Resume" element={ <Resume/> } />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;