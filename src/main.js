// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// 引入响应式
import 'bootstrap/css/bootstrap.min.css'
import 'bootstrap/js/bootstrap.min.js'

import './page/style/main.scss'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './page/utils/loading'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.prototype.http = axios;
axios.interceptors.request.use(function(config){
  store.dispatch('showloader')
  return config
},function(err){
  return Promise.reject(err)
});
axios.interceptors.response.use(function(response){
  store.dispatch('hideloader')
  return response
},function(err){
  return Promise.reject(err)
});
import http from './page/utils/api'
// import  https from './page/utils/http'
import qs from 'qs'
import ports from './page/utils/prots'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import store from './page/store/store'
import moment from "moment";
import VueJsonp from 'vue-jsonp'
import VideoPlayer from 'vue-video-player';

import  utils from './page/utils/utils';
Vue.prototype.utils = utils;



require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import VueQriously from 'vue-qriously'
Vue.use(VueQriously)
Vue.use(VideoPlayer);
import 'babel-polyfill'
import AMap from "vue-amap";
Vue.use(AMap);
Vue.use(qs);
AMap.initAMapApiLoader({
  key: "86dcaf105d9aeeab00e7e8849924d0aa",
  plugin: [
    "AMap.Autocomplete", //输入提示插件
    "AMap.PlaceSearch", //POI搜索插件
    "AMap.Scale", //右下角缩略图插件 比例尺
    "AMap.OverView", //地图鹰眼插件
    "AMap.ToolBar", //地图工具条
    "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    "AMap.PolyEditor", //编辑 折线多，边形
    "AMap.CircleEditor", //圆形编辑器插件
    "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
  uiVersion: "1.0.11", // ui库版本，不配置不加载,
  v: "1.4.4"
});
Vue.use(VueJsonp)
Vue.prototype.$moment = moment;
Vue.use(iView);
Vue.prototype.http = http
// Vue.prototype.https = https
Vue.prototype.ports = ports
import $ from 'jquery'
//具体路径有的不同，vue运行报错请看第五点
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-signUp */

Vue.filter('dateFmt', (input, formatString = "YYYY-MM-DD") => {
  //es5函数参数设置默认值
  //const lastFormatString = formatString || ''


  // moment(input) 把时间字符串转成时间对象
  // format(formatString) 把时间对象，按照指定格式，格式化成符合条件的字符串
  return moment(input).format(formatString)
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
