// Imports
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    // Main Title
    <div id="Full">
      <header id="main-title">Portfolio</header>
      <div id="nav-bar">
        {/* links to every page */}
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/About" className="nav-link">
          About Me
        </Link>
        <Link to="/MyProjects" className="nav-link">
          My Projects
        </Link>
        <Link to="/Resume" className="nav-link">
          Resume
        </Link>
        <Link to="/ContactForm" className="nav-link">
          Contact Info
        </Link>
      </div>
      {/* giving the url routes to each page */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/MyProjects" component={MyProjects} />
        <Route path="/Resume" component={Resume} />
        <Route path="/ContactForm" component={ContactForm} />
      </Switch>
    </div>
  );
}

export default App;
