// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
// //定义state，并将power设置为一个空对象
// const state = {
//   status: {},
// }
// //定义mutations，可以传参，用于设置state里的token
// const mutations = {
//   dynamics: (state,value) => {
//     state.status=value
//   },
// }
// //定义getters，用于获取出state里的对象
// const getters = {
//   dynamics: state => {
//     return state.status
//   },
// }
//
// export default signUp Vuex.Store({
//   getters,
//   state,
//   mutations
// })
import Vue from 'vue'
import Vuex from 'vuex'
//
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    token:''
  },
  modules:{
    mutations
  },
  actions
})
// import Vue from 'vue'
// import Vuex from 'vuex'
// import actions from './actions.js'
// import mutations from './mutations.js'
// Vue.use(Vuex)
// //定义state，并将power设置为一个空对象
// const state = {
//   power: {},
// }
// //定义mutations，可以传参，用于设置state里的token
// const mutations = {
//   userMessagesList: (state,value) => {
//     state.power=value
//   },
// }
// //定义getters，用于获取出state里的对象
// const getters = {
//   userMessagesList: state => {
//     return state.power
//   },
// }
//
// export default signUp Vuex.Store({
//   getters,
//   state,
//   mutations
// })

