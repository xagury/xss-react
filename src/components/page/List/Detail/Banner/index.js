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
        {id:"1",value: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/151/578767031543573264210_720x909_70.jpg"},
        {id:"2",value: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/178/47067741543573264415_720x909_70.jpg"},
        {id:"3",value: "https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/113/599850151543573264432_720x909_70.jpg"},
        {id:"4",value:"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/37/253399291543573264568_720x909_70.jpg"},
        {id:"5",value:"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/38/506151641543573264368_720x909_70.jpg"},
        {id:"6",value:"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/11/30/17/458682231543573264390_720x909_70.jpg"}
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
