import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './store'
import "./stylesheets/main.scss";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "./modules/rem";
import "swiper/dist/css/swiper.css";
import {Provider} from 'react-redux'
import { Component } from "react";
import axios from "axios";
Component.prototype.$http = axios;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
