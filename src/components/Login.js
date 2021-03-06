import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import HomePg from "./HomePg";
import HospitalHome from "./HospitalHome"
import Profile from "./Profile";

export default class Login extends Component {
  state = {
    phoneno: "",
    password: "",
    login: false,
    userType:"",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();

    const post = {
      phoneno: this.state.phoneno,
      password: this.state.password,
    };

    console.log("this is  post ", post);
    console.log("this is  JSON post ", JSON.stringify(post));

    fetch("http://localhost:4000/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data && data.token) {
          this.props.savePhoneno(this.state.phoneno)
          this.setState({ ...this.state,login: true });
        }
        if(data && data.userType)
        {
          
          this.setState({userType:data.userType})
        }
      });
  };

  render() {
    if (this.state.login === true && this.state.userType=="HR") {
      console.log(this.state.userType)
      return <Redirect to="/home" />;
     
    }
    if (this.state.login === true && this.state.userType=="Hospital") {
      console.log(this.state.userType)
      return <Redirect to="/hospitalHome" />;
    }
    if (this.state.login === true && this.state.userType=="Employee") {
      console.log(this.state.userType)
      return <Redirect to="/employeeHome" />;
    }

    return (
      <div className="bgcolor">
        <div className="Register">
          <Link to="/register">New? Register Here.</Link>
        </div>

        <h1 className="header">Corporate Health Insurance Provider</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="phoneno"
            value={this.state.phoneno}
            onChange={this.onChange}
            placeholder="User ID"
            style={{ flex: "10", padding: "10px", color: "red" }}
          ></input>
          <br></br>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            style={{ flex: "10", padding: "10px", color: "red" }}
          ></input>
          <br></br>
          <input
            type="submit"
            value="Login"
            className="login-button"
           
          ></input>
        </form>
      </div>
    );
  }
}
