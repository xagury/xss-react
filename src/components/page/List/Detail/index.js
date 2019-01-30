import React, { Component } from "react";
import "./index.scss";
import Footer from '../../../common/Footer'
import { NavBar, Icon, Button } from "antd-mobile";
import { GroupList } from "../../../../modules/group";
import DetailBox from './DetailBox'
import Banner from "./Banner";

const qs = require("querystring");

class Detail extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let { getList } = this.props;
    getList()
    
  }

  renderItem() {
    let {data} = this.props;
   
    let { list } = this.props;

    let { search } = this.props.location;
    let urlObj = qs.parse(search.slice(1));
    if (list) {
      return list.map(item => {
        if (item.product_id == urlObj.id) {
          return (
            <div className='box'  key={item.product_id}>
              <DetailBox data={item}/>
            </div>        
          );
        }
      });
    }
  }
  render() {
    let { go } = this.props.history
    
    return (
      <div className="app-Detail-box">
        <header>
          <NavBar
            mode="dark"
            leftContent={[
              <a key="0" className="detailBack" >
                <Icon type="left" size="lg" />
              </a>
        
            ]}
            onLeftClick = {()=>{
             go(-1)
            }}
            rightContent={[
              <div key="0" className="rightIcon">
                <a href="" className="homeIcon">
                  <img src="/img/like.png" alt="" />
                </a>
                <a href="" className="homeIcon">
                  <img src="/img/zf.png" alt="" />
                </a>
              </div>
            ]}
          />
          <Banner />
        </header>
        <main>
        {this.renderItem()}
        </main>
            <Footer/>
      </div>
    );
  }
}

export default GroupList(Detail);
