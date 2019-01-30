import React, { Component } from "react";
import "./index.scss";
import { GroupHome } from "../../../../../modules/group";

const newyearImg = [
  {
    id: 1,
    imgUrl: "/img/15476122887024.jpg"
  },
  {
    id: 2,
    imgUrl: "/img/15476122937610.jpg"
  },
  {
    id: 3,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/50/15476196441553.jpg"
  },
  {
    id: 4,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/115/15476198982114.jpg"
  }
];
const superImg = [
  {
    id: 2,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/74/15476209420815.jpg"
  },
  {
    id: 3,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/66/15476206267040.jpg"
  },
  {
    id: 4,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/40/15476206586787.jpg"
  },
  {
    id: 5,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/30/15476206866065.jpg"
  }
];
const superImg1 = [
  {
    id: 2,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/80/15476207533520.jpg"
  },
  {
    id: 3,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/121/15476207869115.jpg"
  },
  {
    id: 4,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/55/15476208159946.jpg"
  },
  {
    id: 5,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/148/15476210409874.jpg"
  }
];
class Nbmuyingtop extends Component {
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
    let { getNbmuyingtop } = this.props;
    getNbmuyingtop();
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
    return superImg1.map(su => {
      return <img key={su.id} src={`${su.imgUrl}`} />;
    });
  }
  renderBanner() {
    let { nbmuyingtop } = this.props;
    if (nbmuyingtop) {
      return nbmuyingtop.map((item, i) => {
        return (
          <div className="main" key={i}>
            <div className="img-box">
              <a href="#">
                <img src={`${item.mobile_image_one}`} />
              </a>
            </div>
            <div className="p-box">
              <p>
                <span
                  className="p-span"
                  dangerouslySetInnerHTML={{ __html: `${item.agio}` }}
                />

                {item.brand_name}
              </p>
              <p className="pms">{item.pms_activetips}</p>
              <div className="timer">剩1天</div>
            </div>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div className="app-Nbmuyingtop-box">
        <div className="banner">
          <img src="https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/17/135/15476908716032.gif" />
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
          <div className="superImg">
            <img
              className="superImg-left"
              src="https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/46/15476209323472.jpg"
            />
            <div className="superImg-right">{this.renderItem2()}</div>
          </div>
          <div className="superImg">
            <img
              className="superImg-left"
              src="https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/56/15476207171348.jpg"
            />
            <div className="superImg-right">{this.renderItem3()}</div>
          </div>
        </div>

        <main>
          <div className="buy">今日特卖·每天早10点 晚8点更新</div>

          <div className="shop-box">{this.renderBanner()}</div>
        </main>
      </div>
    );
  }
}
Nbmuyingtop.defaultProps = {
  endTime: 100000000000000
};
export default GroupHome(Nbmuyingtop);
