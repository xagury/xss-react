import React, { Component } from "react";
import "./index.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state={ }
  }
  render() {
    return (
      <div className="app-Footer-box">
        <div className="vipClient">
          <span className="vipLogo">唯品会</span>
          <p>唯品会客户端,特卖抢不停</p>
          <a className="vipDown" href="https://myvpal.vip.com/h5/paypass">
            下载
          </a>
        </div>
        <div className="vipHome">
          <a href="/home">唯品会首页</a>
          <a href="https://viva.vip.com/act/m/staic-page-about?wapid=vivac_314">
            关于我们
          </a>
          <a href="/Mine">个人中心</a>
        </div>
        <div className="copyRight">
          <p>
            Copyright © 2008-2017 m.vip.com, All Rights Reserved
            粤ICP备08114786号
          </p>
        </div>
        <div className="police">
          <i className="policeIcon" />
          <p>粤公网安备 44010302000068号</p>
        </div>
      </div>
    );
  }
}

export default Footer;
