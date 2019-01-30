import React, { Component } from "react";
import "./index.scss";
import { NavBar, Icon } from "antd-mobile";
import Classify from "./Classify";
import Brands from './Brands'
import { Route } from "react-router-dom";
import { GroupCategory } from "../../../modules/group";
import { NavLink } from "react-router-dom";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
   
    return (
      <div className="app-Category-box">
      <header>

    
        {/* header start */}
        <NavBar
          mode="light"
          leftContent={[
            <a className='backIcon' key="0" href='/'>
            <Icon type="left" />
            </a>
          ]}
          rightContent={[
            <a key="0" href="/home/index" className="homeIcon">
              <img src="/img/home.png" alt="" />
            </a>
          ]}
        >
          <div className="tab-box">
            <NavLink
              to={{
                pathname: `/category/classify`
              }}
              className="classify"
              activeClassName='active'
            >
              分类
            </NavLink>
            <NavLink
              to={{
                pathname: `/category/brands`
              }}
              className="brands"
            >
              品牌
            </NavLink>
          </div>
        </NavBar>
        </header>
        {/* header end */}

      

        {/* main start */}
        {/* <Route path = '/category'  component={Classify}/> */}
        <Route path = '/category/classify'  component={Classify}/>
        <Route path = '/category/brands'  component={Brands}/>      
       
        {/* main end */}
      </div>
    );
  }
}

export default GroupCategory(Category);
