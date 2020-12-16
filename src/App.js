import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePg from "./components/HomePg";
import Register from "./components/Register";
import HospitalHome from "./components/HospitalHome";

export default class App extends Component {
  state = {
    phoneno: "",
  };

  savePhoneno = (phoneno) => {
    console.log("Inside savePhoneno",phoneno)
    this.setState({phoneno:phoneno});
  };
  render() {
    return (
      <div>
        <Router>
         
          <Route
            exact
            path="/"
            render={(props) => <Login savePhoneno={this.savePhoneno} />}
          ></Route>
         
          <Route
            exact
            path="/home"
            render={(props) => <HomePg phoneno={this.state.phoneno} />}
          ></Route>
          
          <Route
            exact
            path="/hospitalHome"
            render={(props) => <HospitalHome phoneno={this.state.phoneno} />}
          ></Route>
          <Route path="/register" component={Register}></Route>
        </Router>
      </div>
    );
  }
}
