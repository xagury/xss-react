import React, { Component } from 'react'
import './index.scss'

class CategoryHome extends Component{
    constructor(props){
        super(props)
        this.state={ }
    }
    render(){
        const arrImg = [
            { id: 1, imgsrc: "/img/index(4).jpg" },
            { id: 2, imgsrc: "/img/index(5).jpg" },
            { id: 3, imgsrc: "/img/index(6).jpg" },
            { id: 4, imgsrc: "/img/index(7).jpg" },
            { id: 5, imgsrc: "/img/index(8).jpg" }
          ];
          const arrImg2 = [
            { id: 1, imgsrc: "/img/index(9).jpg" },
            { id: 2, imgsrc: "/img/index(10).jpg" },
            { id: 3, imgsrc: "/img/index(11).jpg" },
            { id: 4, imgsrc: "/img/index(12).jpg" },
            { id: 5, imgsrc: "/img/index(13).jpg" }
          ];
        return (
            <div className='app-CategoryHome-box'>
            <ul>
                
                {
                    arrImg.map(function (arr) {
                        return(
                            <li key={arr.id}>
                        
                            <img src={`${arr.imgsrc}`} alt=""/>
                        </li>
                        )
                       
                    })
                }
            </ul>
            <ul>
                
                {
                    arrImg2.map(function (arr) {
                        return(
                            <li key={arr.id}>
                        
                            <img src={`${arr.imgsrc}`} alt=""/>
                        </li>
                        )
                       
                    })
                }
            </ul>
            
            
            </div>
        )
    }
}

export default CategoryHome