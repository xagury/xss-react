import React, { Component } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import Footer from "../../../common/Footer";
import UserNav from './UserNav'
import { GroupUser } from "../../../../modules/group";
import UserList from "./UserList";
class User extends Component {
  constructor(props) {
    super(props);
  }
  renderItem(){
    let { username } = this.props
    if(username){
      return(
        <div className="phone">{username.username}</div>
      )
    }else{
      return(
        <div className="phone">软软</div>
      )
    }
  }
  render() {
   
    return (
      <div className="app-User-box">
        {/* header start */}
        <div className="my-box-top">
          <NavBar
            mode="light"
            leftContent={[
              <a className="backIcon" key="0" href="/">
                <Icon type="left" />
              </a>
            ]}
            rightContent={[
              <a key="0" href="/home/index" className="homeIcon">
                <img src="/img/home.png" alt="" />
              </a>
            ]}
          />
          {/* header end */}
          {/* <!-- user photo start --> */}
          <div className="user-photo">
            <div className="userphoto">
              <img className="/img/ruan.png" />
            </div>
            <div className="vip">
              <img className="/img/v.png" />
              <span>铁牌会员</span>
            </div>
          
           
            {this.renderItem()}
           
          </div>

          {/* <!-- user photp end --> */}
        </div>
        
          {/* nav start */}
          <UserNav/>
          

          {/* nav end */}
          <UserList/>
        <Footer />
      </div>
    );
  }
}

export default GroupUser(User);
