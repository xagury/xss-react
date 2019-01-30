import React, { Component } from "react";
import "./index.scss";
import { GroupCategory } from "../../../../../modules/group";
const qs = require("querystring");

const Licontent = props  => {
    return (

        <div className='shopcar'  >
            <a href="#">
                <div className='shop'>
                
                    <img src={`${props.img}`} alt=""/>
                    <p>{props.name}</p>
                </div>
            
            
            </a>
        
        </div>

    )
}



class ListContents extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let { getContents } = this.props;
    let { search } = this.props.location;
    let urlObj = qs.parse(search.slice(1));
    getContents(urlObj.id);
  }
  componentWillReceiveProps(props) {

    if (props.location.search !== this.props.location.search) {
      let { getContents } = this.props;
      let { search } = this.props.location;
      let urlObj = qs.parse(search.slice(1));
      getContents(urlObj.id);
    }
  }
  renderItem() {
    let { contents } = this.props;
    if (contents) {
      return contents.map(content => {
        return (
          
          <div className='shop-title' key={content.categoryId}>

          <h5>{content.name} </h5>

            <div className='shopBox'>
                {
                    content.children.map((v) => {
                        return(
                            <Licontent key = {v.categoryId}
                            
                            name = { v.name }
                            img = {v.image}
                            />
                        )
                    })
                }
            </div>

          </div>
         
        );
      });
    }
  }
  render() {
    return (
      <div className="app-ListContents-box">
      
      <div className='categoryContent-box'>
      {this.renderItem()}
      </div>
      
      </div>
    );
  }
}

export default GroupCategory(ListContents);
