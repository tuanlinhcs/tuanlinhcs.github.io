import React, { Component } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";

import ReactGA from "react-ga";
const TRACKING_ID = "G-BMDRVCLSTE"; // TRACKING_ID
ReactGA.initialize(TRACKING_ID);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
