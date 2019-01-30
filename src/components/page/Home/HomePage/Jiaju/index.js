import React, { Component } from "react";
import "./index.scss";
import { GroupHome } from "../../../../../modules/group";
const newyearImg = [
  {
    id: 1,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/17/94/15476943090630.gif"
  },
  {
    id: 2,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/198/15476208111105.jpg"
  }
];
const superImg = [
  {
    id: 1,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/69/15476212627035.jpg"
  },
  {
    id: 2,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/176/15476213024607.jpg"
  },
  {
    id: 3,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/134/15476213587435.jpg"
  },{
    id: 4,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/10/15476214030802.jpg"
  },
  {
    id: 5,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/182/15476214479094.jpg"
  },
  {
    id:6,
    imgUrl: "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/148/15476217435383.jpg"

  }
];

const superImg2=[
  {
    id: 1,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/106/15476246675874.gif'
  },{
    id: 2,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/147/15476247191350.gif'
  }
]
const superImg1=[
  {
    id: 1,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/72/15476328237012.jpg'
  },{
    id: 2,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/58/15476328861612.jpg'
  }
]
const superImg3=[
  {
    id: 1,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/92/15476330660384.jpg'
  },{
    id: 2,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/17/180/15477080666785.jpg'
  },{
    id: 3,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/0/15476332606562.jpg'
  }
]
const superImg4=[
  {
    id: 1,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2018/11/30/141/15435822443151.jpg'
  },{
    id: 2,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2018/11/30/85/15435822272105.jpg'
  },{
    id: 3,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2018/11/30/164/15435822977501.jpg'
  }
]
const superImg5=[
  {
    id: 1,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/17/180/15476907782132.jpg'
  },{
    id: 2,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/17/81/15476908115932.jpg'
  },{
    id: 3,
    imgUrl:'https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/17/50/15476908966097.jpg'
  }
]

const newyearImg1 = [
  {
    id: 1,
    imgUrl:
      "/img/15476238755560.jpg"
  },
  {
    id: 2,
    imgUrl:
      "/img/15476239129240.jpg"
  },
  {
    id: 3,
    imgUrl:
      "/img/15476239432764.jpg"
  },
  {
    id: 4,
    imgUrl:
      "/img/15476239778894.jpg"
  },
  {
    id: 5,
    imgUrl:
    "/img/15476240266544.jpg"
  },
  {
    id: 6,
    imgUrl:
    "/img/15476240657902.jpg"
  },
  {
    id: 7,
    imgUrl:
    "/img/15476240998862.jpg"
  },
  {
    id: 8,
    imgUrl:
    "/img/15476241287593.jpg"
  },
  {
    id: 9,
    imgUrl:
    "/img/15476241527955.jpg"
  },
  {
    id: 10,
    imgUrl:
    "/img/15476241800384.jpg"
  }
  
];

const newyearImg2 = [
  {
    id: 1,
    imgUrl:
      "/img/15476220615906.jpg"
  },
  {
    id: 2,
    imgUrl:
      "/img/15476226209246.jpg"
  },
  {
    id: 3,
    imgUrl:
      "/img/15476232251575.jpg"
  },
  {
    id: 4,
    imgUrl:
      "/img/15476233082621.jpg"
  },
  {
    id: 5,
    imgUrl:
    "/img/15476907651502.jpg"
  },
  {
    id: 6,
    imgUrl:
    "/img/15476953653846.jpg"
  },
  {
    id: 7,
    imgUrl:
    "/img/15476954064582.jpg"
  },
  {
    id: 8,
    imgUrl:
    "/img/15476235635319.jpg"
  }
  
];
class Jiaju extends Component {
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
    let { getJiaju } = this.props;
    getJiaju();
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
  renderItem6() {
    return newyearImg2.map(su => {
      return <img key={su.id} src={`${su.imgUrl}`} />;
    });
  }
  renderItem7() {
    return superImg1.map(su => {
      return <img key={su.id} src={`${su.imgUrl}`} />;
    });
  }
  renderItem8() {
    return superImg3.map(su => {
      return <img key={su.id} src={`${su.imgUrl}`} />;
    });
  }
  renderItem9() {
    return superImg4.map(su => {
      return <img key={su.id} src={`${su.imgUrl}`} />;
    });
  }
  renderItem10() {
    return superImg5.map(su => {
      return <img key={su.id} src={`${su.imgUrl}`} />;
    });
  }
  renderBanner() {
    let { jiaju } = this.props;
    if (jiaju) {
      return jiaju.map((item,i) => {
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
      <div className="app-Jiaju-box">
    
        <div className="banner">
          <img src="https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/73/15476419043843.gif" />
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
          <div className="superImg superLi">{this.renderItem4()}</div>
          <div className="superjiaju">{this.renderItem2()}</div>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/112/15476217994779.jpg'/>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/161/15476219908287.jpg'/>
          <div className='superImg ul'>{this.renderItem6()}</div>
          <div className='superImg li'>{this.renderItem5()}</div>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/1/15476242222052.jpg'/>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2018/12/29/110/15460498927231.jpg'/>
          <div className='superImg box1'>{this.renderItem7()}</div>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2018/12/28/19/15459613107430.jpg'/>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2018/12/26/31/15457909549773.gif'/>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/07/149/15468273025670.jpg'/>
          <div className='superImg qjd'>{this.renderItem8()}</div>
          <div className='superImg qjdB'>{this.renderItem9()}</div>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/17/118/15476906731641.gif'/>
          <div className='superImg water'>{this.renderItem10()}</div>
        </div>

        <main>
          <div className="buy">今日特卖·每天早10点 晚8点更新</div>

          <div className="shop-box">{this.renderBanner()}</div>
        </main>
      </div>
    );
  }
}
Jiaju.defaultProps = {
  endTime: 100000000000000
};
export default GroupHome(Jiaju);
