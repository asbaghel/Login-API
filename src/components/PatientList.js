import React, { Component } from "react";

export default class EmployeeList extends Component {
  state = {
    patientList: [
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
   
    const Query=`select c.ssn, claim_amount from claims c, visits v where '${this.props.hosp_id}' = v.hos_id and c.ssn = v.ssn and claim_date = visitation_date;`;
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
      this.setState({patientList:data.res.rows}) });


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
          {this.state.patientList.map((patient) => {
            return (
              <div>
                {/* <h4>Name: {patient.name}</h4> */}
                <div>SSN: {patient.ssn}</div>
                <div>Claim Amount: {patient.claim_amount}</div>
                <hr></hr>
              </div>
            );
          })}
        </div>
        <div>
          <label>Patient Name:</label>
          <input type="text" name="name" onChange={this.onChange}></input>

          <label>Patient's Employee ID:</label>
          <input type="text" name="id" onChange={this.onChange}></input>

          <label>Email</label>
          <input type="text" name="email" onChange={this.onChange}></input>
          <button onClick={this.addEmployee}> Add Patient</button>
        </div>
      </div>
    );
  }
}
