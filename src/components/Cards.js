import React, { Component } from "react";
import "../App.css";
export default class Cards extends Component {
  state = {};

  render() {
    return (
      <div class="grid-container">
        {this.props.data.map((d) => (
          <div class="grid-item">{d}</div>
        ))}
      </div>
    );
  }
}
