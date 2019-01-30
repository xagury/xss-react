import React, { Component } from "react";
import "./index.scss";
import { GroupHome } from "../../../../../modules/group";
const newyearImg = [
  {
    id: 1,
    imgUrl:
      "/img/15476354234737.jpg"
  },
  {
    id: 2,
    imgUrl:
      "/img/15476319671441.jpg"
  },
  {
    id: 3,
    imgUrl:
      "/img/15476321042773.jpg"
  },
  {
    id: 4,
    imgUrl:
      "/img/15476322299008.jpg"
  },
  {
    id: 5,
    imgUrl:
      "/img/15476322713422.jpg"
  },
  {
    id: 6,
    imgUrl:
      "/img/15476323161558.jpg"
  },
  {
    id: 7,
    imgUrl:
      "/img/15476323552356.jpg"
  },
  {
    id: 8,
    imgUrl:
      "/img/15476325752076.jpg"
  },
  {
    id: 9,
    imgUrl:
      "/img/15476326701864.jpg"
  },
  {
    id: 10,
    imgUrl:
      "/img/15476327481945.jpg"
  }
];
const superImg = [
  {
    id: 1,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/101/15476286017763.gif"
  },
  {
    id: 2,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/153/15476288382909.gif"
  },
  {
    id: 3,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/17/62/15476928435288.gif"
  },{
    id: 4,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/133/15476292465758.jpg'
  }
];
const superImg2 = [
  {
    id: 1,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/108/15476293281110.jpg"
  },
  {
    id: 2,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/86/15476504165411.jpg"
  },
  {
    id: 3,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/93/15476294473149.jpg"
  },{
    id: 4,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/17/43/15476870372471.jpg'
  }
];
const superImg3 = [
  {
    id: 1,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/171/15476296576365.jpg"
  },
  {
    id: 2,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/49/15476504396871.jpg"
  },
  {
    id: 3,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/86/15476297999449.jpg"
  },{
    id: 4,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/138/15476299062287.jpg'
  }
];
class Lifemarket extends Component {
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
    let { getLifemarket } = this.props;
    getLifemarket();
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
  renderItem4() {
    return superImg3.map(su => {
      return <img key={su.id} src={`${su.imgUrl}`} />;
    });
  }
  renderBanner() {
    let { lifemarket } = this.props;
    if (lifemarket) {
      return lifemarket.map((item,i) => {
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
      <div className="app-Lifemarket-box">
        <div className="banner">
          <img src="https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/197/15476304566776.jpg" />
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
          {this.renderItem2()}
          <div className="superImg">{this.renderItem3()}</div>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/11/15476407359580.jpg'/>
          <div className="superImg">{this.renderItem4()}</div>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/35/15476504562510.jpg'/>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2018/12/04/45/15439229712403.jpg'/>
        </div>

        <main>
          <div className="buy">今日特卖·每天早10点 晚8点更新</div>

          <div className="shop-box">{this.renderBanner()}</div>
        </main>
      </div>
    );
  }
}
Lifemarket.defaultProps = {
  endTime: 100000000000000
};
export default GroupHome(Lifemarket);
