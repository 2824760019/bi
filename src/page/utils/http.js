import axios from 'axios'
import qs from 'qs'   //qs库-->作用是格式化数据
var TIME_OUT = 100000;  //如果请求的时间超过'timeout'，请求将被中止
// var st_base_prefix = 'http://192.168.1.7:8070/product_source';
// var st_base_prefix = 'https://www.gzyixinglong.com/yxlwshop-pc';
var st_base_prefix = 'http://47.97.204.11:1091/kaichuang-app';
const base_axios_options = {
  headers:{'Content-Type': 'application/Access-Control-Allow-Origin'},
  timeout:10000,
  withCredentials:true,  //是否跨站点访问控制请求
};
const orgAxios = axios.create(Object.assign({},{ baseURL:st_base_prefix },base_axios_options));
export const orgModuleApi={
  loginUser:(params)=>{
    return orgAxios.post('/appLogin/login_login',params).then(res=>res.data);
  },
}
