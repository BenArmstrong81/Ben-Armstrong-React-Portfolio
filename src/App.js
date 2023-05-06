import Navbar from "./components/navbar";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import Resume from "./pages/resume";
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" component={ Home } />
        <Route path="/portfolio" component={ Portfolio } />
        <Route path="/contact" component={ Contact } />
        <Route path="/resume" component={ Resume } />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;