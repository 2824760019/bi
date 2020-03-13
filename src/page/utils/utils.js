// 项目配置文件
const {config} = require('../../../config');
import axios from 'axios'
let util = {};
/**
 * @description 获取网络数据
 * @param path 请求路径
 * @param params 请求参数
 * @param fail 失败回调  失败在前为约束一定要处理错误情况
 * @param success 成功后回调
 */
// post请求
util.postData = (path, params, fail, success, token = '', complete) => {
	axios.post(path, params, {withCredentials: true}).then((res) => {
		success && success(res.data);
		complete && complete();
	}).catch((error) => {
		console.error(error);
		fail && fail(error);
		complete && complete();
	});
};

// get请求
util.getData = (path, params, fail, success, token = '', complete) => {
  axios.get(path, params, {withCredentials: true}).then((res) => {
    success && success(res.data);
    complete && complete();
  }).catch((error) => {
    console.error(error);
    fail && fail(error);
    complete && complete();
  });
};
export default util;
