import React, { Component } from 'react'
import './index.scss'
import { GroupCars } from "../../../../modules/group";
class Total extends Component{
    constructor(props){
        super(props)
        this.state = {
          totalNum : 0,
          totalPrice: 0
        }
    }
    total(){
      let { cars } = this.props
      if(cars.length){
        this.state.totalNum = 0
        this.state.totalPrice = 0
        cars.map(item => {
          this.state.totalNum += item.num
          this.state.totalPrice += (item.num*item.price)
        })
        this.setState({})
      }
    }
    componentWillMount(){
      this.total()
    }
    componentWillReceiveProps(){
      this.total()
    }
    render(){
        return (
            <div className="total">
               <div className="total">
            
            <p className="order">
              订单金额
              <span className="alltotal">￥{this.state.totalPrice}</span>
            </p>
            <p className="hx">
              商品金额:
              <span className="alltotal1">￥{this.state.totalPrice}</span>
            </p>
          </div>
          <div className="shopBtn">
            <p className="hx1">
              还需支付:
              <span className="alltotal1">￥{this.state.totalPrice}</span>
            </p>
            <a href="#" className="pay">
              货到付款
            </a>
            <a href="#" className="nowpay">
              在线支付
            </a>
          </div> 


            </div>
        )
    }
}

export default GroupCars(Total)