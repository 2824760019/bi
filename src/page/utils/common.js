var dev=false   //开发环境设置为true，准备打包时候设置成false
// const test='http://localhost:8080/grid-front'  //测试机上http请求地址
const rel='http://www.gzzkrh.com:8080/grid-port/'   //正式机上数据请求地址
// const testImgUrl='http://localhost:8080/'  //测试机上http请求地址
const relImgUrl='http://www.gzzkrh.com:8080/'   //正式机上数据请求地址
const baseUrl=dev?test:rel    //三元判断
const addressImg=dev?testImgUrl:relImgUrl    //三元判断
export {
  addressImg,
  baseUrl,
}
