import state from './state'
import * as type from './type'

const reducer = (previousState = state, action) => {
  let new_state = { ...previousState
  }
  switch (action.type) {
    case type.ADD_USER:
      new_state.users = handler.addUser(new_state.users, action.payLoad)
      localStorage.setItem('users', JSON.stringify(new_state.users))
      break;
    case type.USERNAME:
      new_state.username = {
        username: action.username
      }
      localStorage.setItem('username', JSON.stringify(new_state.username))
      break;
      case type.EXIT_USER:
      new_state.username =  action.username
      localStorage.setItem('username', JSON.stringify(new_state.username))
      break;

    default:
      break;
  }
  return new_state
}
let handler = {
  addUser(users, userInfo) {
    let _users = users.slice();

    let isHas = _users.some(item => {
      if (item.id != userInfo.id) {
        return true

      }
      return false
    })
    if (!isHas) {
      _users.push(userInfo)
    }
    return _users
  }
}
export default reducer