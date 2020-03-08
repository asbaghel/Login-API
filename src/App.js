import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePg from "./components/HomePg";
import Register from "./components/Register";

export default class App extends Component {
  render() {
    return (
      <div>
       
        <Router>
          <Route exact  path="/" component={Login}></Route>
          <Route path="/home" component={HomePg}></Route>
          <Route path="/register" component={Register}></Route>
        </Router>
      </div>
    );
  }
}
