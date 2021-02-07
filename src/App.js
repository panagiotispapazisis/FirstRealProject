import React, { Component } from "react";
import Dashboard from "./pages/Dashboard/DashboarView";
import About from "./pages/About/AboutView";
import Contact from "./pages/Contact/ContactView";
import Projects from "./pages/Projects/Projects";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/contact" component={Contact} exact />
          <Route path="/about" component={About} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/" component={Dashboard} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
