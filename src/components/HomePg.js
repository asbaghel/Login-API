import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";
export default class HomePg extends Component {
  state = {
    logout: false
  };

  onClick = () => {
    this.setState({ logout: true });
  };
  render() {
    if (this.state.logout) {
      return <Redirect to="/"></Redirect>;
    }
    return (
      <div className="bgcolor">
        <h1 style={{color:"white"}}>This is Home Page</h1>
        <button onClick={this.onClick}>Logout</button>
      </div>
    );
  }
}
