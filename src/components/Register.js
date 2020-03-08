import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import "../App.css";

export default class Register extends Component {
  state = {
      fullname:"",
      email:"",
      Mobileno:"",
      gender:"",
      pass:"",
      repass:""
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {};
  render() {
    return (
      <div className="bgcolor">
          <Link to="/" style={{ backgroundColor: "white"   }} >
         Go Back to Login Page
        </Link>
        <form onSubmit={this.onSubmit}>
          <label style={{color:'white'}}>Full Name</label>
          <br></br>
          <input  name="fullname" type="text" onChange={this.onChange}></input>
          <br></br>
          <label style={{color:'white'}}>Email</label>
          <br></br>
          <input name="email" type="email" onChange={this.onChange}></input>
          <br></br>
          <label style={{color:'white'}}>Mobile Number</label>
          <br></br>
          <input name="Mobileno" type="Number" onChange={this.onChange}></input>
          <br></br>
          <label style={{color:'white'}}>Gender</label>
          <br></br>
          <input name="gender" type="text" onChange={this.onChange}></input>

          <br></br>
          <label style={{color:'white'}} >Password</label>
          <br></br>
          
                    <input name="pass" type="password" onChange={this.onChange}></input>
                    <br></br>
          <label style={{color:'white'}}>Re-enter Password</label>
          <br></br>
          <input name="repass" type="password" onChange={this.onChange}></input>
          <br></br>
          <input type="submit" ></input>
        </form>
      
      </div>
    );
  }
}
