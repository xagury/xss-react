import React, { Component } from "react";
import { NavBar } from "antd-mobile";
import "./index.scss";
import { GroupUser } from "../../../modules/group";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state={ }
  }
  renderItem(){
    let {username} = this.props
    if(username){
      return(
        <a className="abtn login" href="/mine/user">
                <img
                  src="/img/user.png"
                  alt=""
                  className="userImg"
                />
              </a>
      )
    }else{
      return(
        <a key="0" className="abtn login" href="/mine/login">
        <span className="loginSpan">登录</span>
      </a>
      )
    }
  }
  render() {
    return (
      <div className="app-Header-box">
        <NavBar
          mode="dark"
          leftContent={[
            <div key = '0'>
            {this.renderItem()}
            </div>
           
               
          ]}
          rightContent={[
            <a key="0" className="abtn category" href="/category/classify">
              <img src="/img/category.png" />
            </a>
          ]}
        >
          <div className="search">
            <a href="/search">
              <span>大家正在搜索:年货爆款 </span>
            </a>
          </div>
        </NavBar>
      </div>
    );
  }
}

export default GroupUser(Header);
