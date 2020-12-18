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
  componentDidMount() {
    console.log("Employee List Cdm",this.props);
    const Query = `SELECT name,address,grade,contact,ssn from employee where corporate_id='${this.props.corp_id}';`;
    let post = { query: Query };
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
        this.setState({ employeeList: data.res.rows });
      });
  }
  addEmployee = () => {
    console.log(this.state.newemp);
const newemp=this.state.newemp;
    this.setState({
      ...this.state,
      employeeList: [...this.state.employeeList, this.state.newemp],
    });

    // Api call for adding employee in database
    const Query = `insert into employee values('${newemp.ssn}', '${newemp.name}', '${newemp.address}', '9267382742', 'B', 'F', '${this.props.corp_id}', '${newemp.policy_id}');`;
    let post = { query: Query };
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
        console.log(data);
        // this.setState({ employeeList: data.res.rows });
      });
  };
  deleteEmployee = (ssn) => {
    this.setState({
      employeeList: [
        ...this.state.employeeList.filter((employee) => employee.ssn !== ssn),
      ],
    });

    // Api call for deleting  employee in database
    const Query = `DELETE FROM employee WHERE ssn='${ssn}';`;
    let post = { query: Query };
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
        // this.setState({ employeeList: data.res.rows });
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
                <div>SSN: {employee.ssn}</div>
                <div>Address: {employee.address}</div>
                <div>Contact: {employee.contact}</div>
                <button onClick={()=>this.deleteEmployee(employee.ssn)} style={bntStyle}>
            X
          </button>
                <hr></hr>
              </div>
            );
          })}
        </div>
        <div>
          <label>Employee Name:</label>
          <br></br>
          <input type="text" name="name" onChange={this.onChange}></input>
          <br></br>
          <label>SSN:</label>

          <br></br>
          <input type="text" name="ssn" onChange={this.onChange}></input>
          <br></br>
          <label>Policy</label>
          <br></br>
          <input type="text" name="policy_id" onChange={this.onChange}></input>
          <br></br>
          <label>Address</label>
          <br></br>
          <input type="text" name="address" onChange={this.onChange}></input>
          <br></br>
          <button onClick={this.addEmployee}> Add Employee</button>
          <br></br>
        </div>
      </div>
    );
  }
}


const bntStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  float: "right",
  marginTop: "-20px"
};