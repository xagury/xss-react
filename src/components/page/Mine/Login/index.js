import React, { Component } from "react";
import "./index.scss";
import { NavBar, List, Icon, InputItem, Button,Toast } from "antd-mobile";
import { NavLink } from "react-router-dom";
import {GroupUser} from '../../../../modules/group'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pwd : ''
    }
    this.loginByUser = this.loginByUser.bind(this)
  }
  loginByUser(){

    let { loginByUser , users } = this.props
    let username=this.name;
    let password=this.pwd;
    console.log(users)
    console.log(username,password);
    loginByUser(users,username,password, () => {
      Toast.info("登录成功");
      this.props.history.push("/mine/user");
    });
  }
  onUsernameChanged = (newUsername) => {
 
    this.name = newUsername;
  };
  onPasswordChanged = (newPassword) => {
  console.log(newPassword)
    this.pwd = newPassword;
    
  };
  render() {
    let {go} = this.props.history
    return (
      <div className="app-Login-box">
        {/* header  start*/}
        <header>
          <NavBar
            mode="dark"
            leftContent={[
              <a key="0" className="loginBack" href="/mine/register">
                <Icon type="left" size="lg" />
              </a>
            ]}
            onLeftClick = {()=>{
              go(-1)
             }}
            rightContent={[]}
          >
            密码登录
          </NavBar>
        </header>

        {/* hedare end */}

        {/* main start */}

        <main>
          <form>
            <div className="login">
              <List className="listInput">
                <InputItem
                  name="username"
                  className="tel"
                  type="text"
                  placeholder="请输入登录名"
                  onChange={name => this.onUsernameChanged(name)}
                >
                  登录名
                </InputItem>
                <InputItem
                  className="psd"
                  name="password"
                  type="password"
                  placeholder="请输入密码"
                  onChange={pwd => this.onPasswordChanged(pwd)}
                >
                  密&nbsp;&nbsp;&nbsp;码
                  {/* <a herf="#" className="verify">
                   <img/>
                  </a> */}
                </InputItem>
              </List>
            </div>

            <div className="submit-box">
              <Button className="loginBtn" onClick = {this.loginByUser.bind(this)}>登录</Button>
            </div>
          </form>
        </main>

        {/* main end */}

        {/* footer start */}

        <footer>
          <legend>或</legend>

          <NavLink
            to={{
              pathname: `/mine/register`
            }}
            className="psd"
          >
            注册
          </NavLink>
        </footer>

        {/* footer end */}
      </div>
    );
  }
}

export default GroupUser(Login);
