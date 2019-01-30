import React, { Component } from 'react'
import './index.scss'
import { NavBar,Icon } from "antd-mobile";

const searchTop = [
    
    {
        id: 6,
        value: '软软',
        color: 'red'
    },
    {
        id: 7,
        value: '是',
        color: 'red'
    },
    {
        id: 8,
        value: '个',
        color: 'red'
    },
    {
        id: 9,
        value: '小仙女',
        color: 'red'
    },
]


const search = [

  {
      id: 1,
      value: '唯品快抢',
      
  },
  {
      id: 2,
      value: '新人限时秒杀',
      
  },
  {
      id: 3,
      value: '3折封顶',
     
  },
  {
      id: 4,
      value: '大牌特卖',
      
  },
  {
      id: 5,
      value: '羽绒服99元',
      
  },
  
  {
      id: 6,
      value: '香水',
      color: 'red'
  },
  {
      id: 7,
      value: '口红',
      color: 'red'
  },
  {
      id: 8,
      value: '面膜',
      color: 'red'
  },
  {
      id: 9,
      value: '圣罗兰',
      color: 'red'
  },
]

class Search extends Component{
    constructor(props){
        super(props)
    }
    renderItemTop(){
      return searchTop.map(item =>{
        return(
          <li key={item.id}>
          <a href='#' className={item.color}>
          {item.value}
          </a>
          </li>
        )
      })
    }
    renderItem(){
      return search.map(item =>{
        return(
          <li key={item.id}>
          <a href='#' className={item.color}>
          {item.value}
          </a>
          </li>
        )
      })
    }
    render(){
        return (
            <div className='app-Search-box'>
                {/* header start */}
        <header>
          <NavBar
            mode="dark"
            leftContent={[
              <a  key="0" className="searchBack" href="/home/index">
                <Icon type="left" size="lg" />
              </a>
            ]}
            rightContent={[
                <a key="0" href='/' className='search-a'>搜索</a>
            ]}
          >
           <div className="search">
            <a href="#">
              <span>大家正在搜索:年货爆款 </span>
            </a>
          </div>
          </NavBar>
        </header>

        {/* header end */}
            <main>

              <div className='top'>
              <h3>最近搜索</h3>
              <ul>
                  {this.renderItemTop()}
                </ul>
              </div>
              
            <div className='center'>
            
            <h3>热门搜索</h3>
                <ul>
                  {this.renderItem()}
                </ul>
            </div>

            </main>
            </div>
        )
    }
}

export default Search