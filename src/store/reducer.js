import { combineReducers } from 'redux'
import category from './category/reducer'
import list from './list/reducer'
import home from './home/reducer'
import user from './user/reducer'
import cars from './shopcar/reducer'
const reducer = combineReducers({
    category,home,user,list,cars
})

export default reducer