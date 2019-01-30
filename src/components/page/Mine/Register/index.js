import React, { Component } from "react";
import "./index.scss";
import { List, Icon, InputItem, Toast } from "antd-mobile";
import { NavLink } from "react-router-dom";
import { GroupUser } from "../../../../modules/group";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pwd: ""
    };
    this.addUser = this.addUser.bind(this);
  }
  addUser() {
    let { addUser } = this.props;

    let userInfo = {
      username: this.name,
      password: this.pwd
    };
    console.log(userInfo);
    addUser(userInfo, () => {
      Toast.info("注册成功");
      this.props.history.push("/mine/login");
    });
  }
  onUsernameChanged = newUsername => {
    this.name = newUsername;
  };
  onPasswordChanged = newPassword => {
    this.pwd = newPassword;
  };
  render() {
    const { name, pws } = this.state;
    return (
      <div className="app-Register-box">
        {/* banner start */}
        <div id="banner">
          <a href="/home/index" className="editA">
            <Icon className="edit" size="lg" type="cross" />
          </a>
          <img src="/img/loginLogo.png" className="logo" />
        </div>

        {/* banner end */}
        {/* main start */}

        <main>
          <form>
            <div className="inputBox">
              <List className="listInput">
                <InputItem
                  name="name"
                  className="tel"
                  type="text"
                  placeholder="请输入账户名"
                  onChange={name => this.onUsernameChanged(name)}
                >
                  账户
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
                    获取验证码
                  </a> */}
                </InputItem>
              </List>
            </div>
            <div className="registerBtn">
              <div className="submit-box">
                <div className="submit-btn" onClick={this.addUser.bind(this)}>
                  注册
                </div>
                <div className="protocol">
                  <span className="agreen" />

                  <div className="tk">
                    <span>同意</span>
                    <a href="https://viva.vip.com/act/m/service_provision_20161116?wapid=vivac_503">
                      《唯品会服务条款》、
                    </a>
                    <a href="https://viva.vip.com/act/m/user_protection_policy_20160809?wapid=vivac_385">
                      《隐私条款》、
                    </a>
                    <a href="https://move.vpal.com/member/terms.html">
                      《唯品支付用户服务协议》、
                    </a>
                    <a href="https://grcredit.vip.com/h5/protocol">
                      《唯品信用服务协议》
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>

        {/* main end */}

        {/* footer start */}

        <footer>
          <legend>或</legend>

          <NavLink
            to={{
              pathname: `/mine/login`
            }}
            className="psd"
          >
            密码登录
          </NavLink>
        </footer>

        {/* footer end */}
      </div>
    );
  }
}

export default GroupUser(Register);
