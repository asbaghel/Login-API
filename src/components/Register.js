import React, { Component } from "react";
import axios from 'axios'
import {useHistory , Redirect, Link } from "react-router-dom";

import "../App.css";

export default class Register extends Component {
  state = {
      fullname:"",
      email:"",
      Mobileno:"",
      gender:"",
      pass:"",
      repass:"",
      login:false,
  };
  onChange = e => {
   e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })};

  onSubmit = (e) => {

    console.log("Inside onSubmit")
    e.preventDefault();
    const post = {
      phoneno: this.state.Mobileno,
      password :this.state.pass
    };
    fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {console.log(data)
      if(data)
      {

       this.setState({...this.state,login:true})
      }
      })
      .catch(err=>{console.log(err)})

     
    

  };
  render() {
    if (this.state.login) {
      return <Redirect to="/home"></Redirect>;
    }
    return (
      
      <div className="bgcolor">
          
          <Link to="/" >
         Go Back to Login Page
        </Link>
        <form onSubmit={this.onSubmit}>
          <label >Full Name</label>
          <br></br>
          <input  name="fullname" type="text" onChange={this.onChange}></input>
          <br></br>
          <label >Email</label>
          <br></br>
          <input name="email" type="email" onChange={this.onChange}></input>
          <br></br>
          <label >Mobile Number</label>
          <br></br>
          <input name="Mobileno" type="Number" onChange={this.onChange}></input>
          <br></br>
          <label >Gender</label>
          <br></br>
          <input name="gender" type="text" onChange={this.onChange}></input>

          <br></br>
          <label >Password</label>
          <br></br>
          
                    <input name="pass" type="password" onChange={this.onChange}></input>
                    <br></br>
          <label>Re-enter Password</label>
          <br></br>
          <input name="repass" type="password" onChange={this.onChange}></input>
          <br></br>
        <input type='submit' value='submit'></input>
        </form>
      
      </div>
    );
  }
}
