import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../App.css";
import Cards from "./Cards";
import PatientList from "./PatientList";
import Profile from "./Profile";
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
        <div className="acc-type">HOSPITAL</div>

        <Tabs>
          <TabList>
            
           
            <Tab>🏥Patient</Tab>
            <Tab>💡Help</Tab>
            <Tab>😀Profile</Tab>
          </TabList>

          
         
          <TabPanel>
          <PatientList></PatientList>
          </TabPanel>
          <TabPanel>
            <div>For any query mail us on help@chip.com</div>
          </TabPanel>
          <TabPanel>
           <Profile phoneno={this.props.phoneno}></Profile>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
