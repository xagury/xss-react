import * as type from './type'
import axios from 'axios'
const actionCreator = {
  getList() {
    return dispatch => {
      axios 
      .get("/data/amn.json", {})
        .then(res => {
          let action = {
            type: type.GET_LIST,
            payLoad: res.data
          };
          dispatch(action);
        })
        .catch(error => console.log(error));
    };
  }
}

export default actionCreator