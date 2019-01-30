import React, { Component } from "react";
import "./index.scss";
import { GroupUser } from "../../../modules/group";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import User from './User'

class Mine extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app-Mine-box">
  
        <div className="login-box">
        </div>
        <Route path="/mine/user" component={User} />
        <Route path="/mine/register" component={Register} />
        <Route path="/mine/login" component={Login} />
        
      </div>
    );
  }
}

export default GroupUser(Mine);
