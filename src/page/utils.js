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
util.getData = (path, params, fail, success, token = '', complete) => {
	axios.post(path, params, {withCredentials: true}).then((res) => {
		success && success(res.data);
		complete && complete();
	}).catch((error) => {
		console.error(error);
		fail && fail(error);
		complete && complete();
	});
};
/**
 * @description 获取网络数据
 * @param file 文件
 * @param type 请求参数
 * @param fail 失败回调  失败在前为约束一定要处理错误情况
 * @param success 成功后回调
 */
util.uploadFileUrl = (path,file, type, onUploadProgress, success, fail) => {
	let config = {
		onUploadProgress: (progressEvent) => {
			let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
			onUploadProgress && onUploadProgress(percentCompleted);
		}
	};
	let formData = new FormData();
	formData.append('file', file);
	formData.append('fileType', type);
	axios.post(path, formData, config).then(res => {
		success && success(res);
	}).catch(error => {
		fail && fail(error);
	});
};
util.uploadFile = (file, type, onUploadProgress, success, fail) => {
	let config = {
		onUploadProgress: (progressEvent) => {
			let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
			onUploadProgress && onUploadProgress(percentCompleted);
		}
	};
	let url = '文件服务器地址';
	let formData = new FormData();
	formData.append('file', file);
	formData.append('fileType', type);
	axios.post(url, formData, config).then(res => {
		success && success(res);
	}).catch(error => {
		fail && fail(error);
	});
};
export default util;
