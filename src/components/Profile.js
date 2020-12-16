import React, { Component } from "react";

export default class Profile extends Component {

 state={user:{}}
  componentDidMount() {

    console.log("componentDidMount");
    console.log(this.props)
    const post={phoneno:this.props.phoneno}

    fetch("http://localhost:4000/getUser", {
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
      this.setState({user:data.user}) });
  }
  render() {
    if(this.state.user)
    {
      return(
        <div>
                  <h4>Name: {this.state.user.name}</h4>
                  <div>Phone Number: {this.state.user.phoneno}</div>
                  <div>Email: {this.state.user.email}</div>
                  <hr></hr>
                </div>
      )
    }

    return(
      <div>Profile</div>
    )
   
    
  }
}
