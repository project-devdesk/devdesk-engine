import React from "react";
import { Route } from "react-router-dom";
import { Home, CustomerInfo, NewTicket, Navigation } from "./components";
// import { Grid, Form, Input, TextArea, Select, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
// import NewTicket from "./components/CustomerInfo";

//  unused Imports
// import './App.css';
// import './index.css';

function App() {
  return (
    <div className='App'>
      <h1>ECP Computers</h1>
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route path='/newticket' component={NewTicket} />
      <Route path='/customerinfo' component={CustomerInfo} />
      {/* <Route path='/' component={} />
      <Route path='/' component={} />
      <Route path='/' component={} />
      <Route path='/' component={} />
      <Route path='/' component={} />
      <Route path='/' component={} /> */}
    </div>
  );
}

export default App;
