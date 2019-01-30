import React, { Component } from "react";
import "./index.scss";
import { NavBar, Icon, Toast, List, Stepper } from "antd-mobile";
import { GroupCars } from "../../../../modules/group";
import Total from './Total'
class ShopCart extends Component {
  constructor(props) {
    super(props);
    this.changeNum = this.changeNum.bind(this);
  }
  changeNum(goodInfo, val) {
  
    let { addCar,reduceCar } = this.props;
    if (val - goodInfo.num > 0) {
      let good = {
        id: goodInfo.id,
        img: goodInfo.img,
        name: goodInfo.name,
        price: goodInfo.price,
        preprice: goodInfo.preprice,
        num: 1
      };
      addCar(good, () => {
        Toast.info("success add");
      });
    } else {
      reduceCar(goodInfo.id,()=>{
        Toast.info('success reduce')
      })

    }
  }
  componentWillMount() {}
  renderItem() {
    let { data } = this.props;
    if (data) {
      return data.map(item => {
        return (
          <div className="cartView" key={item.id}>
            <div className="shop">
              <h3>精选特卖</h3>
              <ul>
                <li>
                  <div className="shopDetail">
                    <div className="shopImg">
                      <img src={`${item.img}`} />
                    </div>

                    <div className="shopDesc">
                      <div className="shopTitle">{item.name}</div>
                      <div className="shopx">
                        意大利Giorgio Armani大师级彩妆专场
                      </div>
                      <div className="shopMl">6.5ml</div>
                      <div className="seven">不支持七天无理由退货</div>
                      <div className="num">
                        <List>
                          <List.Item
                            wrap
                            extra={
                              <Stepper
                                style={{ width: "100%", minWidth: "100px" }}
                                showNumber
                               
                                value={item.num}
                                onChange={this.changeNum.bind(this, item)}
                              />
                            }
                          />
                        </List>
                      
                      </div>
                    </div>

                    <div className="shopMoney">
                      <div className="shopPrice">￥{item.price}</div>
                      <div className="prePrice">￥{item.preprice}</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="shopTotal">￥{item.num * item.price}</div>
            <div className="discount">
              使用礼券 <i>></i>{" "}
            </div>
            <Total/>
            
          </div>
        );
      });
    }
  }
  render() {
    // let { go } = this.props.history
    return (
      <div className="app-ShopCart-box">
        {/* header start */}
        <header>
          <NavBar
            mode="dark"
            leftContent={[
              <a key="0" className="cartBack" href="/home/index">
                <Icon type="left" size="lg" />
              </a>
            ]}
            onLeftClick={() => {
              // go(-1);
            }}
            rightContent={[]}
          >
            确认订单
          </NavBar>
        </header>

        {/* header end */}
        {/* main start */}
        <main>
          <div className="cartView">
            <div className="payD">您正在安全购物环境中,请放心购买</div>
            <div className="address">
              设置收货地址 <i>></i>{" "}
            </div>
          </div>
          {this.renderItem()}
        </main>

        {/* main end */}
      </div>
    );
  }
}

export default GroupCars(ShopCart);
