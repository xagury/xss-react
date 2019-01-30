import React, { Component } from "react";
import "./index.scss";
import { GroupHome } from "../../../../../modules/group";
const newyearImg = [
  {
    id: 1,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/17/11/15476951348385.gif"
  },

  {
    id: 2,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/172/15476195011435.jpg"
  }
];
const superImg = [
  {
    id: 1,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/41/15476195666803.gif"
  },
  {
    id: 2,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/52/15476199568693.jpg"
  },
  {
    id: 3,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/115/15476200892222.jpg"
  }
];
const superImg1 = [
  {
    id: 1,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/184/15476216303676.jpg'
  },
  {
    id: 2,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/14/15476217688578.gif'
  },
  {
    id: 3,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/51/15476218390539.jpg'
  },
  {
    id: 4,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/171/15476219754780.jpg'
  },
  {
    id: 5,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/83/15476220408618.jpg'
  },
  {
    id: 6,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/26/15476221034353.jpg'
  },
]
const superImg2=[
  {
    id: 1,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/72/15476222284935.jpg'
  },{
    id: 2,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/13/15476222840815.jpg'
  }
]
const newyearImg1 = [
  {
    id: 1,
    imgUrl:
      "/img/15476411217946.gif"
  },
  {
    id: 2,
    imgUrl:
      "/img/15476412356068.gif"
  },
  {
    id: 3,
    imgUrl:
      "/img/15476413192255.gif"
  },
  {
    id: 4,
    imgUrl:
      "/img/15460765643407.jpg"
  },
  {
    id: 5,
    imgUrl:
    "/img/15476415456886.gif"
  },
  {
    id: 6,
    imgUrl:
    "/img/15476417496594.gif"
  },
  {
    id: 7,
    imgUrl:
    "/img/15476432824777.gif"
  },
  {
    id: 8,
    imgUrl:
    "/img/15462251335592.jpg"
  },
  {
    id: 9,
    imgUrl:
    "/img/15476419967283.gif"
  },
  {
    id: 10,
    imgUrl:
    "/img/15476416428456.gif"
  }
  
];
class Jiadian extends Component {
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
    let { getJiadian } = this.props;
    getJiadian();
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
  renderItem4() {
    return superImg2.map(su => {
      return <img key={su.id} src={`${su.imgUrl}`} />;
    });
  }
  renderItem5() {
    return newyearImg1.map(su => {
      return <img key={su.id} src={`${su.imgUrl}`} />;
    });
  }
  renderBanner() {
    let { jiadian } = this.props;
    if (jiadian) {
      return jiadian.map((item,i) => {
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
      <div className="app-Jiadian-box">
        <div className="banner">
          <img src="https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/135/15476271907726.gif" />
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
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/73/15476215986384.jpg'/>
          
         
          <div className='superImg superli'>{this.renderItem3()}</div>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/78/15476221533300.jpg'/>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/186/15476222022615.jpg' />
          <div className="superImg superLi">{this.renderItem4()}</div>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/164/15476223604802.jpg'/>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2018/12/26/147/15457873699638.gif'/>

          <div className='superImg ul'>{this.renderItem5()}</div>

          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/160/15476428144292.jpg'/>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/11/63/15471968847729.gif'/>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/109/15476428635909.jpg'/>
        </div>

        <main>
          <div className="buy">今日特卖·每天早10点 晚8点更新</div>

          <div className="shop-box">{this.renderBanner()}</div>
        </main>
      </div>
    );
  }
}
Jiadian.defaultProps = {
  endTime: 100000000000000
};
export default GroupHome(Jiadian);
