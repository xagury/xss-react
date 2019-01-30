import React, { Component } from "react";
import "./index.scss";
import { NavBar, Icon } from "antd-mobile";
class EmptyCart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app-EmptyCart-box">
        {/* header start */}
        <header>
          <NavBar
            mode="dark"
            leftContent={[
              <a  key="0" className="cartBack" href="/home/index">
                <Icon type="left" size="lg" />
              </a>
            ]}
            rightContent={[]}
          >
            购物车
          </NavBar>
        </header>

        {/* header end */}



        {/* main start */}


        <main>

            <div className='eCartBg'>
                <img src='/img/cartbg.png'/>
            </div>
            
            <div className='eCartImg'>
            
                <img src='/img/cart.png'/>
            </div>
            
            
                
            <div className='eCartBtn'>
            <h3>购物车空空如也</h3>
                <a href='/home'>
                去抢购
                </a>
            </div>
        </main>

        {/* main end */}
      </div>
    );
  }
}

export default EmptyCart;
