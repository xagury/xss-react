import React, { Component } from 'react'
import './index.scss'
import {Toast} from 'antd-mobile'
import { GroupCars } from "../../../../modules/group";

class DetailBox extends Component{
    constructor(props){
        super(props)
     
    }
    addCar(data){
      let {addCar} = this.props
      let goodInfo = {
        id: data.product_id,
        img:data.small_image,
        name:data.name,
        price:data.vipshop_price,
        preprice:data.market_price,
        num : 1
      }
      console.log(goodInfo)
      addCar(goodInfo,()=>{
         Toast.info('加入购物车成功')
      })
    }
    renderItem(){
      let {data} = this.props
      if(data){
        return(
          <div className="detail-box">
            
          <div className="price-box">
            {/* <!-- shopprice start --> */}
            <div className="shop">
              <div className="shopPrice">
                <p className="price-box">
                  <span>
                    ￥<i className="price">{data.vipshop_price}</i>
                  </span>
                </p>
                <p className="preprice">
                  <span>￥{data.market_price}</span>
                </p>
                <p className="discount">
                  <span>{data.vip_discount}</span>
                </p>
              </div>
              <div className="shopShare">
                <i />
              </div>
            </div>
            {/* <!-- shopprice end --> */}
            {/* shopName */}
            <div className="shopName">{data.name}</div>
            {/* shopBrand */}
            <div className="shopBrand">
              <img src={`${data.countryFlag}`} />
              <span>意大利品牌</span>
            </div>

            {/* <!-- shopAward start --> */}
            <div className="award">
              <div className="freight">
                <span className="tips">运费</span>
                <p>包税,满88元包邮</p>
              </div>
              <div className="vipB">
                <span className="tips">唯品币</span>
                <p>购买最多可获149个唯品币</p>
              </div>
            </div>
            {/* <!-- shopAward end --> */}

            {/* <!-- specification start --> */}
            <div className="specification">
              <p>规格</p>
              <p className="ml">
                6.5ml
                <i className="ter">√</i>
              </p>
            </div>
            {/* <!-- specification end --> */}

            {/* <!-- address start --> */}
            <div className="address">
              <p>配送至</p>
              <p className="selectAddress">请选择地址</p>
            </div>
            {/* <!-- address end --> */}
            {/* <!-- mark start --> */}
            <div className="mark">
              <ul>
                <li>
                  <img className="icon true" src="/img/true.png" />
                  唯品会发货
                </li>
                <li>
                  <img className="icon wan" src="/img/wan.png" />
                  不支持7天无理由退货
                </li>
              </ul>
              <i className="more" />
            </div>
            {/* <!-- mark end --> */}
            {/* <!-- Business start --> */}
            <div className="Business">
              <div className="shopBusiness">
                <div className="brandLogo">
                  <img
                    className="brandImg"
                    src={`${data.brandStoreLogo}`}
                  />
                </div>
                <div className="brandDesc">
                  <p className="bName">{data.brandShowName}</p>
                  <p className="bdetail">为容颜披上阿玛尼定制华裳</p>
                </div>
                <div className="brandCollect">收藏</div>
              </div>
            </div>
            {/* <!-- Business end --> */}
            {/* brand start*/}
            <div className="brandD">
              <img src="/img/1537255214633.jpg" />
              <div className="shopDetail-box">
                <h3>商品信息</h3>
                <p>鲜明如漆,持久水感亮泽</p>
                <table>
                  <tbody>
                    <tr>
                      <td>品牌名称:</td>
                      <td>{data.brandShowName}</td>
                    </tr>
                    <tr>
                      <td>商品名称:</td>
                      <td>{data.name}</td>
                    </tr>
                    <tr>
                      <td>产地:</td>
                      <td>法国</td>
                    </tr>
                    <tr>
                      <td>有效期:</td>
                      <td>5年</td>
                    </tr>
                    <tr>
                      <td>生产日期:</td>
                      <td>以收到实物为准</td>
                    </tr>
                    <tr>
                      <td>规格</td>
                      <td>6.5ml</td>
                    </tr>
                    <tr>
                      <td>特点描述:</td>
                      <td>轻盈润泽,吃桩长就,光泽渐变,浓郁饱满</td>
                    </tr>
                  </tbody>
                </table>

                <div className="sale">
                  <h4>售后说明</h4>
                  <p>售后与价格说明</p>
                </div>
              </div>

              <div className="shopImg-box">
                <h5> 商品图片</h5>
                <img src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/3/564448681543573264328.jpg" />
                <img src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/62/385802561543573264601.jpg" />
                <img src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/184/38872041543573264636.jpg" />
                <img src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/192/494354261543573264641.jpg" />
                <img src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/75/495343721543573264669.jpg" />
                <img src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/63/69534711543573264675.jpg" />
                <img src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/37/37479631543573264744.jpg" />
                <img src="https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/185/305002841543573264330.jpg" />
              </div>
            </div>
            {/* brand end */}
          </div>

          {/* <!-- footer start --> */}
          <footer>
            <div className="cartImg">
              <a href="/cart">
               <img src='/img/cartI.png' />
                <span className="count">{}</span>
              </a>
            </div>
            <a className="join add" onClick = {this.addCar.bind(this,data)}>加入购物车</a>
          </footer>
        </div>
        )
      }
    }
    render(){
      
        return (
            <div className='DetailBox-box'>
            {this.renderItem()}
            
            </div>
        )
    }
}

export default GroupCars(DetailBox)