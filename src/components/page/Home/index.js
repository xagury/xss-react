import React, { Component } from "react";
import "./index.scss";
import Header from "../../common/Header";
import HomeIndex from "./HomeIndex";
import Search from "./Search";
import { Jiadian,Nbguojitop,Nbmuyingtop,Newbeauty,Jiaju,Lifemarket,Lux} from './HomePage'
import { GroupHome } from "../../../modules/group";
import { Route } from "react-router-dom";
import Tab from './Tab'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: []
    };
  }
  componentWillMount() {
    let { getTab } = this.props;
    getTab();
  }
  render() {
   
    let { tab } = this.props;
    return (
      <div className="app-Home-box">
        <div className="fixedHeader">
          <Header />

          <nav>
            <Tab data = {tab} />
          </nav>
        </div>
        <Route path="/" component={HomeIndex} exact />
        <Route path="/home/index" component={HomeIndex} exact/>
        
        <Route path="/home/newbeauty" component={Newbeauty} exact/>  
        <Route path="/home/nbmuyingtop" component={Nbmuyingtop} exact/> 
        <Route path="/home/nbguojitop" component={Nbguojitop} exact/> 
        <Route path="/home/jiadian" component={Jiadian} exact/>  
        <Route path="/home/Jiaju" component={Jiaju} exact/>  
        <Route path="/home/Lifemarket" component={Lifemarket} exact/>  
        <Route path="/home/Lux" component={Lux} exact/>    

        {/* cart start */}

        <div className="cart-box">
          <div className="cartIcon">
            <a href="/cart">
              <img src="/img/cartIcon.png" alt="" />
            </a>
          </div>
        </div>

        {/* cart end */}
      </div>
    );
  }
}

export default GroupHome(Home);
