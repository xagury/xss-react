

const state = {
  list:[],
  cars: getCar()
}


function getCar(){
  return localStorage.cars?JSON.parse(localStorage.cars) : []
}
export default state