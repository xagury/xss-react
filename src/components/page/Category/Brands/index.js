import React, { Component } from "react";
import "./index.scss";
import { Icon, ListView } from "antd-mobile";
import { NavLink } from "react-router-dom";
import { GroupCategory } from "../../../../modules/group";

const Licontents = props  => {
  return (
      <div className='shopcar' >
          <a href="#">
              <div className='shop'>
                  <img src={`${props.imageUrl}`} alt=""/>
                  <p>{props.productName}</p>
              </div>

          </a>

      </div>

  )
}

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

class Brands extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      dataSource,
      isLoading: true
    };
  }
  componentWillMount() {
    let { getBrands, getBrandsContent } = this.props;
    getBrands();
    getBrandsContent();
  }
  componentDidMount() {
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false
      });
    }, 600);
  }
  onEndReached = event => {
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
  renderItem() {
    let { brands } = this.props;
    if (brands) {
      return brands.map(brand => {
        return (
          <li key={brand.categoryId}>
            <NavLink
              to={{
                pathname: `/category/brands/#`
              }}
              activeClassName="active"
            >
              <img src={`${brand.image}`} />
              <p>{brand.name}</p>
            </NavLink>
          </li>
        );
      });
    }
  }
  renderItemContent() {
    let { brandsContent } = this.props;
    if (brandsContent) {
      return brandsContent.map((bc) => {
        return (
          <div className='contentBox' key={bc.categoryId}>
          <h5 id={bc.categoryId}>
            <span>{bc.name}</span>
            <a href="#" className='box-more'>更多</a>
          </h5>
          <div className='content-box'>
          
            {bc.child.map(v => {
              return (
                
                <Licontents  
                key = { v.id }
                imageUrl = { v.imageUrl }
                productName = {v.productName}
                />
              );
            })}
            </div>
          </div>
        );
      });
    }
  }
  render() {
    const row = rowID => {
      return <div className="brandTitle-box">{this.renderItemContent()}</div>;
    };
    return (
      <div className="app-Brands-box">
        {/* search start */}
        <div className="search-box">
          <a href="/search">
            <Icon
              type="search"
              size="sm"
              style={{
                marginRight: "10px",
                marginRight: "-119px",
                display: " block",
                float: "left",
                marginLeft: "101px",
                marginTop: "6px"
              }}
            />
            <span>搜索品牌或商品</span>
          </a>
          <div className="allBrands">
            <NavLink
              to={{
                pathname: `/category/brands/allBrands`
              }}
            >
              <span>|</span>
              全部品牌
            </NavLink>
          </div>
        </div>

        {/* search end */}
        <nav>
          {" "}
          <ul> {this.renderItem()}</ul>{" "}
        </nav>
        <div className="main">
          <ListView
            ref={el => (this.lv = el)}
            dataSource={this.state.dataSource}
            // renderHeader={() =>}
            renderFooter={() => (
              <div style={{ padding: 30, textAlign: "center" }}>
                {this.state.isLoading ? "Loading..." : "Loaded"}
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
      </div>
    );
  }
}

export default GroupCategory(Brands);
