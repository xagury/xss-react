唯品会 react-开发


##一.配置环境、框架模板、路由、二级路由
  #1.初始
    create-react-app
    yarn eject
    yarn start
    rimraf node_modules
  #2.项目依赖性第三方包   cnpm i    /    yarn add
    react
    react-dom
    redux -S
    redux-thunk -S 
    node-sass sass-loader-D
    react-router -S
    axios -D
  #3.路由
    react-router-dom -S

    hash #/home  HashRouter
    path /home   BrowserRouter
index.js
    import{BrowserRouter as Router}
App.js
    import{ Route } from 'react-router-dom'
    <Route path = '/' component = {home} exact>  (#  HashRouter)
    <Route path = '/category/a' render = { () => <div>category/a</div>}> 

//渲染函数
    renderRoutes(){
    let { routes } = this.props
    return routes.map( item =>
      <Route key = {item.id} path = {item.path} component = {item.component} exact = {item.exact} />
    
    )
  }
  # exact 完全匹配
  # Switch 一次只渲染一个 import { Switch } from 'react-router-dom'
//路径
App.defaultProps = {
  routes : [
    {
      id: 1,
      path: '/',
      component: Home,
      exact: true
    },
  ]
}
    组件库:Ant Design Mobile
    cnpm i antd-mobile -S

插件(组件按需引入)
    babel-plugin-import -D


##二.布局
   # 公共组件 Header Footer Banner

        1.Header   √

        2.Footer   √

        3.Banner

   #1.首页 Home
    
        1.首页  √   //问题:  1.tabs路由跳转   2.返回顶部

  ##Post 请求


   #2.登录注册 Login Register

    1.登录
       页面  √ 


    2.注册
    
      页面  √

   #3.我的 Mine

        页面  
        
   #4.分类 Category

      1.页面  √
      2.二级路由  √
      3.跨域获取数据  √

   #5.详情 Detail
   #6.购物车 Cart
    
      1.空购物车 √
      2.存在物品的购物车


##三.购物车功能


##四.登录注册功能







##1.css 两行文本换行省略号
                                     (需设置固定高度与宽度)
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;


##post
getHomePage() {
    return dispatch => {
      axios
        .post("/abc/server.html?rpc&" + qs.stringify({
          method:'BrandRpc.getBrandListV2',
          f: 'www',
          _: Date.now(),
        }), {
          id: 1547634569728,
          jsonrpc: "2.0",
          method: "BrandRpc.getBrandListV2",
          params: {
            page: "newbeauty.html",
            pageOffset: 60,
            query: "f=www&tra_from=m%3Ai%3A1544173431560_6b5395651d1c792d39c1bb6d7eebc055%3Aa%3Awww%3A%3Anewbeauty"
          }
          
        })
        .then(res => {
        
          console.log(res)
          let action = {
            type: type.GET_HOMEPAGE,
            payLoad: res.data
          };
          dispatch(action);
        })
        .catch(error => console.log(error));
    };
  }
