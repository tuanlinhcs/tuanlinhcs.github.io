import React, { Component } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Pages from "./components/pages";

import * as pages from "blog/content/2021";

import ReactGA from "react-ga";
const TRACKING_ID = "G-BMDRVCLSTE"; // TRACKING_ID
ReactGA.initialize(TRACKING_ID);

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pages" component={Pages} />
            <Route
              exact
              path="/deploy-a-routed-react-app-to-github-pages"
              component={pages.page_20210610030900}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
