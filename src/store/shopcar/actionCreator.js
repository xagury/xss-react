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
  },
  addCar(goodInfo, success, fail) {
    return dispatch => {
      //后台逻辑
      setTimeout(() => {
        let action = {
          type: type.ADD_CAR,
          payLoad: goodInfo
        }
        dispatch(action)
        if (success) success()
        return false
      }, 500);
    }
  },
  reduceCar(goodId, success, fail) {
    return dispatch => {
      //后台逻辑
      setTimeout(() => {
        let action = {
          type: type.REDUCE_CAR,
          payLoad: goodId
        }
        dispatch(action)
        if (success) success()
        return false
      }, 500);
    }
  }
}

export default actionCreator