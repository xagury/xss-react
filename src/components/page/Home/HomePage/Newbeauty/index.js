import React, { Component } from "react";
import "./index.scss";
import { GroupHome } from "../../../../../modules/group";
import moment from 'moment'
const newyearImg = [
  {
    id: 1,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/80/15476232551034.jpg"
  },
  {
    id: 2,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/187/15476232794545.jpg"
  },
  {
    id: 3,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/93/15476234189591.jpg"
  },
  {
    id: 4,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/20/15476236129439.jpg"
  },
  {
    id: 5,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/104/15476235836140.jpg"
  },
  {
    id: 6,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/11/15476236284834.jpg"
  },
  {
    id: 7,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/07/167/15468546024968.jpg"
  }
];
const superImg = [
  {
    id: 1,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/07/82/15468546454216.jpg"
  },
  {
    id: 2,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/07/171/15468547273590.jpg"
  },
  {
    id: 3,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/07/21/15468548519338.jpg"
  }
];
class Newbeauty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    };
  }
  componentWillMount() {
    let { getNewbeauty } = this.props;
    getNewbeauty();
  }
  componentDidMount() {
    if (this.props.endTime) {
      let endTime = this.props.endTime;
      this.countFun(endTime);
    }
  }
  //组件卸载取消倒计时
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  countFun = time => {
    let end_time = new Date(time).getTime(),
      sys_second = end_time - new Date().getTime();
    this.timer = setInterval(() => {
      //防止倒计时出现负数
      if (sys_second > 1000) {
        sys_second -= 1000;
        let day = Math.floor(sys_second / 1000 / 3600 / 24);
        let hour = Math.floor((sys_second / 1000 / 3600) % 24);
        let minute = Math.floor((sys_second / 1000 / 60) % 60);
        let second = Math.floor((sys_second / 1000) % 60);
        this.setState({
          day: day,
          hour: hour < 10 ? "0" + hour : hour,
          minute: minute < 10 ? "0" + minute : minute,
          second: second < 10 ? "0" + second : second
        });
      } else {
        clearInterval(this.timer);
        //倒计时结束时触发父组件的方法
        //this.props.timeEnd();
      }
    }, 1000);
  };

  renderItem() {
    return newyearImg.map(ny => {
      return <img key={ny.id} src={`${ny.imgUrl}`} />;
    });
  }
  renderItem2() {
    return superImg.map(su => {
      return <img key={su.id} src={`${su.imgUrl}`} />;
    });
  }
  renderBanner() {
    let { newbeauty } = this.props;
    if (newbeauty) {
      return newbeauty.map((item,i) => {
        return (
          <div className="main" key={i}>
            <div className="img-box">
              <a href="#">
                <img src={`${item.mobile_image_one}`} />
              </a>
            </div>
            <div className="p-box">
          
              <p>
              <span className='p-span' dangerouslySetInnerHTML={{__html:`${item.agio}`}}></span>
              
                {item.brand_name}
              </p>
              <p className='pms'>{item.pms_activetips}</p>
              <div className="timer">
               剩1天
              </div>
            </div>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div className="app-Newbeauty-box">
        <div className="banner">
          <img src="https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/163/15476418429238.jpg" />
        </div>
        <div className="cutDown">
          <div className="countdown">
            <span className="time">{this.state.hour}</span>时
            <span className="time">{this.state.minute}</span>分
            <span className="time">{this.state.second}</span>秒
          </div>
        </div>
        <div className="newyearImg">
          {this.renderItem()}
          <div className="superImg">{this.renderItem2()}</div>
        </div>

        <main>
          <div className="buy">今日特卖·每天早10点 晚8点更新</div>

          <div className="shop-box">{this.renderBanner()}</div>
        </main>
      </div>
    );
  }
}
Newbeauty.defaultProps = {
  endTime: 100000000000000
};
export default GroupHome(Newbeauty);
