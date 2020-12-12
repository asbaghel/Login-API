import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../App.css";
import Cards from "./Cards";
import EmployeeList from "./EmployeeList";
export default class HomePg extends Component {
  state = {
    logout: false,
    dashboard:["Total no of employees:","Active Claims:","Pending Claims","Next Renewal date"],
    policies:["Policy no 1","Policy no 2","Policy no 3 "]
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
      
         <button onClick={this.onClick} className="logout-btn">Logout</button>
         <div className="acc-type">CORPORATE</div>
       
        <Tabs>
    <TabList>
      <Tab>🧾Dashboard</Tab>
      <Tab>👨‍💼Employee List</Tab>
      <Tab>📒Policies</Tab>
      <Tab>🏥Claims</Tab>
      <Tab>💡Help</Tab>
      <Tab>😀Profile</Tab>
    </TabList>
 
    <TabPanel>
   
    <Cards number="10" data={this.state.dashboard}></Cards>
    </TabPanel>
    <TabPanel>
   <EmployeeList></EmployeeList>
    </TabPanel>
    <TabPanel>
    <Cards number="10" data={this.state.policies}></Cards>
    </TabPanel>
    <TabPanel>
      <h2>No Claims</h2>
    </TabPanel>
    <TabPanel>
      
     <div>For any query mail us on help@chip.com</div>
    </TabPanel>
    <TabPanel>
      {/* Profile */}
      <h2></h2>
    </TabPanel>
  </Tabs>
     
      </div>
    );
  }
}
