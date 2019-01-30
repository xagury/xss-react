const state = {

    users:getUser(),
    username:getUserName()
}
function getUser(){
  return localStorage.users?JSON.parse(localStorage.users) : []
}
function getUserName(){
  return localStorage.username?JSON.parse(localStorage.username) : []
}
export default state