import React, { Component } from 'react'

export default class PolicyDetails extends Component {
    state={
        policy_id:"",
        policyDetails:[],

    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {

      e.preventDefault();
      console.log(this.state.policy_id)
      const Query=`SELECT * from policy  where policy_id='${this.state.policy_id}';`;
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
        this.setState({policyDetails:data.res.rows}) });
    }
    render() {

        if(this.state.policyDetails[0])
        {
            console.log(this.state.policyDetails)
            return(
                <div className="empList">
                <div> Policy ID:{this.state.policyDetails[0].policy_id}</div>
                <div> Name: {this.state.policyDetails[0].name}</div>
                <div>Claim Limit:{this.state.policyDetails[0].claim_limit}</div>
              </div>
            )
        }
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                 <input
            type="text"
            name="policy_id"
            value={this.state.policy_id}
            onChange={this.onChange}
            placeholder="Policy ID"
            style={{ flex: "10", padding: "10px", color: "red" }}
          ></input>
          <input
            type="submit"
            value="Get Details"
            className="login-button"
           
          ></input>
          </form>
         
            </div>
        )
    }
}
