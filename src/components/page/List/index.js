import React, { Component } from "react";
import "./index.scss";
import ShopNav from './ShopNav'
import Detail from './Detail'
import { GroupList } from "../../../modules/group";
import { Route } from "react-router-dom";
class List extends Component {
  constructor(props) {
    super(props);
    
  }
  componentWillMount() {
    let { getList } = this.props;
    getList();
  }
  render() {
    return (
      <div className="app-List-box">    
      <Route path="/list/shopNav" component={ShopNav} />
      <Route path="/list/detail" component={Detail} />
      </div>
    );
  }
}

export default GroupList(List);
