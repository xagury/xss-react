import * as type from './type'
import axios from 'axios'
const actionCreator = {
  addUser(userInfo,success,fail){
    return dispatch => {
      
      setTimeout(()=>{
       let action = {
         type : type.ADD_USER,
         payLoad: userInfo
       };
       dispatch(action)
       
       if(success) success()
       return false
      },500)
    }
  },
  loginByUser(users,username,password,success,fail){
    
     
     return dispatch =>{
      setTimeout(()=>{
      users.some(item => {
        if(item.username === username && item.password === password){
          let action = {
            type : type.USERNAME,
            username: username
          }
          dispatch(action)
          if(success) success()
          return false
        }
        return false
      })
         if(fail) fail()
       },500)
      
     }
  },
  exitUser(){
    let action = {
        type: type.EXIT_USER,
        username: null
    }
 
    return action
  }
}

export default actionCreator