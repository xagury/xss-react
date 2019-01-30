import React, { Component } from "react";
import "./index.scss";
import { GroupHome } from "../../../../../modules/group";
import moment from 'moment'
const newyearImg = [
  {
    id: 1,
    imgUrl:
      "/img/15476076397989.jpg"
  },
  {
    id: 2,
    imgUrl:
      "/img/15476076864728.jpg"
  },
  {
    id: 3,
    imgUrl:
      "/img/15476077131653.jpg"
  },
  {
    id: 4,
    imgUrl:
      "/img/15476077455940.jpg"
  },
  {
    id: 5,
    imgUrl:
    "/img/15476077747130.jpg"
  },
  {
    id: 6,
    imgUrl:
    "/img/15476078071131.jpg"
  },
  {
    id: 7,
    imgUrl:
    "/img/15476078391396.jpg"
  },
  {
    id: 8,
    imgUrl:
    "/img/15476078694495.jpg"
  },
  {
    id: 9,
    imgUrl:
    "/img/15476078962167.jpg"
  },
  {
    id: 10,
    imgUrl:
    "/img/15476079551130.jpg"
  }
  
];
const superImg = [
  {
    id: 1,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/104/15476119627108.jpg"
  },
  {
    id: 2,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/197/15476120064690.jpg"
  },
  {
    id: 3,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/109/15476120527657.jpg"
  },
  {
    id: 4,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/9/15476120863329.jpg"
  },
  {
    id: 5,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/72/15476121180138.jpg"
  },
  {
    id: 6,
    imgUrl:
      "https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/121/15476121583540.jpg"
  }
];
class Nbguojitop extends Component {
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
    let { getNbguojitop } = this.props;
    getNbguojitop();
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
    let { nbguojitop } = this.props;
    if (nbguojitop) {
      return nbguojitop.map((item,i) => {
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
      <div className="app-Nbguojitop-box">
        <div className="banner">
          <img src="https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/196/15476207733737.gif" />
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
         
          
        </div>
        <div className="banner">
          <img src="https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/107/15476118931396.jpg" />
        </div>
        <div className="superImg">{this.renderItem2()}</div>
        <div className="banner">
        <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/16/184/15476101264293.jpg'/>
        </div>
        
        <main>
          <div className="buy">今日特卖·每天早10点 晚8点更新</div>
          <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/15/88/15475445789514.jpg' />
        <img src='https://h2.appsimg.com/a.appsimg.com/upload/flow/2019/01/15/185/15475490479938.jpg' />
          <div className="shop-box">{this.renderBanner()}</div>
        </main>
      </div>
    );
  }
}
Nbguojitop.defaultProps = {
  endTime: 100000000000000
};
export default GroupHome(Nbguojitop);
