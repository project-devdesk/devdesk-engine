import React from "react";
import { BrowserRouter as Switch, Link } from "react-router-dom";
// removing Router, Switch, Route from import BrowserRouter, may need to re-add it later after build.

const Navigation = () => {
  return (
    <div>
      <div className='App'>
        {/* <h1>ECP Computers</h1> */}
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/newticket'>New Ticket</Link>
        </div>
        <div>
          <Link to='/customerinfo'>Customer Info</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
