import * as type from './type'
import axios from 'axios'
const actionCreator = {
    getCategory() {
        return dispatch => {
            axios.get('/wph/api/category/category/getSellingCategorys/', {
                    params: {
                        app_name: "",
                        app_version: "",
                        mobile_channel: '',
                        hierarchy_id: "",
                        category_id: "",
                        warehouse: "",
                        mars_cid: "",
                        category_filter: "",
                        sale_for: "",
                        area_id: "",
                        from_url_go_api_switch: "",
                        preview_go_admin: "",
                        src: "app",
                        channel_id: "",
                        wap_id: "classify_wap_107",
                        channel_name: "",
                        _t: Date.now(),
                        _: Date.now()
                    }
                }).then(
                    res => {
                      
                        let action = {
                            type: type.GET_CATEGORY,
                            payLoad: res.data.data.cate_lv1

                        }
                        dispatch(action)
                    })
                .catch(error => console.log(error))
        }
    },
    getNavs() {
        return dispatch => {
            axios.get('/wph/api/category/category/getSellingCategorys/', {
                    params: {
                        app_name: "",
                        app_version: "",
                        mobile_channel: '',
                        hierarchy_id: "",
                        category_id: "",
                        warehouse: "",
                        mars_cid: "",
                        category_filter: "",
                        sale_for: "",
                        area_id: "",
                        from_url_go_api_switch: "",
                        preview_go_admin: "",
                        src: "app",
                        channel_id: "",
                        wap_id: "classify_wap_107",
                        channel_name: "",
                        _t: Date.now(),
                        _: Date.now()
                    }
                }).then(
                    res => {
                       
                        let action = {
                            type: type.GET_NAVS,
                            payLoad: res.data.data.cate_lv1

                        }
                        dispatch(action)
                    })
                .catch(error => console.log(error))
        }
    },
    getContents(id) {
        console.log(id)
        return dispatch => {
            axios.get('/wph/api/category/category/getSellingCategorys/', {
                    params: {
                        app_name: "",
                        app_version: "",
                        mobile_channel: '',
                        hierarchy_id: "",
                        category_id: id,
                        warehouse: "",
                        mars_cid: "",
                        category_filter: "",
                        sale_for: "",
                        area_id: "",
                        from_url_go_api_switch: "",
                        preview_go_admin: "",
                        src: "app",
                        channel_id: "",
                        wap_id: "classify_wap_107",
                        channel_name: "",
                        _t: Date.now(),
                        _: Date.now()
                    }
                }).then(
                    res => {
                     
                        let action = {
                            type: type.GET_CONTENTS,
                            payLoad: res.data.data.current_node.children

                        }
                        dispatch(action)
                    })
                .catch(error => console.log(error))
        }
    },
    getBrands() {
        return dispatch => {
            axios.get('/wph/api/brandSearch/brandSearch/getStartPageDetailv3/', {
                    params: {
                        unopera: "",
                        _t: Date.now(),
                        _: Date.now(),
                    }
                }).then(
                    res => {
                       
                        let action = {
                            type: type.GET_BRANDS,
                            payLoad: res.data.data.cate_list

                        }
                        dispatch(action)
                    })
                .catch(error => console.log(error))
        }
    },
    getBrandsContent() {
        return dispatch => {
            // /wph/api/brandSearch/brandSearch/getStartPageDetailv3/
            axios.get('/data/brands.json', {
                    // params: {
                    //     unopera: "",
                    //     _t: Date.now(),
                    //     _: Date.now(),
                    // }
                }).then(
                    res => {
                       
                        let action = {
                            type: type.GET_BRANDSCONTENT,
                            payLoad: res.data

                        }
                        dispatch(action)
                    })
                .catch(error => console.log(error))
        }
    },
}

export default actionCreator