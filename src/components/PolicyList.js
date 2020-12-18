import React, { Component } from "react";

export default class EmployeeList extends Component {
  state = {
    policyList: [],
    newemp: { name: "a" },
  };
  componentDidMount() {
    console.log("Employee List Cdm", this.props);
    const Query = `SELECT * from policy;`;
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
        this.setState({ policyList: data.res.rows });
      });
  }
  addEmployee = () => {
    console.log(this.state.newemp);
    const newemp = this.state.newemp;
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
          {this.state.policyList.map((policy) => {
            return (
              <div>
              <div> Policy ID:{policy.policy_id}</div>
                <div> Name: {policy.name}</div>
                <div>Claim Limit:{policy.claim_limit}</div>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
