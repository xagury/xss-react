import state from './state'
import * as type from './type'

const reducer = (previousState = state, action) => {
  let new_state = { ...previousState
  } //解构
  switch (action.type) {
    case type.GET_LIST:
      new_state.list = action.payLoad;
      break;
    case type.ADD_CAR:
      //用户操作
      new_state.cars = handler.addCar(new_state.cars, action.payLoad)
      localStorage.setItem('cars', JSON.stringify(new_state.cars))
      break;
    case type.REDUCE_CAR:
      //用户操作
      new_state.cars = handler.reduceCar(new_state.cars, action.payLoad)
      localStorage.setItem('cars', JSON.stringify(new_state.cars))
      break;
    default:
      break;
  }
  return new_state
}
let handler = {
  addCar(cars, goodInfo) {
    let _cars = cars.slice();

    let isHas = _cars.some(item => {
      if (item.id == goodInfo.id) {
        item.num += goodInfo.num
        return true
      }
      return false
    })
    if (!isHas) {
      _cars.push(goodInfo)
    }
    return _cars
  },
  reduceCar(cars, goodId) {
    let _cars = cars.slice();

    _cars.forEach((item,index) => {
      if( item.id === goodId ){
          item.num-- 
          if( item.num === 0 ){
             _cars.splice(index,1)
          }
          return true
      }
      return true
  })


    return _cars
  }
}
export default reducer