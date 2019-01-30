import React, { Component } from "react";
import "./index.scss";
import Footer from "../../../../common/Footer";
import { GroupHome } from "../../../../../modules/group";
import { ListView } from "antd-mobile";
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = pIndex * NUM_ROWS + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Main extends Component {
  constructor(props) {
    super(props);

    super(...arguments);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      home: [],
      dataSource,
      isLoading: true
    };
  }
  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false
      });
    }, 600);
  }
  onEndReached = event => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log("reach end", event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false
      });
    }, 1000);
  };
  componentWillMount() {
    let { getHome, home } = this.props;
    getHome();
    this.setState({
      home: home
    });
  }
  renderItem() {
    let { home } = this.props;
    if (home) {
      return home.map((mb, index) => {
        return (
          <li key={index}>
            <div className="shopping">
              <img src={`${mb.imgsrc}`} />
              <div className="desc">
                <div className="desc-top">
                  <span className="title"> {mb.desc} </span>
                  <span className="time"> {mb.time} </span>
                </div>
                <div className="desc-bottom">
                  <span>
                    <span className="discount"> {mb.discount} </span>折起
                  </span>
                  <span className="intro"> {mb.intro} </span>
                </div>
              </div>
            </div>
          </li>
        );
      });
    }
  }
  render() {
    let { home } = this.props;
   
    const row = rowID => {
     

      return (
        <div key={rowID} style={{ position: "relative" }}>
          <ul>{this.renderItem()}</ul>

          <div style={{ lineHeight: 9 }} />
        </div>
      );
    };
    return (
      <div className="app-Main-box">
        {/* <ul>
       
        { this.renderItem() }
        </ul> */}
        <ListView
          ref={el => (this.lv = el)}
          dataSource={this.state.dataSource}
          renderHeader={() => (
            
              <img src="/img/1542092001276.jpg" />
           
          )}
          renderFooter={() => (
            <div style={{ padding: 30, textAlign: "center" }}>
              {this.state.isLoading ? "Loading..." : "Loaded"}
              <Footer/>
            </div>
          )}
          renderRow={row}
      
          className="am-list"
          pageSize={4}
          useBodyScroll
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
      </div>
    );
  }
}

export default GroupHome(Main);
