import * as type from "./type";
import axios from "axios";
import qs from 'querystring'
const actionCreator = {
  getHome() {
    return dispatch => {
      axios 
      .get("/data/main.json", {})
        .then(res => {
          let action = {
            type: type.GET_HOME,
            payLoad: res.data
          };
          dispatch(action);
        })
        .catch(error => console.log(error));
    };
  }, 
  getNav() {
    return dispatch => {
      axios 
      .get("/data/nav.json", {})
        .then(res => {
          console.log("resNav", res);
          let action = {
            type: type.GET_NAV,
            payLoad: res.data
          };
          dispatch(action);
        })
        .catch(error => console.log(error));
    };
  },
  getTab() {
    return dispatch => {
      axios 
      .get("/data/tab.json", {})
        .then(res => {
          let action = {
            type: type.GET_TAB,
            payLoad: res.data
          };
          dispatch(action);
        })
        .catch(error => console.log(error));
    };
  },
  getBanner() {
    return dispatch => {
      axios 
      .get("/data/allBanner.json", {})
        .then(res => {
          let action = {
            type: type.GET_BANNER,
            payLoad: res.data
          };
          dispatch(action);
        })
        .catch(error => console.log(error));
    };
  },
  getNewbeauty() {
    return dispatch => {
      axios 
      .get("/data/newbeauty.json", {})
        .then(res => {
          let action = {
            type: type.GET_NEWBEAUTY,
            payLoad: res.data
          };
          dispatch(action);
        })
        .catch(error => console.log(error));
    };
  },
  getNbmuyingtop() {
    return dispatch => {
      axios 
      .get("/data/nbmuyingtop.json", {})
        .then(res => {
          let action = {
            type: type.GET_NBMUYINGTOP,
            payLoad: res.data
          };
          dispatch(action);
        })
        .catch(error => console.log(error));
    };
  },
  getNbguojitop() {
    return dispatch => {
      axios 
      .get("/data/nbguojitop.json", {})
        .then(res => {
          let action = {
            type: type.GET_NBGUOJITOP,
            payLoad: res.data
          };
          dispatch(action);
        })
        .catch(error => console.log(error));
    };
  },getJiadian() {
    return dispatch => {
      axios 
      .get("/data/jiadian.json", {})
        .then(res => {
          let action = {
            type: type.GET_JIADIAN,
            payLoad: res.data
          };
          dispatch(action);
        })
        .catch(error => console.log(error));
    };
  },getJiaju() {
    return dispatch => {
      axios 
      .get("/data/jiaju.json", {})
        .then(res => {
          let action = {
            type: type.GET_JIAJU,
            payLoad: res.data
          };
          dispatch(action);
        })
        .catch(error => console.log(error));
    };
  },
  getLux() {
    return dispatch => {
      axios 
      .get("/data/lux.json", {})
        .then(res => {
          let action = {
            type: type.GET_LUX,
            payLoad: res.data
          };
          dispatch(action);
        })
        .catch(error => console.log(error));
    };
  },
  getLifemarket() {
    return dispatch => {
      axios 
      .get("/data/lifemarket.json", {})
        .then(res => {
          let action = {
            type: type.GET_LIFEMARKET,
            payLoad: res.data
          };
          dispatch(action);
        })
        .catch(error => console.log(error));
    };
  },
};

export default actionCreator;
