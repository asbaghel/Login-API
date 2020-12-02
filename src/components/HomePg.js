import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../App.css";
export default class HomePg extends Component {
  state = {
    logout: false
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
      <Tab>Dashboard</Tab>
    
      <Tab>Employee List</Tab>
      <Tab>Policies</Tab>
      <Tab>Claims</Tab>
      <Tab>Help</Tab>
      <Tab>Profile</Tab>
    </TabList>
 
    <TabPanel>
    <h1>Content 1</h1>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
     
      </div>
    );
  }
}
