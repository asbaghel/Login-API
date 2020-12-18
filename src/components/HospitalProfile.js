import React, { Component } from "react";

export default class EmployeeList extends Component {
  state = {
   hospitalList: [
      {
        name: "Abhishek Singh Baghel",
        id: "10",
        email: "abhisheksbaghel99@gmail.com",
      },
      {
        name: "Murtaza Ali",
        id: "11",
        email: "murtaza.ali@gmail.com",
      },
      {
        name: "Chirayu Mehta",
        id: "12",
        email: "chirayu.mehta@gmail.com",
      },
    ],
    newemp: { name: "a" },
  };
  componentDidMount()
  {
    console.log("Employee List Cdm")
    const Query=`SELECT * from hospital;`;
    let post={query:Query}
    fetch("http://localhost:3001/api/master", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.res.rows);
      this.setState({hospitalList:data.res.rows}) });


  }
  addEmployee = () => {
    console.log(this.state.newemp);

    this.setState({
      ...this.state,
      employeeList: [...this.state.employeeList, this.state.newemp],
    });
  };
  onChange = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      newemp: { ...this.state.newemp, [e.target.name]: e.target.value },
    });
  };
  render() {
    return (
      <div>
        <div className="empList">
          {this.state.hospitalList.map((hospital) => {
            return (
              <div>
                <h4>Name: {hospital.name}</h4>
                <div>Address: {hospital.address}</div>
                <div>Contact: {hospital.contact}</div>
                <hr></hr>
              </div>
            );
          })}
        </div>
        
      </div>
    );
  }
}
