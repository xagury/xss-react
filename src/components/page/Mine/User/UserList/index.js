import React, { Component } from "react";
import "./index.scss";
import { GroupUser } from "../../../../../modules/group";
import {withRouter} from "react-router-dom";
import { List,Toast } from "antd-mobile";
const Item = List.Item;
const arr = [
  {
    id: 1,
    title: "我的收藏",
    src: "#/collect"
  },
  {
    id: 2,
    title: "购物车历史",
    src: "#/carthistory"
  },
  {
    id: 3,
    title: "浏览历史",
    src: "#/browsinghistory"
  },
  {
    id: 4,
    title: "申请售后",
    src: "#/sale"
  },
  {
    id: 5,
    title: "零钱",
    src: "#/money"
  },
  {
    id: 6,
    title: "唯品花",
    src: "#/flower"
  },
  {
    id: 7,
    title: "优惠券",
    src: "#/coupon"
  },
  {
    id: 8,
    title: "我的唯品币",
    src: "#/vipcoin"
  },
  {
    id: 9,
    title: "收货地址",
    src: "#/address"
  },
  {
    id: 10,
    title: "修改登录密码",
    src: "#/loginpsd"
  },
  {
    id: 11,
    title: "管理支付密码",
    src: "#/paypsd"
  },
  {
    id: 12,
    title: "绑定手机",
    src: "#/phone"
  },
  {
    id: 13,
    title: "实名认证",
    src: "#/realname"
  },
  {
    id: 14,
    title: "我的银行卡",
    src: "#/bankcard"
  }
];
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.exitUser = this.exitUser.bind(this);
  }
  exitUser(){
    let { exitUser} = this.props
    exitUser()
    this.props.history.push("/home/index");
  }
  renderItem() {
    return arr.map(item => {
      return (
        <Item key={item.id} arrow="horizontal" onClick={() => {}}>
          {item.title}
        </Item>
      );
    });
  }
  renderFooter(){
return(
  <div onClick={this.exitUser.bind(this)}>退出登录</div>
  
)
  }
  render() {
    return (
      <div className="app-UserList-box">
        <List className="my-list"
        renderFooter={() => <div>{this.renderFooter()}</div>} 
        >{this.renderItem()}
        
       
        </List>
      </div>
    );
  }
}

export default withRouter(GroupUser(UserList));
