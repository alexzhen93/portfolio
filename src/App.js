import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About" exact component={About}/>
          <Route path="/Project" exact component={Project}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;