import React, { Component } from "react";
import "./index.scss";
import Swiper from "swiper";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state={ }
  }
  componentWillReceiveProps(){
    setTimeout(() => {
        new Swiper('.swiper-container',{
            autoplay: true,
            loop: true,
        })
    })
}
  render() {
    const data = [
        {id:"1",value: "/img/banner-home.jpg"},
        {id:"2",value: "/img/15472182560449.jpg"},
        {id:"3",value: "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/17/148/15476946643430.jpg"},
      ]
    return (
      <div className="app-banner-box">
        <div className="swiper-container">
          <div className="swiper-wrapper">
          {
              data.map(function(data){
                  return(
                    <div className="swiper-slide"key={data.id}>
                        <img src={`${data.value}`}/>
                    </div>
                  );
              })
          }
           
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
