import React, { Component } from 'react'
import './index.scss'
import { NavBar, Icon } from "antd-mobile";
class UserNav extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='app-userNav-box'>
            <nav>
            <div className="order">
              <a className="pay">
                <p>
                  <span className="iconbg">
                    <img src='/img/card.png'/>
                  </span>
                </p>
                <p>
                  <span>待付款</span>
                </p>
              </a>
              <a className="Receiving">
                <p>
                  <span className="iconbg">
                  <img src='/img/shop.png'/>
                  </span>
                </p>
                <p>
                  <span>待收货</span>
                </p>
              </a>
              <a className="allOrder">
                <p>
                  <span className="iconbg">
                  <img src='/img/order.png'/>
                  </span>
                </p>
                <p>
                  <span>全部订单</span>
                </p>
              </a>
            </div>
          </nav>
          
          </div>
        )
    }
}

export default UserNav