import React, { Component } from "react";
import "./index.scss";
import Banner from "./Banner";
import CategoryHome from "./CategoryHome";
import Countdown from "./Countdown";
import Main from "./Main";
class HomeIndex extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const brandSaleImg = [
      {
        id: "1",
        imgSrc: "15472022645520"
      },
      {
        id: "2",
        imgSrc: "15472029569223"
      },
      {
        id: "3",
        imgSrc: "15472029569223"
      }
    ];
    return (
      <div className="app-HomeIndex-box">
        <Banner />

        <CategoryHome />

        {/* Brand sale start */}
        <div className="brandSale-box">
          <div className="topImg">
            <img src="/img/bala.jpg" alt="" />
          </div>
          <div className="contentImg">
            {brandSaleImg.map(function(brand) {
              return (
                <img key={brand.id} src={`/img/${brand.imgSrc}.jpg`} alt="" />
              );
            })}
          </div>
        </div>
        {/* Brand sale end */}

        <Countdown />

        {/* crazy start */}
        <div className="crazy-box">
          <div className="contentCrazy">
            <div className="leftCrazy">
              <img src={`/img/1.png`} alt="" />
              <span className="dicountCrazy">3折封顶</span>
            </div>
            <div className="centerCrazy">
              <img src={`/img/2.png`} alt="" />
              <span className="dicountCrazy">3折封顶</span>
            </div>
            <div className="rightCrazy">
              <img src={`/img/3.png`} alt="" />
              <span className="dicountCrazy">3折封顶</span>
            </div>
          </div>
        </div>
        {/* crazy end */}

        <Main />
      </div>
    );
  }
}

export default HomeIndex;
