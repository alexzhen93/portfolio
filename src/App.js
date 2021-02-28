import Navbar from "./components/Navbar";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Footer from "./components/Footer";
import PageNavegationListener from "./components/PageNavegationListener";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div>
      <Router>
        <PageNavegationListener />
        <Navbar />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={400} classNames="fade">
                <Switch location={location}>
                  <Route path="/" exact component={Home} />
                  <Route path="/About" exact component={About} />
                  <Route path="/Project" exact component={Project} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
