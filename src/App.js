import React, { Component } from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Result from "./components/Result";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/result" component={Result}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
