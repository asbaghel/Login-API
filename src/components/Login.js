import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import HomePg from "./HomePg";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    valid: false
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const post = {
      email: this.state.username,
      password: this.state.password
    };

    console.log("this is  post ", post);
    console.log("this is  JSON post ", JSON.stringify(post));

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.token);
        if (data.token == "QpwL5tke4Pnpja7X4") {
          this.setState({ valid: true });
        }
      });
  };

  render() {
    if (this.state.valid === true) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="bgcolor">
        <div className="Register">
<Link to="/register" style={{ backgroundColor: "white"   }} >
         New?  Register Here.
        </Link>
</div>


        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="Username"
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
            value="submit"
            className="btn"
            style={{ width:"204.8px", flex: "1", padding: "10px", color: "red" }}
          ></input>
        </form>

      
        
      </div>
    );
  }
}
