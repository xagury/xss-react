import React, { Component } from "react";
import "./index.scss";
import {  Icon } from "antd-mobile";
import ListNavs from "./ListNavs";
import ListContents from "./ListContents";
import { Route } from "react-router-dom";
import { GroupCategory } from "../../../../modules/group";

const qs = require("querystring");
class Classify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }
  componentWillMount() {
    let { getNavs } = this.props;
    getNavs();
    let { search } = this.props.location;
    let urlObj = qs.parse(search.slice(1));
    this.setState({
      id: urlObj.id,
    });
    
  }
  render() {
    let { nav } = this.props;
   
    return (
      <div className="app-Classify-box">
        {/* search start */}
        <div className="search-box">
          <a href="/search">
            <Icon
              type="search"
              size="sm"
              style={{
                marginRight: "10px",
                marginRight: "-119px",
                display: " block",
                float: "left",
                marginLeft: "101px",
                marginTop: "6px"
              }}
            />
            <span>搜索品牌或商品</span>
          </a>
        </div>

        {/* search end */}
        <main>
          <aside>
            <ListNavs data={nav} />
          </aside>
          <article>
            <Route path="/category/:id" component={ListContents} />
          </article>
        </main>
      </div>
    );
  }
}

export default GroupCategory(Classify);
