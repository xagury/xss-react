import React, { Component } from "react";
import "./index.scss";
import { NavBar, Icon } from "antd-mobile";
import { Route,NavLink } from "react-router-dom";
import { GroupList } from "../../../../modules/group";
class ShopNav extends Component {
  constructor(props) {
    super(props);
    
  }
  componentWillMount() {
    let { getList } = this.props;
    getList();
  }
  renderItem() {
    let { list } = this.props;
    if (list) {
      return list.map(item => {
        return (
          <li key={item.product_id}>
            <NavLink
              to={{
                pathname: `/list/detail/`,
                search: `id=${item.product_id}`,
              }}
              className="imgA"
            >
              <div className="img-box">
                <img src={`${item.small_image}`} />
              </div>
            </NavLink>

            <div className="price-box">
              <span className="price">
                <b>￥</b>
                {item.sale_price}
              </span>
              <span className="prePrice">￥{item.market_price}</span>
              <span className="discount">{item.discount}</span>
            </div>
            <div className="name-box">
              {item.brandStoreName}&nbsp;|&nbsp;{item.name}
            </div>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div className="app-List-box">
        {/* header start */}
        <header>
          <NavBar
            mode="dark"
            leftContent={[
              <a key="0" className="searchBack" href="/home/index">
                <Icon type="left" size="lg" />
              </a>
            ]}
            rightContent={[
              <a key="0" href="/home" className="homeIcon">
                <img src="/img/home.png" alt="" />
              </a>
            ]}
          >
            <div className="search">
              <a href="#">
                <span>阿玛尼唇釉 </span>
              </a>
            </div>
          </NavBar>
        </header>

        {/* header end */}
        <ul>{this.renderItem()}</ul>
      </div>
    );
  }
}

export default GroupList(ShopNav);
