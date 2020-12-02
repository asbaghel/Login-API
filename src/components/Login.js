import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import HomePg from "./HomePg";

export default class Login extends Component {
  state = {
    phoneno: "",
    password: "",
    login: false,

  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const post = {
      phoneno: this.state.phoneno,
      password: this.state.password
    };

    console.log("this is  post ", post);
    console.log("this is  JSON post ", JSON.stringify(post));

    fetch("http://localhost:4000/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data && data.token) {
          this.setState({ login: true });
        }
      });
  };

  render() {
    if (this.state.login === true) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="bgcolor">
        <div className="Register">
<Link to="/register" >
         New?  Register Here.
        </Link>
</div>

<h1 className="header">Corporate Health Insurance Provider</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="number"
            name="phoneno"
            value={this.state.phoneno}
            onChange={this.onChange}
            placeholder="Phone No."
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
            className="btn btn-primary"
           
            style={{ width:"204.8px", flex: "1", padding: "10px", color: "black" }}
          ></input>
        </form>

      
        
      </div>
    );
  }
}
