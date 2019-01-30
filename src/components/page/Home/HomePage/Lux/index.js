import React, { Component } from "react";
import "./index.scss";
import { GroupHome } from "../../../../../modules/group";
const newyearImg = [
  {
    id: 1,
    imgUrl:
      "/img/15476236749108.jpg"
  },
  {
    id: 2,
    imgUrl:
      "/img/15476237039805.jpg"
  },
  {
    id: 3,
    imgUrl:
      "/img/15476237223758.jpg"
  },
  {
    id: 4,
    imgUrl:
      "/img/15476237487069.jpg"
  },
  {
    id: 5,
    imgUrl:
      "/img/15476237704629.jpg"
  },
  {
    id: 6,
    imgUrl:
      "/img/15476237996063.jpg"
  },
  {
    id: 7,
    imgUrl:
      "/img/15476238385357.jpg"
  },
  {
    id: 8,
    imgUrl:
      "/img/15476238723793.jpg"
  }
];
const superImg = [
  {
    id: 1,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/46/15476241469805.jpg"
  },
  {
    id: 2,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/5/15476270285157.gif"
  },
  {
    id: 3,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/33/15476242496067.jpg"
  },
  {
    id: 4,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/86/15476243453698.jpg"
  }
];

const superImg2 = [
  {
    id: 1,
    imgUrl:
      "/img/15476251806100.jpg"
  },
  {
    id: 2,
    imgUrl:
      "/img/15476253656169.jpg"
  },
  {
    id: 3,
    imgUrl:
      "/img/15476274012883.jpg"
  },
  {
    id: 4,
    imgUrl:
      "/img/15476274143558.jpg"
  },
  {
    id: 5,
    imgUrl:
      "/img/15476274257111.jpg"
  },
  {
    id: 6,
    imgUrl:
      "/img/15476274369346.jpg"
  }
];

class Lux extends Component {
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
    let { getLux } = this.props;
    getLux();
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
  renderItem3() {
    return superImg2.map(su => {
      return <img key={su.id} src={`${su.imgUrl}`} />;
    });
  }
  renderBanner() {
    let { lux } = this.props;
    if (lux) {
      return lux.map((item,i) => {
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
      <div className="app-Lux-box">
        <div className="banner">
          <img src="https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/165/15476235680501.jpg" />
        </div>
        <div className="cutDown">
          <div className="countdown">
            <span className="time">{this.state.hour}</span>时
            <span className="time">{this.state.minute}</span>分
            <span className="time">{this.state.second}</span>秒
          </div>
        </div>
        <div className="newyearImg">
          <div className='img-top'>{this.renderItem()}</div>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/98/15476240443732.jpg'/>
          <div className="superImg">{this.renderItem2()}</div>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/133/15476243782557.jpg'/>
          <div className='ul'>{this.renderItem3()}</div>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/151/15476255489957.jpg'/>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2018/09/27/164/15380295381660.jpg'/>
        </div>

        <main>
          <div className="buy">今日特卖·每天早10点 晚8点更新</div>

          <div className="shop-box">{this.renderBanner()}</div>
        </main>
      </div>
    );
  }
}
Lux.defaultProps = {
  endTime: 100000000000000
};
export default GroupHome(Lux);
