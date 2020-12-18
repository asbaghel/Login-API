import React, { Component } from "react";

export default class Claims extends Component {
  state = {
    claimList: [
      {
        name: "Emp1",
        emp_id: "e7890",
        claim_id: "6789",
        claim_amt: "1000",
        email: "mail.gmail.com",
      },
    ],
    activeClaimList: [
      {
        name: "Emp1",
        emp_id: "e7890",
        claim_id: "6789",
        claim_amt: "1000",
        email: "mail.gmail.com",
      },
    ],
  };

  componentDidMount() {
    // All claim of corporate emp
console.log("tHSI IS CORP",this.props.corp_id)
    const Query1 = `select c.ssn,e.name, c.policy_id, c.claim_date,claim_amount, status from claims c, employee e where e.corporate_id = '${this.props.corp_id}' and e.ssn = c.ssn;`;
    let post = { query: Query1 };
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
        this.setState({ claimList: data.res.rows });
      });

    // Active claims of corp emp

    const Query2 = `select c.ssn, e.name ,c.policy_id, c.claim_date, claim_amount from claims c, employee e where e.corporate_id = '${this.props.corp_id}' and e.ssn = c.ssn and status = 'active';`;
    post = { query: Query2 };
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
        this.setState({ activeClaimList: data.res.rows });
      });
  }
  render() {
    return (
      <div>
        <h1>All Claims</h1>
        <div className="empList">
          {this.state.claimList.map((claim) => {
            return (
              <div>
                <h4>Name: {claim.name}</h4>
                <div>Emp ID: {claim.ssn}</div>
                <div>Claim Date: {claim.claim_date}</div>
                <div>Claim Amount: Rs. {claim.claim_amount}</div>
                <hr></hr>
              </div>
            );
          })}
        </div>
        <h1>Active Claims</h1>
        <div className="empList">
          {this.state.activeClaimList.map((claim) => {
            return (
              <div>
                <h4>Name: {claim.name}</h4>
                <div>Emp ID: {claim.ssn}</div>
                <div>Claim Date: {claim.claim_date}</div>
                <div>Claim Amount: Rs. {claim.claim_amount}</div>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
