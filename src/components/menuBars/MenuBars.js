import React, { Component } from "react";
import CordinatePageMenuBar from "./CordinatePageMenuBar";
import MainMenuBar from "./MainMenuBar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class MenuBars extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="main" exact component={MainMenuBar} />
            <Route
              path="CordinatePage"
              exact
              component={CordinatePageMenuBar}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
