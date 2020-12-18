import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../App.css";
import Cards from "./Cards";
import HospitalList from "./HospitalList";
import EmployeeProfile from "./EmployeeProfile";
import PolicyDetails from "./PolicyDetails";

export default class HomePg extends Component {
  state = {
    logout: false,
    dashboard: [
      "Total no of employees:",
      "Active Claims:",
      "Pending Claims",
      "Next Renewal date",
    ],
    policies: ["Policy no 1", "Policy no 2", "Policy no 3 "],
  };

  onClick = () => {
    this.setState({ logout: true });
  };
  render() {
    if (this.state.logout) {
      return <Redirect to="/"></Redirect>;
    }
    return (
      <div className="bgcolor">
        <h1 class="header">Corporate Health Insurance Provider</h1>

        <button onClick={this.onClick} className="logout-btn">
          Logout
        </button>
        <div className="acc-type">EMPLOYEE</div>

        <Tabs>
          <TabList>
            
           
            <Tab>🏥Hospital List</Tab>
            <Tab>💡Help</Tab>
            <Tab>😀Profile</Tab>
            <Tab> Get Policy details</Tab>
          </TabList>

          
         
          <TabPanel>
          <HospitalList  emp_id={this.props.phoneno}></HospitalList>
          </TabPanel>
          <TabPanel>
            <div>For any query mail us on help@chip.com</div>
          </TabPanel>
          <TabPanel>
           <EmployeeProfile emp_id={this.props.phoneno}></EmployeeProfile>
          </TabPanel>
          <TabPanel>
           <PolicyDetails emp_id={this.props.phoneno}></PolicyDetails>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
