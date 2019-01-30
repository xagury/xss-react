import React, { Component } from "react";
import "./index.scss";
import {NavLink} from 'react-router-dom'
class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state={ }
  }
  render() {
    const arrCount = [
      {
        id: 1,
        price: 299,
        yoriginalPrice: 310,
        imgsrc: "amn(2).jpg"
      },
      {
        id: 2,
        price: 299,
        yoriginalPrice: 310,
        imgsrc: "amn(3).jpg"
      },
      {
        id: 3,
        price: 299,
        yoriginalPrice: 310,
        imgsrc: "amn(4).jpg"
      },
      {
        id: 4,
        price: 299,
        yoriginalPrice: 310,
        imgsrc: "amn(5).jpg"
      }
    ];
    return (
      <div className="app-Countdown-box">
        <div className="count">
          <span>16点场</span>
          <span>|</span>
          <span>还剩</span>
          <div className="countDown">
            <span className="day">11</span> :<span className="day">22</span> :
            <span className="day">33</span>
          </div>
        </div>
        <div className="countShop">
          <ul>
            {arrCount.map(function(count) {
              return (
                <NavLink
                to={{
                  pathname: `/list/shopNav`,
                 
                }}
                key={count.id}
                >
                <li key={count.id}>
                  <img src={`/img/${count.imgsrc}`} />
                  <span className="kqj">快抢价</span>
                  <span className="price">￥{count.price}</span>
                  <span className="yprice">￥{count.yoriginalPrice}</span>
                </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Countdown;
