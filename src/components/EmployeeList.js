import React, { Component } from "react";

export default class EmployeeList extends Component {
  state = {
    employeeList: [
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
          {this.state.employeeList.map((employee) => {
            return (
              <div>
                <h4>Name: {employee.name}</h4>
                <div>ID: {employee.id}</div>
                <div>Email: {employee.email}</div>
                <hr></hr>
              </div>
            );
          })}
        </div>
        <div>
          <label>Employee Name:</label>
          <input type="text" name="name" onChange={this.onChange}></input>

          <label>Employee ID:</label>
          <input type="text" name="id" onChange={this.onChange}></input>

          <label>Email</label>
          <input type="text" name="email" onChange={this.onChange}></input>
          <button onClick={this.addEmployee}> Add Employee</button>
        </div>
      </div>
    );
  }
}
