import React, { Component } from "react";

export default class EmployeeList extends Component {
  state = {
   employeeProfile: [
      {
        name: "Abhishek Singh Baghel",
        id: "10",
        email: "abhisheksbaghel99@gmail.com",
      },
      
    ],
   
  };
  componentDidMount()
  {
    console.log("Employee Profile")
    const Query=`SELECT * from employee where ssn='${this.props.emp_id}';`;
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
      this.setState({employeeProfile:data.res.rows}) });


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
          {this.state.employeeProfile.map((employee) => {
            return (
              <div>
                <h4>Name: {employee.name}</h4>
                <div>Address: {employee.address}</div>
                <div>Contact: {employee.contact}</div>
                <hr></hr>
              </div>
            );
          })}
        </div>
        
      </div>
    );
  }
}
