import React, { Component } from 'react'
import './index.scss'
import EmptyCart from './EmptyCart'
import ShopCart from './ShopCart'
import { GroupCars } from "../../../modules/group";

class Cart extends Component{
    constructor(props){
        super(props)
    }
  
    renderItem(){
    
      let { cars } = this.props
      if(!cars){
        return(
          <ShopCart data={cars}/>
        )
       
      }else{
        return(
         <EmptyCart/>
        )
        
      }
    }
    render(){
      
        return (
            <div className='app-Cart-box'>
            
            {this.renderItem()}
            </div>
        )
    }
}

export default GroupCars(Cart)