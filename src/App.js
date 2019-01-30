import React, { Component } from 'react';
import { Home,Category,List,Mine,Cart,Search } from './components/page'
import { Route,Switch } from 'react-router-dom'

class App extends Component {

  renderRoutes(){
    let { routes } = this.props
    return routes.map( item =>
      <Route key = {item.id} path = {item.path} component = {item.component} exact = {item.exact} />
    
    )
  }

  render() {
    return (
      <div className="App">
        
      <Switch>

        {this.renderRoutes()}

      </Switch>
  
      </div>
    );
  }
}
App.defaultProps = {
  routes : [
    {
      id: 1,
      path: '/',
      component: Home,
      exact: true
    },
    {
      id: 2,
      path: '/home',
      component: Home
    },
    {
      id: 3,
      path: '/List',
      component: List
    },
    {
      id: 4,
      path: '/category',
      component: Category
      
    },
    {
      id: 5,
      path: '/mine',
      component: Mine
    },
    {
      id: 6,
      path: '/cart',
      component: Cart
    },
    {
      id: 7,
      path: '/search',
      component: Search
    },
   
  ]
 
}
export default App;
